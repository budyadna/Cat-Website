// Gallery
const galleryContainer = document.querySelector(".gallery-container");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let currentIndex = 0;
const cardPerView = 6;
const totalCards = galleryContainer.children.length;
const totalSlides = math.cell(totalCards / cardPerView);

// Update bottons
const updateButtons = () => {
  leftBtn.classList.toggle("hidden", currentIndex === 0);
  rightBtn.classList.toggle("hidden", currentIndex === totalSlides - 1);
};

// Jalankan fungsi left-btn
leftBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    galleryContainer.style.transform = `translateY(-${currentIndex * 100}%)`;
    updateButtons();
  }
});

// Jalankan fungsi right-btn
rightBtn.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    galleryContainer.style.transform = `translateY(${currentIndex * 100}%)`;
    updateButtons();
  }
});

updateButtons();
