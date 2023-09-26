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
document.querySelectorAll(".main-footer-btn").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;
    if (parent.classList.contains("content-active")) {
      parent.classList.remove("content-active");
    } else {
      document.querySelectorAll(".main-footer__item").forEach((child) => {
        child.classList.remove("content-active");
        parent.classList.add("content-active");
      });
    }
  });
});
