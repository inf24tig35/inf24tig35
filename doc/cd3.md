# C3 : Product

Ajuda ao estudo do 2º e 3º ciclo

## 3.1 Installation


O projeto Ensino TI está hospedado no GitHub, disponível para acesso e colaboração. Para executar localmente, basta clonar o repositório, abrir a pasta no editor e usar um servidor HTTP simples (ex: `python -m http.server`) para servir os ficheiros estáticos.

## 3.2 Usage


O website é estático, acessível a qualquer utilizador sem necessidade de autenticação. Basta abrir o navegador e navegar nas páginas disponibilizadas.

## 3.3 Application/Product help

A interface apresenta um menu de navegação fixo no topo, com links para as quatro páginas principais: Início, Sobre, Recursos e Contacto. Os conteúdos são organizados de forma clara, com uso de cartões e listas, garantindo fácil acesso às informações.

## 3.4 Forms

A página Contacto possui um formulário de contacto simples com validação básica através do atributo HTML5 `required` em cada campo (nome, email e mensagem), garantindo que os campos essenciais sejam preenchidos antes do envio.

## 3.5 HTML5 and CSS3 validation

O código HTML e CSS foi validado utilizando os validadores oficiais da W3C, garantindo conformidade com os standards e evitando erros de sintaxe.

## 3.6 Implementation details


| Requirement                | Usage Example                                                                                      |
|----------------------------|--------------------------------------------------------------------------------------------------|
| Table                      | `<table><thead>...</thead><tbody>...</tbody></table>`                                            |
| List                       | `<ul><li>Item 1</li><li>Item 2</li></ul>`                                                        |
| Nested List                | `<ul><li>Item 1<ul><li>Nested 1</li></ul></li></ul>`                                              |
| Highlight                  | `<p><em>exemplo</em> e <strong>destaque</strong> e <mark>marcação</mark></p>`                    |
| Image                      | `<img src="images/educacao.jpg" alt="Imagem de educação" />`                                     |
| Figure                     | `<figure><img src="images/educacao.jpg" alt="Educação"><figcaption>Descrição da imagem</figcaption></figure>` |
| Figure Caption             | `<figcaption>Descrição da imagem</figcaption>`                                                  |
| Internal Link              | `<a href="recursos.html">Recursos</a>`                                                          |
| External Link              | `<a href="https://github.com/Duarte35/ensino_ti" target="_blank">Repositório GitHub</a>`          |
| Form                       | `<form>...</form>`                                                                               |

## CSS Minimum requirements (usage of/change of)

| Requirement                | Usage Example                                      |
|----------------------------|--------------------------------------------------|
| Type selector              | `body { background-color: #f4f4f4; }`             |
| Id selector                | `#conteudos-xml { display: flex; }`               |
| Class Selector             | `.card { border-radius: 8px; }`                    |
| Pseudo-class Selector      | `a:hover { text-decoration: underline; }`          |
| Attribute Selector         | `input[type="email"] { padding: 0.75em; }`         |
| Pseudo-element Selector    | `h3::before { content: "📄 "; }`                    |
| Text style                 | `strong { color: #b30000; }`                        |
| Font style                 | `body { font-family: Arial, sans-serif; }`         |
| Background style           | `header, footer { background-color: #202020; }`    |
| float/position style       | `#conteudos-xml { flex-wrap: wrap; }`              |
| List style                 | `ul { list-style: none; }`                          |
| Box element style          | `.card { box-shadow: 0 2px 5px rgba(0,0,0,0.1); }` |
| table style                | `table { border-collapse: collapse; }`             |
| Responsability style       | `@media screen and (max-width: 768px) { ... }`     |

## Other Minimum requirements (location)

| Requirement                | Usage Example                                       |
|----------------------------|---------------------------------------------------|
| XML file                   | `recursos.xml`                                     |
| XSD file                   | `schema.xsd`                                      |

## 3.7 Other relevant implementation details

- Utilização de Javascript para carregar o conteúdo XML dinamicamente no HTML.
- Implementação de cartões com animações e emojis indicativos do tipo de recurso.
- Uso de validação HTML5 nos formulários.
- Design responsivo com media queries para diferentes tamanhos de ecrã.
- Uso de flexbox para organização da interface e dos recursos.

