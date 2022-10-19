const firstCard = document.querySelector(".card-first");
const secondCard = document.querySelector(".card-second");
const btnNumber = document.querySelectorAll(".btn-number");
const btnSubmit = document.querySelector(".btn-submit");
const numberSelected = document.querySelector(".num");
btnNumber.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
    let count = btn.textContent;
    numberSelected.innerHTML = count;
  });
});
btnSubmit.addEventListener("click", (e) => {
  firstCard.classList.add("invisible");
  secondCard.classList.remove("invisible");
});
