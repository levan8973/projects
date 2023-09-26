const buttons = document.querySelectorAll(".btn-number,.btn-operator");
const display = document.querySelector(".display");

let displayData = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-num");
    displayData += value;
    display.textContent = displayData;
  });
});

const equalsButton = document.querySelector(".btn-equals");

equalsButton.addEventListener('click', () => {
  displayData = eval(displayData);
  display.textContent = displayData;
});

const clearBtn = document.querySelector('.btn-clear')

clearBtn.addEventListener('click',()=>{
  displayData = ""
display.textContent= displayData
})
