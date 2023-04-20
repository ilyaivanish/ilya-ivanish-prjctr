`use strict`;


// Спільний Animal для всіх чотирьох
function Animal(name, age, habitat) {
    this.name = name;
    this.age = age;
    this.habitat = habitat;
}
  
Animal.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name}. I am ${this.age} years old and I live in ${this.habitat}.`);
};
  
// Define the child classes
function Cat(name, age, habitat, color, mood) {
    Animal.call(this, name, age, habitat);
    this.color = color;
    this.mood = mood;
}
  
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.likesMilk = true;

Cat.prototype.meow = function() {
    console.log(`${this.name} says meow!`);
};
  
Cat.prototype.play = function() {
    console.log(`${this.name} is playing with a ball of yarn!`);
};

const garfield = new Cat("Garfield", 5, "house", "orange", "lazy");
garfield.introduce();
garfield.meow();
garfield.play();

// function Dog(name, age, habitat, breed, size) {
//     Animal.call(this, name, age, habitat);
//     this.breed = breed;
//     this.size = size;
// }
  
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.likesChewToys = true;

// Dog.prototype.bark = function() {
//     console.log(`${this.name} says bark!`);
// };

// Dog.prototype.run = function() {
//     console.log(`${this.name} is running after a frisbee!`);
// };
  
// const clifford = new Dog("Clifford", 3, "farm", "Big Red", "large");
// clifford.introduce();
// clifford.bark();
// clifford.run();
  


// function Bird(name, age, habitat, wingspan, color) {
//     Animal.call(this, name, age, habitat);
//     this.wingspan = wingspan;
//     this.color = color;
// }
  
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;
// Bird.prototype.hasFeathers = true;


// Bird.prototype.fly = function() {
//     console.log(`${this.name} is flying with a wingspan of ${this.wingspan} feet!`);
// };
  
// Bird.prototype.chirp = function() {
//     console.log(`${this.name} is chirping!`);
// };

// const baldEagle = new Bird("Bald Eagle", 7, "mountain", 7.5, "brown");
// baldEagle.introduce();
// baldEagle.fly();
// baldEagle.chirp();

// function Fish(name, age, habitat, type, fins) {
//     Animal.call(this, name, age, habitat);
//     this.type = type;
//     this.fins = fins;
// }
  
// Fish.prototype = Object.create(Animal.prototype);
// Fish.prototype.constructor = Fish;
// Fish.prototype.hasGills = true;

// Fish.prototype.swim = function() {
//     console.log(`${this.name} is swimming with ${this.fins} fins!`);
// };
  
// Fish.prototype.dive = function() {
//     console.log(`${this.name} is diving deeper into the ocean!`);
// };

// const clownfish = new Fish("Nemo", 1, "ocean", "clownfish", 3);
// clownfish.introduce();
// clownfish.swim();
// clownfish.dive();
  