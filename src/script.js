console.log("JS carregado com sucesso");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM totalmente carregado");

  fetch("conteudos.xml")
    .then(response => {
      console.log("XML carregado");
      return response.text();
    })
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");
      const recursos = xml.querySelectorAll("recurso");
      const container = document.getElementById("conteudos-xml");

      // Aplicar estilo de grelha no container
      container.style.display = "flex";
      container.style.flexWrap = "wrap";
      container.style.justifyContent = "center";
      container.style.gap = "1.5em";
      container.style.marginTop = "2em";

      recursos.forEach(recurso => {
        const titulo = recurso.querySelector("titulo").textContent;
        const tipo = recurso.querySelector("tipo").textContent;
        const link = recurso.querySelector("link").textContent;

        const card = document.createElement("div");
        card.innerHTML = `
          <h3>${titulo}</h3>
          <p><strong style="color: #b30000;">Tipo:</strong> ${tipo}</p>
          <a href="${link}" target="_blank">Ver recurso</a>
        `;

        // Estilo do cartão
        card.style.border = "1px solid #ccc";
        card.style.padding = "1em";
        card.style.backgroundColor = "#f9f9f9";
        card.style.borderRadius = "8px";
        card.style.width = "260px";
        card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        card.style.textAlign = "left";

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar XML:", error);
      document.getElementById("conteudos-xml").innerHTML = `<p style="color:red;">Erro ao carregar conteúdos.</p>`;
    });
});