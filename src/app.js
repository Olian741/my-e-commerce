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

document.getElementById("refundForm").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const damaged = document.getElementById("damaged").value;
    if (name === "" || email === "" || damaged === "") {
      alert("Please fill in all required fields.");
      event.preventDefault(); 
    }
  });
  document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
    });

       function validateForm() {
         const personal = document.getElementById("personal").value;
         const contact = document.getElementById("contact").value;
         const phone = document.getElementById("phone").value;
         const address = document.getElementById("address").value;
         const cardNumber = document.getElementById("cardNumber").value;
         const mm = document.getElementById("mm").value;
         const yyyy = document.getElementById("yyyy").value;
         const cvv = document.getElementById("cvv").value;

         if (!personal ||!contact ||!phone 
          || !address ||!cardNumber ||!mm ||!yyyy || !cvv
         ) {
           alert("Please fill in all fields before proceeding.");
           return; 
         }
         redirect(); 
       }
          function redirect() {
          window.location.href = "confirmation.html";
        }
       









 


  




    




