// 1. Ітератор
function fizzBuzzIterator() {
    let number = 1;
    return {
      next: function() {
        let output = "";
        if (number % 3 === 0) {
          output += "Fizz";
        }
        if (number % 5 === 0) {
          output += "Buzz";
        }
        if (number <= 100) {
          number++;
          return { done: false, value: output || number - 1 };
        } else {
          return { done: true };
        }
      }
    };
}
  
const iterator = fizzBuzzIterator();
let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}

// 2. Генератор
function* fizzBuzzGenerator() {
    let number = 1;
    while (number <= 100) {
      let output = "";
      if (number % 3 === 0) {
        output += "Fizz";
      }
      if (number % 5 === 0) {
        output += "Buzz";
      }
      yield output || number;
      number++;
    }
}
  
const generator = fizzBuzzGenerator();
for (let value of generator) {
    console.log(value);
}
  
// 3. Рандом генератор
function* generateRandomNumbers(max, quantity) {
    for (let i = 0; i < quantity; i++) {
      yield Math.floor(Math.random() * max) + 1;
    }
}
  
const randomator = generateRandomNumbers(5000, 2);
for (let number of randomator) {
    console.log(number);
}