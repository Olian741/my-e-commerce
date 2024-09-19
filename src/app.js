document.addEventListener("DOMContentLoaded", function() {
  const sliderWrapper = document.querySelector(".slider");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");

  leftBtn.addEventListener("click", () => {
    sliderWrapper.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    sliderWrapper.scrollBy({ left: 300, behavior: "smooth" });
  });
});
