require('dotenv').config(); // Carrega variáveis de ambiente de um ficheiro .env
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000; // Define a porta, ou usa 3000 por padrão

// Middleware para analisar o corpo da requisição em JSON
app.use(express.json());

// *** Importante: Serve ficheiros estáticos DA PASTA ATUAL onde o server.js está. ***
// Se os seus ficheiros HTML/CSS/JS estiverem na mesma pasta que o server.js, use __dirname
app.use(express.static(__dirname));

// Opcional: Redireciona a raiz ('/') para o seu 'index.html'
// Isto é útil se o seu ficheiro principal for 'index.html' na pasta raiz
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Configuração CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Para desenvolvimento, use domínios específicos em produção
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Rota para processar o envio de email (POST /send-email)
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validação básica dos dados recebidos
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Nome, email e mensagem são obrigatórios.' });
  }

  // Configurar o transporte do Nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' ou host e porta do seu provedor SMTP
    auth: {
      user: process.env.EMAIL_USER, // O seu email (do .env)
      pass: process.env.EMAIL_PASS  // A sua password de aplicação (do .env)
    }
  });

  // Opções do email a enviar
  let mailOptions = {
    from: `"${name}" <${email}>`, // Remetente (o nome e email do utilizador do formulário)
    to: process.env.YOUR_RECEIVING_EMAIL, // O seu email onde quer receber as mensagens (do .env)
    subject: `Novo Contacto do Site: ${subject || 'Sem Assunto'}`,
    html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject || 'N/A'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    // Tenta enviar o email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email enviado: %s', info.messageId);
    res.status(200).json({ message: 'Email enviado com sucesso!' }); // Resposta de sucesso para o cliente
  } catch (error) {
    // Captura e trata qualquer erro que ocorra durante o envio do email
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ message: 'Erro ao enviar o email. Por favor, tente novamente mais tarde.' }); // Resposta de erro para o cliente
  }
});

// Inicia o servidor Node.js à escuta de requisições na porta definida
app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`);
  console.log('Certifique-se de que o seu ficheiro .env está configurado corretamente.');
  console.log(`A servir ficheiros estáticos de: ${__dirname}`);
});
