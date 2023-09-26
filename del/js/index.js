//drop down на услуги
let dropDown = document.getElementById("dropDown");
dropDown.addEventListener("click", function () {
  document.getElementById("drop").classList.toggle("show");
});

//popup на калькулятор
const popup = document.querySelector(".pop-up");
const openPopupButtons = document.querySelector(".open-popup");
const closePopupButton = document.querySelector(".pop-up__close");

openPopupButtons.addEventListener("click", () => {
  popup.classList.add("active");
});

closePopupButton.addEventListener("click", () => {
  popup.classList.remove("active");
});

//tabs
const btns = document.querySelectorAll(".tab__btn");
const contents = document.querySelectorAll(".main__header-box");

btns.forEach((tab) =>
  tab.addEventListener("click", (e) => {
    const index = Array.from(btns).indexOf(tab);

    btns.forEach((el) => el.classList.remove("tab__btn-active"));
    contents.forEach((el) => el.classList.remove("main__header-box-active"));

    tab.classList.add("tab__btn-active");
    contents[index].classList.add("main__header-box-active");

    e.preventDefault();
  })
);

//accordeon
const btnAccordeon = document.querySelectorAll(".main-footer__item");

const accordeon = document.querySelector(".main__footer-content");

btnAccordeon.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("is-open");
  });
});
