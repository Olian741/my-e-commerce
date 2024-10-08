document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");

  leftBtn.addEventListener("click", () => {
    sliderWrapper.scrollBy({ left: -300, behavior: "smooth" });
  });
  rightBtn.addEventListener("click", () => {
    sliderWrapper.scrollBy({ left: 300, behavior: "smooth" });
  });
  const secondSliderWrapper = document.querySelector(".second-slider-wrapper");
  const secondLeftBtn = document.querySelector(".second-slider-btn.left");
  const secondRightBtn = document.querySelector(".second-slider-btn.right");

  secondLeftBtn.addEventListener("click", () => {
    secondSliderWrapper.scrollBy({ left: -300, behavior: "smooth" });
  });
  secondRightBtn.addEventListener("click", () => {
    secondSliderWrapper.scrollBy({ left: 300, behavior: "smooth" });
  });

  const thirdSliderWrapper = document.querySelector(".third-slider-wrapper");
  const thirdLeftBtn = document.querySelector(".third-slider-btn.left");
  const thirdRightBtn = document.querySelector(".third-slider-btn.right");

  thirdLeftBtn.addEventListener("click", () => {
    thirdSliderWrapper.scrollBy({ left: -300, behavior: "smooth" });
  });
  thirdRightBtn.addEventListener("click", () => {
    thirdSliderWrapper.scrollBy({ left: 300, behavior: "smooth" });
  });
});

function redirect() {
  window.location.href = "confirmation.html";
}
document.getElementById("refundForm").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const damaged = document.getElementById("damaged").value;

    if (name === "" || email === "" || damaged === "") {
      alert("Please fill in all required fields.");
      event.preventDefault(); 
    }
  });


