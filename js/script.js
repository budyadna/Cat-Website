const Slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;

// Fungsi untuk menampilkan slide
function showSlides(index) {
  if (index >= Slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = Slides.length - 1;
  else currentSlide = index;

  // Geser slide
  const offset = -currentSlide * 100;
  document.querySelector(
    ".gallery-container"
  ).style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

// Tombol navigasi
prevButton.addEventListener("click", () => showSlides(currentSlide - 1));
nextButton.addEventListener("click", () => showSlides(currentSlide + 1));

// Klik pada dot
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlides(index));
});

// Slide pertama
showSlides(0);

// FAQ Section
// Menampilan jawab pada FAQ
document.querySelectorAll(".faq-item h3").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("open");
  });
});
