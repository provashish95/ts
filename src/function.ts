//Normal function 
// function add(num1, num2) {
//   return num1 + num2; 
// }

//Normal Function with type 
function add(num1: number, num2: number) {
  return num1 + num2;
}

//Arrow function with type
let hello = (n1: number, n2: number): number => n1 * n2;
// console.log(hello(30, 20));

//Array map with type
const numbers = [2, 4, 5, 6];
const newArr = numbers.map((elem: number) => elem * elem);
// console.log(newArr);


//Function in a object with type 
const person: {
  name: string,
  balance: number,
  addBalance(money: number): void
} = {
  name: 'Roy',
  balance: 5,
  addBalance(money: number) {
    console.log(`My new balance is ${this.balance + money}`);
  }
}

console.log(person.addBalance(200));