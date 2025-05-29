document.addEventListener("DOMContentLoaded", () => {
    fetch("conteudos.xml")
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        const recursos = xml.querySelectorAll("recurso");
        const container = document.getElementById("conteudos-xml");
  
        recursos.forEach(recurso => {
          const titulo = recurso.querySelector("titulo").textContent;
          const tipo = recurso.querySelector("tipo").textContent;
          const link = recurso.querySelector("link").textContent;
  
          const card = document.createElement("div");
          card.innerHTML = `
            <h3>${titulo}</h3>
            <p><strong>Tipo:</strong> ${tipo}</p>
            <a href="${link}" target="_blank">Ver recurso</a>
          `;
          card.style.border = "1px solid #ccc";
          card.style.padding = "1em";
          card.style.width = "30%";
          card.style.backgroundColor = "#fafafa";
          card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
          card.style.borderRadius = "8px";
  
          container.appendChild(card);
        });
      });
  });