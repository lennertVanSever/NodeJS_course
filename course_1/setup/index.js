console.log("HELLO WORLD!!!");

const name = "Mohammed"

const attribute = "Awesome";

console.log(name + " is " + attribute); //Normal JavaScript
console.log(`${name} is ${attribute}`); //ES6
//Mohammed is awesome

const student = {
  name,
  gender: "male",
  age: 23
}
const { gender, age } = student;

console.log({ gender, age, name });
