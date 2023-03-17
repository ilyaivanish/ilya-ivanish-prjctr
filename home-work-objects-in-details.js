// 1. Задача про обчислення різниці часу

function durationBetweenDates(firstDate = '24 Aug 1991', secondDate = '24 Aug 1991', dimension = 'days') {
  const startDate = new Date(firstDate);
  const endDate = new Date(secondDate);

  const timeDiff = Math.abs(endDate - startDate); // time difference in milliseconds

  const dimensionMap = {
    days: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000
  };

  if (!(dimension in dimensionMap)) {
    return (`Incorrect dimension: ${dimension}`);
   }

  const dimensionDiff = Math.floor(timeDiff / dimensionMap[dimension]);
  return `${dimensionDiff} ${dimension}`;
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')) // returns '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')) // returns '362 days'


// 2. Задача про перетворення об'єкту

const priceData = {
Apples: '23.4',
BANANAS: '48',
oRAngGEs: '48.7584',
 };

function optimizer(data) {
  const updatedData = {};
  for (const key in data) {
    const lowercaseKey = key.toLowerCase();
    const roundedValue = Number.parseFloat(data[key]).toFixed(2);
    updatedData[lowercaseKey] = roundedValue;
  }
  return updatedData;
}

const updatedPriceData = optimizer(priceData);
console.log(updatedPriceData)    // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// 3. Задача про рекурсію та ітерацію:

// Рекурсія:
function recursiveOddSumTo(number) {
  if (number <= 0) {
    return 0;
  } 
  if (number % 2 === 0) {
    return recursiveOddSumTo(number - 1);
  }
    return number + recursiveOddSumTo(number - 2);
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25


// Ітерація:
function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  console.log(iterativeOddSumTo(1)) // 1
  console.log(iterativeOddSumTo(10)) // 25