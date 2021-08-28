// Incomes inputs:

const incomeSalary = document.getElementById('income-salary'),
      incomeFrelance = document.getElementById('income-freelance'),
      incomeExtraOne = document.getElementById('income-extra-1'),
      incomeExtraTwo = document.getElementById('income-extra-2');


// Costs inputs:

const costsFlat = document.getElementById('costs-flat'),
      costsHouseService = document.getElementById('costs-house-services'),
      costsTransport = document.getElementById('costs-transport'),
      costsCredits = document.getElementById('costs-credit');


// Outputs data

const totalMonth = document.getElementById('total-month'),
      totalDay = document.getElementById('total-day'),
      totalYear = document.getElementById('total-year');


let totalMonths;
let totalDays;
let totlaYears;

//  MoneyBox

const moneyBoxRange = document.getElementById('money-box-range'),
      acceleratorInput = document.getElementById('accumulation'),
      spendInput = document.getElementById('spend');

let accelerator = 0;
let totalPocents = 0;

const inputAll = document.querySelectorAll('.input');
for (input of inputAll){
  input.addEventListener('input', () => {
    coutingMoney();
    calculationPrecents();
  });
}



const stringToNumber = str => str.value ? parseInt(str.value) : 0


const coutingMoney = () => {
  const totalPerMonth = stringToNumber(incomeSalary) + stringToNumber(incomeFrelance) + stringToNumber(incomeExtraOne) + stringToNumber(incomeExtraTwo);
  const totalCosts = stringToNumber(costsFlat) + stringToNumber(costsHouseService) + stringToNumber(costsTransport) + stringToNumber(costsCredits);

  totalMonths = totalPerMonth - totalCosts;
  totalMonth.value = totalMonths;
}

moneyBoxRange.addEventListener('input', e => {
  const totalPrecentElement = document.getElementById('total-precents');
  totalPocents = e.target.value;
  totalPrecentElement.innerHTML = totalPocents;
  calculationPrecents();
});

const calculationPrecents = () => {
  accelerator = ((totalMonths * totalPocents)  / 100).toFixed(2);
  acceleratorInput.value = accelerator;

  spendInput.value = totalMonths - accelerator;

  totalDays = (spendInput.value / 30).toFixed(2);
  totalDay.value = totalDays;

  totalYears = (accelerator * 12).toFixed(0);
  totalYear.value = totalYears;

}