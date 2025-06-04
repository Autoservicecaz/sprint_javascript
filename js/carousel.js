// Armazena os itens do carrossel
let carouselArr = [];

class Carousel {
    static _sequence = 0;
    static _size = 0;
    static _interval = null;
    static _arr = [];
    static _element = null;
    static _titleElement = null;

    constructor(img, title, link) {
        this.img = img;
        this.title = title;
        this.link = link;
    }

    static Start(arr, elementID, titleID) {
        if (Array.isArray(arr) && arr.length > 0) {
            Carousel._arr = arr;
            Carousel._size = arr.length;
            Carousel._element = document.getElementById(elementID);
            Carousel._titleElement = document.getElementById(titleID);

            if (!Carousel._element) {
                console.error(`Elemento com ID '${elementID}' não encontrado.`);
                return;
            }

            Carousel._sequence = 0;
            Carousel.Next(); // mostra o primeiro

            Carousel._interval = setInterval(() => Carousel.Next(), 2000);
        } else {
            throw "O método Start precisa de um array válido.";
        }
    }

    static Next() {
        const item = Carousel._arr[Carousel._sequence];

        // Atualiza imagem
        Carousel._element.innerHTML = `
    <div class="carousel-item">
        <a href="${item.link}">
            <img src="${item.img}" alt="Carrossel">
        </a>
        <p class="carousel-description">${item.title}</p>
    </div>
`;


        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}
