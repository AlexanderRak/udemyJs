let money = prompt("Ваш бюджет на месяц?", ''), // 15 000
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''), // 10 000
  a2 = prompt("Во сколько обойдется?", ''), // 1 000
  a3 = prompt("Введите обязательную статью расходов в этом месяце", ''), // 10 000
  a4 = prompt("Во сколько обойдется?", ''); // 1 000

appData.expenses.a1 = a2; // 10 000
appData.expenses.a3 = a4; // 1 000

alert(appData.budget / 30); // 15 000 / 30 = 500