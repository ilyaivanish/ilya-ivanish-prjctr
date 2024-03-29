// 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math). Використайте оператор розширення:

function addThemAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20


// 2. Задача на використання замикання

const multiply = a => (b) {
  return a * b;
};

console.log(multiply(5)(5)); // Output: 25
console.log(multiply(2)(-2)); // Output: -4
console.log(multiply(4)(3)); // Output: 12

// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів
const movies = [
  {
  movieName: 'The Thing',
  releaseYear: 1982,
  directedBy: 'Carpenter',
  runningTimeInMinutes: 109,
  },
  {
  movieName: 'Aliens',
  releaseYear: 1986,
  directedBy: 'Cameron',
  runningTimeInMinutes: 137,
  },
  {
  movieName: 'Men in Black',
  releaseYear: 1997,
  directedBy: 'Sonnenfeld',
  runningTimeInMinutes: 98,
  },
  {
  movieName: 'Predator',
  releaseYear: 1987,
  directedBy: 'McTiernan',
  runningTimeInMinutes: 107,
  },
];
  
const byProperty = (property, direction) => (a, b) => {
  const valueA = a[property];
  const valueB = b[property];
  let comparison = 0;

  if (valueA > valueB) {
    comparison = 1;
  }
  if (valueA < valueB) {
    comparison = -1;
  }
  if (direction === '<') {
    comparison = comparison * -1;
  }
  return comparison;
};

  
  
console.log(movies.sort(byProperty('releaseYear', '>'))); //виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));  //виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty('movieName', '>'))); //виведе масив фільмів посортованих по назві, в алфавітному порядку*

// 4 Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'

// Використовуючи setInterval

function detonatorTimer(delay) {
    let remainingSeconds = delay;
    const timerId = setInterval(() => {
      let output = remainingSeconds
      if (remainingSeconds > 0) {
        remainingSeconds--;
      } else if (remainingSeconds == 0) {
        output == 'Boom';
        clearInterval(timerId);
      }
      console.log(output)
    }, 1000);
}
  
detonatorTimer(3);

// Використовуючи вкладений setTimeout

function detonatorTimer(delay) {
  let output = delay;
  if (delay > 0) {
    setTimeout(function() {
      detonatorTimer(delay - 1);
    }, 1000);
  } else {
    output = 'Boom!';
  }
  console.log(output);
}

detonatorTimer(3)


// 5 Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять

const pet = {
  name: 'Sirius',
  species: 'Cat',
  age: 1,
  weight: 4,
  mood: 'happy',
  isHungry: false,
  favoriteToys: 'ball',

  introduce() {
    console.log(`My name is ${this.name}, I'm a ${this.species} and I'm ${this.age} years old`);
  },
  play() {
    if (this.favoriteToys.length > 0) {
      console.log(`I'm playing with my ${this.favoriteToys}`);
    } else {
      console.log(`I don't have any toys to play with`);
    }
  },
  feed() {
    if (this.isHungry == false) {
      console.log(`Yum! That was delicious`);
    } else {
    console.log(`I need more chicken`);
    }
  },
  checkMood() {
    console.log(`I'm feeling ${this.mood} right now`);
  }
};
  
  
pet.introduce(); // logs "My name is Sirius, I'm a Cat and I'm 1 years old" 
pet.play(); // logs "I'm playing with my ball" 
pet.feed(); // logs "Yum! That was delicious"
pet.checkMood(); // logs "I'm feeling happy right now" 


// 6 А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері

const securedPetIntroduce = pet.introduce.bind(pet);
const securedPetPlay = pet.play.bind(pet);
const securedPetFeed = pet.feed.bind(pet);
const securedPetCheckMood = pet.checkMood.bind(pet)

setTimeout(securedPetIntroduce, 1000); 
setTimeout(securedPetPlay, 2000); 
setTimeout(securedPetFeed, 3000); 
setTimeout(securedPetCheckMood, 4000);

// 7 Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд

function someFunction(a, b) {
  console.log(a + b);
}

function slower(func, delay) {
  console.log(`You will see result in console in ${delay} seconds`);
  return function(...args) {
    setTimeout(() => func.apply(this, args), delay * 1000);
  };
}

const slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(2, 3); // logs "You will see result in console in 5 seconds" and after 5 seconds logs 5
