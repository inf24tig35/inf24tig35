# C3 : Product

Ajuda ao estudo do 2º e 3º ciclo

## 3.1 Installation


O projeto Ensino TI está no GitHub, disponível para acesso e colaboração. Para executar localmente, basta clonar o repositório, abrir a pasta no editor e usar um servidor HTTP simples (ex: `python -m http.server`) para abrir os ficheiros estáticos.

## 3.2 Usage

O website é estático, acessível a qualquer utilizador sem necessidade de autenticação. Basta abrir o navegador e navegar nas páginas disponibilizadas.

## 3.3 Application/Product help

A interface apresenta um menu de navegação fixo no topo, com links para as quatro páginas principais: Início, Sobre, Recursos e Contacto. Os conteúdos são organizados de forma clara, com uso de cartões e listas, garantindo fácil acesso às informações.

## 3.4 Forms

A página Contacto possui um formulário de contacto simples com validação básica através do atributo HTML5 `required` em cada campo (nome, email e mensagem), garantindo que os campos essenciais sejam preenchidos antes do envio.

## 3.5 HTML5 and CSS3 validation

O código HTML e CSS foi validado utilizando os validadores oficiais da W3C, garantindo conformidade com os standards e evitando erros de sintaxe.

3.6 Implementation details
HTML Minimum requirements (usage of)

Requirement

Usage Example

Table

Em sobre.html para a lista de disciplinas: <table/>, <thead/>, <tbody/>, <tr/>, <th/>, <td/>.

List

Em todos os ficheiros HTML para navegação: <nav><ul><li><a href="index.html">Início</a></li></ul></nav>.

Nested List

Não explicitamente usado nos ficheiros fornecidos.

Highlight

Em index.html para o bloco de citação: <strong>"A educação é a arma mais poderosa que você pode usar para mudar o mundo."</strong>.

Image

Em index.html: <img src="ensino.jpg" alt="Imagem de educação" style="width: 400px; border-radius:8px; margin-top:1em;">.

Figure

Não explicitamente usado nos ficheiros fornecidos.

Figure Caption

Não explicitamente usado nos ficheiros fornecidos, associado à tag figure.

Internal Link

Em todas as páginas para navegação: <a href="index.html">Início</a>, <a href="sobre.html">Sobre</a>, etc.

External Link

Em conteudos.xml, os links dentro da tag <link> são externos, ex: <link>https://www.exerciciosinterativos.pt/abc123</link>. Em recursos.html, o link para download do XML é para um ficheiro local, mas o XML em si contém links externos.

Form

Em contacto.html para o formulário de mensagem: <form id="contactForm">...</form>.

CSS Minimum requirements (usage of/change of)

Requirement

Usage Example

Type selector

body { font-family: Arial, sans-serif; }, header, footer { background-color: #202020; }.

Id selector

#contactForm { max-width: 600px; } (em contacto.html <style>) ou #conteudos-xml { display: flex; } (em styles.css).

Class Selector

.success-message { color: #1a7f37; } (em contacto.html <style>), .error-message { color: #e03131; } (em contacto.html <style>).

Pseudo-class Selector

nav ul li a:hover { text-decoration: underline; } (em styles.css), button:hover { background-color: #444; } (em styles.css).

Attribute Selector

input[type="text"] { width: 100%; } (em contacto.html <style>), div[data-tipo="vídeo"] h3::before { content: "🎥 "; } (em styles.css).

Pseudo-element Selector

h3::before { content: "🎥 "; } (em styles.css para adicionar emojis baseados no atributo data-tipo).

Text style

text-align: center;, color: white;, font-weight: bold;, text-decoration: none;.

Font style

font-family: Arial, sans-serif;, font-size: 1em;. Em contacto.html, font-family: 'Inter', sans-serif;.

Background style

background-color: #202020; (header/footer), background-color: #f4f4f4; (body), background-color: #f9f9f9; (form).

float/position style

margin: 2em auto; (para centralizar o formulário em contacto.html e styles.css), display: flex; em nav ul e #conteudos-xml. Embora não seja float ou position diretamente, margin: auto e flexbox são mecanismos de posicionamento e layout.

List style

list-style: none; (para remover marcadores padrão da navegação em styles.css), padding: 0;, margin-left: 2em;.

Box element style

padding: 1em;, border: 1px solid #ddd;, border-radius: 8px;, box-sizing: border-box;, box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);.

table style

table { border-collapse: collapse; width: 100%; }, th, td { border: 1px solid #ddd; padding: 1em; text-align: left; }, thead { background-color: #202020; color: white; }, tbody tr:nth-child(even) { background-color: #f9f9f9; }.

Responsability style

@media screen and (max-width: 768px) { nav ul { flex-direction: column; gap: 1em; } form { width: 90%; } } (em styles.css). Uso de max-width e width: 100% para elementos flexíveis.

Other Minimum requirements (location)

Requirement

Usage Example

XML file

conteudos.xml (na pasta raiz do projeto).

XSD file

schema.xsd (mencionado em conteudos.xml via xsi:noNamespaceSchemaLocation="schema.xsd").

