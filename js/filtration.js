const filters = document.querySelector("#filters");

filters.addEventListener("input", filterGoods);

function filterGoods() {
  const level = filters.querySelector("#level").value;
  outputGoods(DATA.filter((n) => !level || n.level === level));
}

function outputGoods(docs) {
  document.getElementById("docs").innerHTML = docs
    .map(
      (n) => `
      <div class="article-wrapper">
      <div class="article-second-wrapper">
        <h2 class="article-title">${n.name}</h2>
        <div class="read-download">
          <a
            class="read-download-read"
            href="${n.doc}"
            >Смотреть</a
          >
          <a class="read-download-download" href="#"
            >Скачать</a
          >
        </div>
      </div>
      <div class="video-description__date doc-date"></div>
    </div>
  `
    )
    .join("");
}

const DATA = [
  {
    level: "10 класс",
    name: "Формулы тригонометрии",
    doc: "./documents/1formuly-trigonometrii.pdf",
  },
  {
    level: "11 класс",
    name: "Квадратные уравнения и теорема Виета",
    doc: "./documents/2kvadratnye-uravneniya-i-teoremv-Vieta.pdf",
  },
  {
    level: "10 класс",
    name: "Основные свойства логарифмов",
    doc: "./documents/3osnovnye-svoystva-logarifmov.pdf",
  },
  {
    level: "Высшая математика",
    name: "Основные свойства прогрессий",
    doc: "./documents/4osnovnye-svoystva-progressiy.pdf",
  },
  {
    level: "10 класс",
    name: "Расположение корней квадратного трёхчлена в задачах с параметром",
    doc: "./documents/5raspolozh-kvadrat-trehchlena-v-zadach-s-param.pdf",
  },
  {
    level: "11 класс",
    name: "Стереометрия основные признаки и свойства",
    doc: "./documents/6stereometriya-osnovnye-priznaki-i-svoystva.pdf",
  },
  {
    level: "10 класс",
    name: "Треугольник",
    doc: "./documents/7treugolnik.pdf",
  },
];

outputGoods(DATA);
