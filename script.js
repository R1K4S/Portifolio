const ferramentas = [
  {
    nome: "Figma",
    descricao:
      "Aplicação que utilizo para modelar produções e desrespeitar atos.",
    img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
  },
  {
    nome: "Figma",
    descricao:
      "Aplicação que utilizo para modelar produções e desrespeitar atos.",
    img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
  },
  {
    nome: "Figma",
    descricao:
      "Aplicação que utilizo para modelar produções e desrespeitar atos.",
    img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
  },
  {
    nome: "Figma",
    descricao:
      "Aplicação que utilizo para modelar produções e desrespeitar atos.",
    img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
  },
];
function criarCompFerramenta(ferramentas) {
  return `
  <div class="ferramenta-comp">
  <img src="${ferramentas.img}" alt="${ferramentas.nome} logo" class="ferramentas-logo">
  <h3 class="ferramentas">${ferramentas.nome}</h3>
  <p>${ferramentas.descricao}</p>
  </div>
  `;
}

function renderizarFerramentas() {
  const container = document.getElementById("ferramentas-container");
  container.innerHTML = ferramentas.map(criarCompFerramenta).join("");
}

document.addEventListener("DOMContentLoaded", renderizarFerramentas);
