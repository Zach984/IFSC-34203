const heroImage = document.getElementById("heroImage");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

const images = [
    {
        src: "./assets/img/storeFront2.jpg",
        alt: "Stage 2 Games storefront"
    },
    {
        src: "./assets/img/crowded.jpg",
        alt: "Stage 2 Games store image"
    },
    {
        src: "./assets/img/eventLineup.jpg",
        alt: "Stage 2 Games store image"
    },
    {
        src:"./assets/img/moving.jpg",
        alt: "Stage 2 games moving location"
    }
];

let currentImage = 0;

function showImage(index) {
    heroImage.src = images[index].src;
    heroImage.alt = images[index].alt;
}

nextSlide.addEventListener("click", function () {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage(currentImage);
});

prevSlide.addEventListener("click", function () {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage(currentImage);
});