// Importa o módulo 'dotenv' (para testar localmente a função)
// ATENÇÃO: No Netlify, as variáveis de ambiente são configuradas diretamente na plataforma,
// não precisam de um ficheiro .env. Este `require` é mais para testar a função individualmente.
require('dotenv').config();

const nodemailer = require('nodemailer');

// O handler é a função principal que o Netlify vai executar
exports.handler = async (event, context) => {
    // A Netlify Function recebe a requisição HTTP no objeto 'event'
    // Os dados do formulário virão no 'event.body'
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Método Não Permitido. Use POST.' }),
        };
    }

    let data;
    try {
        // O corpo da requisição é uma string JSON, precisa de ser analisado
        data = JSON.parse(event.body);
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Requisição inválida. O corpo não é JSON.' }),
        };
    }

    const { name, email, subject, message } = data;

    // Validação básica dos dados recebidos
    if (!name || !email || !message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Nome, email e mensagem são obrigatórios.' }),
        };
    }

    // Configurar o transporte do Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Ou host: 'smtp.seuprovedor.com', port: 587, secure: false
        auth: {
            // As variáveis de ambiente vêm de process.env
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Opções do email a enviar
    let mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.YOUR_RECEIVING_EMAIL,
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
        console.log('Email enviado (Netlify Function): %s', info.messageId);

        // Retorna uma resposta de sucesso
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Mensagem enviada com sucesso!' }),
        };
    } catch (error) {
        // Captura e trata qualquer erro que ocorra durante o envio do email
        console.error('Erro ao enviar email (Netlify Function):', error);

        // Retorna uma resposta de erro
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao enviar o email. Por favor, tente novamente mais tarde.' }),
        };
    }
};
