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

## 3.6 Implementation details

| Requirement          | Usage Example                                                                                                             |
|----------------------|---------------------------------------------------------------------------------------------------------------------------|
| At least 4 pages     | [index.html](https://github.com/inf24tig35/inf24tig35/blob/main/index.html) <br> [sobre.html](https://github.com/inf24tig35/inf24tig35/blob/main/sobre.html) <br> [recursos.html](https://github.com/inf24tig35/inf24tig35/blob/main/recursos.html) <br> [contacto.html](https://github.com/inf24tig35/inf24tig35/blob/main/contacto.html) |
| 1 XML document        | [recursos.xml](https://github.com/inf24tig35/inf24tig35/blob/main/recursos.xml)                                            |
| 1 XSD document        | [schema.xsd](https://github.com/inf24tig35/inf24tig35/blob/main/schema.xsd)                                                |
| CSS file (if any)     | [css/style.css](https://github.com/inf24tig35/inf24tig35/blob/main/css/style.css)                                          |

### HTML Minimum requirements (usage of)

| Requirement     | Usage Example                                                                                           |
|-----------------|-------------------------------------------------------------------------------------------------------|
| XML file download | `<a href="recursos.xml" download>Download XML</a>`                                                    |
| Table           | `<table><thead>...</thead><tbody>...</tbody></table>`                                                 |
| List            | `<ul><li>Item 1</li><li>Item 2</li></ul>`                                                             |
| Nested List     | `<ul><li>Item 1<ul><li>Nested 1</li></ul></li></ul>`                                                  |
| Highlight       | `<em>exemplo</em>, <strong>destaque</strong>, <mark>marcação</mark>`                                  |
| Image           | `<img src="images/educacao.jpg" alt="Imagem de educação" />`                                          |
| Figure          | `<figure><img src="images/educacao.jpg" alt="Educação"><figcaption>Descrição da imagem</figcaption></figure>` |
| Figure Caption  | `<figcaption>Descrição da imagem</figcaption>`                                                       |
| Internal Link   | `<a href="recursos.html">Recursos</a>`                                                                |
| External Link   | `<a href="https://github.com/inf24tig35/inf24tig35" target="_blank">Repositório GitHub</a>`            |
| Form            | `<form>...</form>`                                                                                    |

### CSS Minimum requirements (usage of/change of)

| Requirement             | Usage Example                                    |
|-------------------------|------------------------------------------------|
| Type selector           | `body { background-color: #f4f4f4; }`           |
| Id selector             | `#conteudos-xml { display: flex; }`             |
| Class Selector          | `.card { border-radius: 8px; }`                  |
| Pseudo-class Selector   | `a:hover { text-decoration: underline; }`        |
| Attribute Selector      | `input[type="email"] { padding: 0.75em; }`       |
| Pseudo-element Selector | `h3::before { content: "📄 "; }`                  |
| Combinator Selector     | `ul li { margin-bottom: 0.5em; }`                 |
| Change Highlight style  | `mark { background-color: yellow; }`              |
| Image insertion         | `header { background-image: url('banner.jpg'); }` |
| Hide an element         | `.hidden { display: none; }`                       |
| Text style              | `strong { color: #b30000; }`                       |
| Font style              | `body { font-family: Arial, sans-serif; }`        |
| Background style        | `header, footer { background-color: #202020; }`   |
| float/position style    | `#conteudos-xml { flex-wrap: wrap; }`             |
| List style              | `ul { list-style: none; }`                         |
| Box element style       | `.card { box-shadow: 0 2px 5px rgba(0,0,0,0.1); }`|
| table style             | `table { border-collapse: collapse; }`            |
| Responsibility style 2 screen sizes | `@media screen and (max-width: 768px) { ... }` |

---

**Descrição da validação XML**

A validação do arquivo XML `recursos.xml` foi efetuada utilizando o ficheiro XSD `schema.xsd`, garantindo conformidade com o esquema definido. Utilizou-se uma ferramenta online de validação XML, como [XML Validation](https://www.xmlvalidation.com/), para assegurar que o documento está livre de erros e respeita a estrutura definida.
## Other Minimum requirements (location)

| Requirement                | Usage Example                                       |
|----------------------------|---------------------------------------------------|
| XML file                   | `recursos.xml`                                     |
| XSD file                   | `schema.xsd`                                      |

## 3.7 Other relevant implementation details

Neste projeto, foram adicionados diversos elementos que valorizam a aplicação, melhorando a experiência do utilizador e a interatividade.

| Element                            | Usage Example                                                                                           |
|----------------------------------|-------------------------------------------------------------------------------------------------------|
| Com JavaScript, alterar conteúdo | Utilização de `fetch()` para carregar dados do XML e atualizar o conteúdo da página dinamicamente.    |
| Com JavaScript, alterar estilo   | Aplicação de animações CSS via JavaScript ao interagir com cartões de recursos.                        |
| Com JavaScript, carregar XML     | Função JavaScript para ler o ficheiro `recursos.xml` e mostrar os dados na página.                     |
| Elemento `<video>`                | (Inserir link/exemplo se usares vídeo na página)                                                      |
| Elemento `<audio>`                | (Inserir link/exemplo se usares áudio na página)                                                      |
| Elemento `<canvas>`               | (Inserir link/exemplo se usares canvas para gráficos ou desenhos)                                     |
| Com CSS, Flexbox                 | `.card { display: flex; flex-direction: column; }` para organizar os cartões de recursos.             |
| Com CSS, transição               | `.card { transition: box-shadow 0.3s ease; }` para suavizar efeitos ao passar o cursor sobre cartões. |
| Com CSS, transformação           | `.card:hover { transform: scale(1.05); }` para ampliar o cartão quando focado.                        |
| Com CSS, animação                | (Adicionar exemplos se houver animações CSS definidas, como keyframes para fade-in, slide, etc.)      |

---
[< Previous](c2.md) | [^ Main](../../../) | [Next >](c4.md)
:--- | :---: | ---: 
