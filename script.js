//Section Ferramentas
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
//Section linguagem
const linguagens = [
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
function criarCompLinguagem(linguagens) {
  return `
  <div class="linguagens-comp">
  <img src="${linguagens.img}" alt="${linguagens.nome} logo" class="ferramentas-logo">
  <h3 class="ferramentas">${linguagens.nome}</h3>
  <p>${linguagens.descricao}</p>
  </div>
  `;
}

function renderizarLinguagens() {
  const container = document.getElementById("linguagens-container");
  container.innerHTML = linguagens.map(criarCompLinguagem).join("");
}

document.addEventListener("DOMContentLoaded", renderizarLinguagens);
//Projetos
document.addEventListener("DOMContentLoaded", function () {
  // Lista de cards (pode vir de uma API, banco de dados, etc.)
  const cardsList = [
    {
      image: "https://via.placeholder.com/300x200/FF5733/FFFFFF",
      title: "Projeto 1",
      description: "Descrição do primeiro projeto desenvolvido.",
    },
    {
      image: "https://via.placeholder.com/300x200/33FF57/FFFFFF",
      title: "Projeto 2",
      description: "Descrição do segundo projeto incrível.",
    },
    {
      image: "https://via.placeholder.com/300x200/3357FF/FFFFFF",
      title: "Projeto 3",
      description: "Terceiro projeto com tecnologias modernas.",
    },
    {
      image: "https://via.placeholder.com/300x200/F333FF/FFFFFF",
      title: "Projeto 4",
      description: "Nosso quarto projeto premiado.",
    },
    {
      image: "https://via.placeholder.com/300x200/33FFF3/FFFFFF",
      title: "Projeto 5",
      description: "O quinto projeto revolucionário.",
    },
  ];

  const carrossel = document.querySelector(".carrossel");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");
  let currentIndex = 0;
  let cardWidth = 0;
  let visibleCards = 0;

  // Criar cards a partir da lista
  function createCards() {
    // Duplicar os cards para criar efeito infinito
    const duplicatedCards = [...cardsList, ...cardsList, ...cardsList];

    duplicatedCards.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.innerHTML = `
              <img src="${card.image}" alt="${card.title}">
              <div class="card-content">
                  <h3>${card.title}</h3>
                  <p>${card.description}</p>
              </div>
          `;
      carrossel.appendChild(cardElement);
    });

    // Calcular dimensões após os cards serem criados
    calculateDimensions();
  }

  // Calcular largura dos cards e quantos são visíveis
  function calculateDimensions() {
    if (carrossel.children.length > 0) {
      cardWidth = carrossel.children[0].offsetWidth + 20; // + gap
      visibleCards = Math.floor(
        document.querySelector(".carrossel-container").offsetWidth / cardWidth
      );

      // Posicionar no meio da lista duplicada
      currentIndex = cardsList.length;
      updateCarrossel();
    }
  }

  // Atualizar posição do carrossel
  function updateCarrossel() {
    const offset = -currentIndex * cardWidth;
    carrossel.style.transform = `translateX(${offset}px)`;
  }

  // Avançar para o próximo card
  function nextSlide() {
    currentIndex++;

    // Resetar para o início quando chegar ao final
    if (currentIndex >= cardsList.length * 2) {
      currentIndex = cardsList.length;
      carrossel.style.transition = "none";
      updateCarrossel();
      // Forçar reflow
      void carrossel.offsetWidth;
      carrossel.style.transition = "transform 0.5s ease";
    }

    updateCarrossel();
  }

  // Voltar para o card anterior
  function prevSlide() {
    currentIndex--;

    // Resetar para o final quando chegar ao início
    if (currentIndex < 0) {
      currentIndex = cardsList.length;
      carrossel.style.transition = "none";
      updateCarrossel();
      // Forçar reflow
      void carrossel.offsetWidth;
      carrossel.style.transition = "transform 0.5s ease";
    }

    updateCarrossel();
  }

  // Event listeners
  btnNext.addEventListener("click", nextSlide);
  btnPrev.addEventListener("click", prevSlide);

  // Navegação por teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Redimensionamento da tela
  window.addEventListener("resize", calculateDimensions);

  // Inicializar
  createCards();

  // Opcional: Autoplay
  let autoplay = setInterval(nextSlide, 3000);

  // Pausar autoplay quando o mouse estiver sobre o carrossel
  carrossel.addEventListener("mouseenter", () => clearInterval(autoplay));
  carrossel.addEventListener("mouseleave", () => {
    autoplay = setInterval(nextSlide, 3000);
  });
});
