# Ensino para Todos

Repositório para alojar o projeto desenvolvido na unidade curricular de Tecnologias e Internet, 1º ano da licenciatura. Desenvolvido pelo elemento [@duarte35](https://github.com/duarte35).

## Descrição do Projeto

O projeto consiste numa plataforma educativa estática com conteúdos gratuitos para apoio ao estudo de alunos dos 2.º e 3.º ciclos. Foi utilizado HTML5, CSS3 e JavaScript para cumprir todos os requisitos definidos no enunciado.

## Organização do Repositório

* **Ficheiros HTML**: páginas principais (`index.html`, `sobre.html`, `recursos.html`, `contacto.html`) 
* **Estilos CSS**: ficheiro central `styles.css` 
* **JavaScript**: `script.js` para carregamento dinâmico de conteúdo XML 
* **Conteúdo XML**: `conteudos.xml` com dados estruturados e `schema.xsd` para validação 
* **Imagens**: incluídas através de URLs [imagens](doc/images)

## Galeria de Resultados

| Página Inicial                          |     Sobre                           |
|----------------------------------------|--------------------------------------|
| ![Index](doc/images/index.png)        | ![sobre](doc/images/objetivo.png) |

| Conteudos                               | Contactos                           |
|----------------------------------------|--------------------------------------|
| ![Conteudos](doc/images/conteudos.png) | ![contactos](doc/images/contacto.png) |

> Capturas de ecrã ilustrativas das páginas principais desenvolvidas.

## Tecnologias Utilizadas

* [HTML5](https://developer.mozilla.org/pt-PT/docs/Web/HTML)
* [CSS3](https://developer.mozilla.org/pt-PT/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript)
* [XML + XSD](https://www.w3schools.com/xml/schema_intro.asp)

### Bibliotecas e Ferramentas

* Nenhuma biblioteca externa foi usada para cumprir os critérios do trabalho (sem Bootstrap, sem jQuery).
* Validação dos ficheiros feita via [W3C Validators](https://validator.w3.org/).

## Relatório

### Capítulo 1: Apresentação do Projeto
- Plataforma com 4 páginas estáticas para consulta e apoio ao estudo
- Integração de conteúdos XML de forma dinâmica usando JavaScript

### Capítulo 2: Interface Gráfica
- Interface responsiva
- Utilização de Flexbox para disposição de elementos
- Estilo uniforme com CSS externo

### Capítulo 3: Produto Final
- Conteúdos organizados por disciplina e ciclo de ensino
- Carregamento automático de cartões educativos a partir de `conteudos.xml`

### Capítulo 4: Validação e Conclusão
- Testado com validadores HTML e CSS
- Cumprimento de todos os requisitos definidos no enunciado

## Equipa

* Duarte Ferreira [@duarte35](https://github.com/duarte35)
