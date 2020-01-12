// "use strict";
/* jshint esversion: 6 */


let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", '');
  b = prompt("Во сколько обойдется?", '');

  if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
    console.log("Всё сработало");
    appData.expenses[a] = b;
  } else {
    console.log("Плохой результат");
    i--;
  }
}


// Используем цикл do while
/*
let i = 0;
do {
  let a = prompt("Введите обязательную статью расходов в этом месяце", '');
  b = prompt("Во сколько обойдется?", '');

  if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
    console.log("Всё сработало");
    appData.expenses[a] = b;
  } else {
    console.log("Плохой результат");
    i--;
  }
  i++;
} while (i < 2);
*/


// Используем цикл while
/*
let i = 0;
while (i < 2) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", '');
  b = prompt("Во сколько обойдется?", '');

  if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
    console.log("Всё сработало");
    appData.expenses[a] = b;
  } else {
    console.log("Плохой результат");
    i--;
  }
  i++;
}
*/

appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на 1 день составляет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Это минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Это средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Это высокий уровень достатка");
} else {
  console.log("Упппс Ошибка");
}

console.log(appData);