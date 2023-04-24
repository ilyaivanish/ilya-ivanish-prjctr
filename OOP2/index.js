`use strict`;

// Спільний Animal для всіх чотирьох
  
function Animal(name) {
    this.name = name;
}

// Спільний IlyaPet для Кота та Собаки
function IlyaPet(name, birthDate) {
    Animal.call(this, name);
    this.birthDate = birthDate;
}

IlyaPet.prototype.howLongIlyaBringUp = function() {
    const birthDate = new Date(this.birthDate);
        const oneYearInMs = 1000 * 60 * 60 * 24 * 365; // milliseconds in a year
        const years = Math.floor((new Date() - birthDate) / oneYearInMs);
        console.log(`Ilya has been raising ${this.name} for ${years} years`)
};

// 4 класи
function Cat(name, color, size, isLikeFish, birthDate) {
    IlyaPet.call(this, name, birthDate);
    this.color = color;
    this.size = size;
    this.isLikeFish = isLikeFish;
}
  
Cat.prototype = Object.create(IlyaPet.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.sayMeow = function() {
    console.log(this.name + ' saying meooow')
};

Cat.prototype.getDetails = function() {
    return `${this.name} is a ${this.size} in size ${this.color} cat and ${this.isLikeFish ? 'likes' : 'does not like'} fish.`;
};

Cat.prototype.wantsFish = function() {
    if (this.isLikeFish) {
        console.log(`${this.name} really want a fish`);
    } else {
        console.log(`${this.name} eats only chicken `);
    };
};

const britishFallCat = new Cat('Sirius', 'grey', 'small', true, `2022-03-17`)
// britishFallCat.howLongIlyaBringUp()
// britishFallCat.sayMeow();
// britishFallCat.wantsFish();
// console.log(britishFallCat.getDetails())


function Dog(name, color, size, wagsItsTail, birthDate) {
    IlyaPet.call(this, name, birthDate);
    this.color = color;
    this.size = size;
    this.wagsItsTail = wagsItsTail;
}

Dog.prototype = Object.create(IlyaPet.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.getDetails = function() {
    return `${this.name} is a ${this.size} in size ${this.color} dog`;
};

Dog.prototype.ifWagsItsTail = function() {
    if (this.wagsItsTail) {
        console.log(`${this.name} wags its tail right now.`);
    } else {
        console.log(`${this.name} not very funny`);
    }
};

Dog.prototype.feedDog = function() {
    return this.wagsItsTail = true
}

const huskyDog = new Dog('Gera', 'white', 'big', false, `2018-04-22`)
// huskyDog.howLongIlyaBringUp()
// huskyDog.ifWagsItsTail()
// huskyDog.feedDog()
// huskyDog.ifWagsItsTail()
// console.log(huskyDog.getDetails())


function Parrot(name, color, size, isSpeaks) {
    Animal.call(this, name);
    this.color = color;
    this.size = size;
    this.isSpeaks = isSpeaks;
}

Parrot.prototype = Object.create(Animal.prototype);
Parrot.prototype.constructor = Parrot;

Parrot.prototype.getDetails = function() {
    return `${this.name} is a ${this.size} in size ${this.color} parrot`;
}

Parrot.prototype.speakForMe = function(word) {
    if (this.isSpeaks) {
        console.log(`${word}`);
    } else {
        console.log(`It is non-talking parrot`);
    }
}

Parrot.prototype.whatYourName = function() {
    if (this.isSpeaks) {
        console.log(`My name is ${this.name}`);
    } else {
        console.log(`It is non-talking parrot`);
    }
}

const cacaduParrot = new Parrot('Kesha', 'yellow', 'small', true);
// console.log(cacaduParrot.getDetails())
// cacaduParrot.speakForMe('Kesha is good parrot');
// cacaduParrot.whatYourName()

function Rabbit(name, color, size, isCalm) {
    Animal.call(this, name);
    this.color = color;
    this.size = size;
    this.isCalm = isCalm;
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.getDetails = function() {
    return `${this.name} is a ${this.size} in size ${this.color} rabbit`;
};

Rabbit.prototype.touchTheRabbit = function() {
    if (!this.isCalm) {
        console.log(`Rabbit ${this.name} ran away`);
    };
};

Rabbit.prototype.sleep = function(timeInSeconds) {
    console.log(`Rabbit ${this.name} is sleeping for ${timeInSeconds} seconds...`);
    setTimeout(() => {
        console.log(`Rabbit ${this.name} is awake now.`);
    }, timeInSeconds * 1000);
};

const glashaRabbit = new Rabbit('Glasha', 'grey', 'big', false)
// glashaRabbit.touchTheRabbit()
// glashaRabbit.sleep(3)
// console.log(glashaRabbit.getDetails())
