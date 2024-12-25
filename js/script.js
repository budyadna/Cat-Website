const galleryContainer = document.querySelector(".gallery-container");
const slides = document.querySelectorAll(".gallery-slide");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let currentIndex = 0;

const updateButtons = () => {
  leftBtn.classList.toggle("hidden", currentIndex === 0);
  rightBtn.classList.toggle("hidden", currentIndex === slides.length - 1);
};

leftBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    galleryContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();
  }
});

rightBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    galleryContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();
  }
});

updateButtons();
