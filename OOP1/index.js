`use strict`;

// Спільний Animal для всіх чотирьох
class Animal {
    constructor(name) {
        this.name = name;
    };
};

// спільний предок та спільний метод характерний тільки для Cat та Dog
class IlyaPet extends Animal {
    constructor(name, birthDate) {
        super(name);
        this.birthDate = birthDate;
    };

    howLongIlyaBringUp() {
        const birthDate = new Date(this.birthDate);
        const oneYearInMs = 1000 * 60 * 60 * 24 * 365; // milliseconds in a year
        const years = Math.floor((new Date() - birthDate) / oneYearInMs);
        console.log(`Ilya has been raising ${this.name} for ${years} years`)
    }
};

class Cat extends IlyaPet {
    constructor(name, color, size, isLikeFish, birthDate) {
        super(name, birthDate);
        this.color = color;
        this.size = size;
        this.isLikeFish = isLikeFish;
    }

    sayMeow() {
        console.log(this.name + ' saying meooow')
    }

    getDetails() {
        return `${this.name} is a ${this.size} in size ${this.color} cat and ${this.isLikeFish ? 'likes' : 'does not like'} fish.`;
    }
    
    wantsFish() {
        if (this.isLikeFish) {
            console.log(`${this.name} really want a fish`);
        } else {
            console.log(`${this.name} eats only chicken `);
        }
    }
};

class Dog extends IlyaPet {
    constructor(name, color, size, wagsItsTail, birthDate) {
        super(name, birthDate);
        this.color = color;
        this.size = size;
        this.wagsItsTail = wagsItsTail;
    }

    getDetails() {
        return `${this.name} is a ${this.size} in size ${this.color} dog`;
    };

    ifWagsItsTail() {
        if (this.wagsItsTail) {
            console.log(`${this.name} wags its tail right now.`);
        } else {
            console.log(`${this.name} not very funny`);
        }
    };

    feedDog() {
        return this.wagsItsTail = true
    }
    
};

class Parrot extends Animal {
    constructor(name, color, size, isSpeaks) {
        super(name);
        this.color = color;
        this.size = size;
        this.isSpeaks = isSpeaks;
    }

    getDetails() {
        return `${this.name} is a ${this.size} in size ${this.color} parrot`;
    }

    speakForMe(word) {
        if (this.isSpeaks) {
            console.log(`${word}`);
        } else {
            console.log(`It is non-talking parrot`);
        }
    }

    whatYourName() {
        if (this.isSpeaks) {
            console.log(`My name is ${this.name}`);
        } else {
            console.log(`It is non-talking parrot`);
        }
    }
};

class Rabbit extends Animal {
    constructor(name, color, size, isCalm) {
        super(name);
        this.color = color;
        this.size = size;
        this.isCalm = isCalm;
    }

    getDetails() {
        return `${this.name} is a ${this.size} in size ${this.color} rabbit`;
    }

    touchTheRabbit() {
        if (!this.isCalm) {
            console.log(`Rabbit ${this.name} ran away`);
        }
    }

    sleep(timeInSeconds) {
        console.log(`Rabbit ${this.name} is sleeping for ${timeInSeconds} minutes...`);
        setTimeout(() => {
            console.log(`Rabbit ${this.name} is awake now.`);
        }, timeInSeconds * 1000);
    }
};

const britishFallCat = new Cat('Sirius', 'grey', 'small', true, `2022-03-17`)
// britishFallCat.calculateYearsSinceBirth()
// britishFallCat.sayMeow();
// britishFallCat.wantsFish();
// console.log(britishFallCat.getDetails())

const huskyDog = new Dog('Gera', 'white', 'big', false, `2018-04-22`)
// huskyDog.howLongIlyaBringUp()
// huskyDog.ifWagsItsTail()
// huskyDog.feedDog()
// huskyDog.ifWagsItsTail()
// console.log(huskyDog.getDetails())

const cacaduParrot = new Parrot('Kesha', 'yellow', 'small', true);
// cacaduParrot.speakForMe('Kesha is good parrot');
// cacaduParrot.whatYourName()

const glashaRabbit = new Rabbit('Glasha', 'grey', 'big', false)
// glashaRabbit.touchTheRabbit()
// glashaRabbit.sleep(3)