// 1. Задача про обчислення різниці часу

function durationBetweenDates(startDate = '24 Aug 1991', endDate = '24 Aug 1991', dimension = 'days') {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const timeDiff = Math.abs(end - start); // time difference in milliseconds

  switch (dimension) {
    case 'days':
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      return `${daysDiff} days`;
    case 'hours':
      const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
      return `${hoursDiff} hours`;
    case 'minutes':
      const minutesDiff = Math.floor(timeDiff / (1000 * 60));
      return `${minutesDiff} minutes`;
    case 'seconds':
      const secondsDiff = Math.floor(timeDiff / 1000);
      return `${secondsDiff} seconds`;
  }
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')) // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')) // поверне '362 days'

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
  } else if (number % 2 === 0) {
    return recursiveOddSumTo(number - 1);
  } else {
    return number + recursiveOddSumTo(number - 2);
  }
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25


// Ітерація:
function iterativeOddSumTo(number) {
    const sum = 0;
    for (const i = 1; i <= number; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  console.log(iterativeOddSumTo(1)) // 1
  console.log(iterativeOddSumTo(10)) // 25