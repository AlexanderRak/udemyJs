"use strict";
/* jshint esversion: 6 */

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}
start();


let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true
};

function shooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
  
    if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
      console.log("Всё сработало");
      appData.expenses[a] = b;
    } else {
      console.log("Плохой результат");
      i--;
    }
  }
}
shooseExpenses();

// Функция для определения необязательных расходов
function chooseOptExpenses() {
  for(let i = 0; i <=3; i++) {
    let questionOptExpenses = +prompt("Статья необязательных расходов?", '');
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
  }
}
chooseOptExpenses();

// Расчет дневного бюджета
function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Бюджет на 1 день составляет: " + appData.moneyPerDay);
}
detectDayBudget();

// Расчет уровня достатка
function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка");
  } else {
    console.log("Упппс Ошибка");
  }
}
detectLevel();

function cheakSavings() {
  if(appData.savings == true) {
    let save = +prompt("Какова сумма накопления?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncore = save / 100 / 12*percent;
    alert("Доход в месяц с вашего дипозита: " + appData.monthIncore);
  }
}
cheakSavings();
