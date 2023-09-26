// 1 получаем кнопки и дисплей 
const buttons = document.querySelectorAll('.btn-number, .btn-operator')
const display = document.querySelector('.display')


// 2 создаем переменную для хранения данных 
let displayData = "";
// 3 перебираем кнопки и выводим их на дисплей
buttons.forEach(button => {
  // 3.1прослушивание кнопок
  button.addEventListener('click', () => { 
      //3.2получаем атрибуты кнопок
      const buttonValue = button.getAttribute('data-num'); 
      //3.3полученный результат добавляем в переменную для хранения данных  
      displayData += buttonValue;
      //3.4выводим на дисплей 
      display.textContent = displayData;
  })
})

//4получаем значени 
const equalsButton = document.querySelector('.btn-equals')
//4.1добавляем прослушивание на равно 
equalsButton.addEventListener('click', () => { 
  //4.2выполняем полученный код благодаря eval,он выполняет код в скобках 
  displayData=eval(displayData)
  //4.2выводим результат на дисплей 
  display.textContent = displayData
})

//5отчистка значения 
const clearButton = document.querySelector('.btn-clear')


clearButton.addEventListener('click', () => { 
  displayData = "";
  display.textContent = displayData;
})



