// ES5 Solution to function scope
// Wrap in a function!
function counter() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
} //end counter

counter(); // call counter

// ReferenceError: i is not defined
// console.log('i after loop -> ', i); // happily logs 10

// let
// simplifies this syntax
for (let j = 0; j < 10; j++) {
  console.log(j);
}

// ReferenceError: j is not defined
// console.log('j after loop -> ', j);

// --  Const --
// TypeError: Assignment to constant variable.
const x = 1;
x = 2; // error on reassignment line
console.log(x);
