class Animal {
  constructor(name, color){
    this.name = name;
    this.color = color;
    this.numTails = 1;
  }

  // methods / behaviors
  poop() {
    console.log(this.name, 'all animals poop');
  }
}

// -- sub classes --
class Cat extends Animal {
  constructor(name, color, claws){ // params - what it takes to create a Cat
    super(name, color); // super must be first
    this.lives = 9;
    this.claws = claws;
  }
  meow(){
    console.log(this.name, 'says meow!');
  }
}

// class keyword gives class a name
class Dog extends Animal {

  // constructor default function for every class
  // job is to construct assign objects properities their values
  constructor(name, color){
    super(name, color);
  }

  // any behaviors come after the constructor
  bark(){
    console.log(this.name, 'says woof!');
  }
}

// new keyword allow us to create an instance of our class
// instance mean an object
var ourDog = new Dog('barkly', 'purple');
var ourCat = new Cat('bob', 'green', 10);

console.log('ourDog ->', ourDog);
console.log('ourCat ->', ourCat);

console.log(ourDog.bark());
console.log(ourCat.meow());

console.log(ourCat.poop());
console.log(ourDog.poop());

console.log(typeof ourDog);









//
