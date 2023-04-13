`use strict`;

class Cat {
    constructor(name, color, size, isLikeFish) {
        this.name = name
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

class Dog {
    constructor(name, color, size, wagsItsTail) {
        this.name = name
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

class Parrot {
    constructor(name, color, size, isSpeaks) {
        this.name = name
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

class Rabbit {
    constructor(name, color, size, isCalm) {
        this.name = name
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

// const britishFallCat = new Cat('Sirius', 'grey', 'small', true)
// britishFallCat.sayMeow();
// britishFallCat.wantsFish();
// console.log(britishFallCat.getDetails())

// const huskyDog = new Dog('Gera', 'white', 'big', false)
// huskyDog.ifWagsItsTail()
// huskyDog.feedDog()
// huskyDog.ifWagsItsTail()
// console.log(huskyDog.getDetails())

// const cacaduParrot = new Parrot('Kesha', 'yellow', 'small', true);
// cacaduParrot.speakForMe('Kesha is good parrot');
// cacaduParrot.whatYourName()

const glashaRabbit = new Rabbit('Glasha', 'grey', 'big', false)
glashaRabbit.touchTheRabbit()
glashaRabbit.sleep(3)


// class Plant {
//     constructor(color, size) {
//         this.color = color;
//         this.size = size;
//     }

//     cut() {
//         console.log('Cutting successful ' + this.color);
//     }

//     setSize(size) {
//         if (['small', 'middle', 'large'].includes(size)) {
//             this.size = size;
//         } else {
//             throw new Error('Wrong size');
//         }
//     }
// }

// class Apple extends Plant {
//     constructor(color, size, isInTree) {
//         super(color, size);
//         this.isInTree = isInTree;
//     }

    // fall() {
    //     if (this.isInTree) {
    //         console.log(this.color + ' Apple fell');
    //     } else {
    //         console.log(this.color + ' Apple is not in tree');
    //     }
    // }
// }

// class Tomato extends Plant {
//     constructor(color, size) {
//         super(color, size);
//     }

//     jump() {
//         console.log("I'm funny jumping tomato");
//     }
// }

// const a = new Apple('green', 'small', true);
// const b = new Tomato('red', 'middle', false);
// const c = new Apple('red', 'large', false);
// console.log(a, b, c, a === b);

// const size = document.getElementById('size') ?? 'small';

// b.setSize(size);

// console.log(a.size, b.size, a === b, a.size === b.size);

// a.fall();
// a.cut();
// b.cut();

// console.log('2' + '2');

// const margeHeight = (obj, height) => {
//     obj.height = height;
//     return obj;
// };

// const aa = margeHeight(a, 10);
// const bb = margeHeight(b, 20);

// console.log(aa, bb);