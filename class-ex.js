class Animal {
  constructor(name, color){
    this.name = name;
    this.color = color;
    this.numTails = 1;
  }
  // methods / behaviors
}

// -- sub classes --
class Cat extends Animal {
  constructor(name, color){
    super(name, color);
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
var ourOtherDog = new Dog('bob', 'green');

console.log('ourDog ->', ourDog);
console.log('ourOtherDog ->', ourOtherDog);
console.log(ourDog.bark());
console.log(ourOtherDog.bark());

// console.log(Dog.bark());









//
