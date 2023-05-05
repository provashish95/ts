function add(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 2, 3];

const newArray = arr.map((elem: number) => elem * elem);


const person: {
  name: string,
  balance: number,
  addBalance(money: number): string,
} = {
  name: "Tonmoy",
  balance: 5,
  addBalance(money: number) {
    return `My new balance is : ${this.balance + money}`;
  },

}

//Default parameter not set at first parameter..

function defaultParameter(num1: number, num2: number = 10): number {
  return num1 + num2;
}
defaultParameter(30);

//spread operator in ts
const myFriends = ['chayan', 'shipan', 'foysal'];
const newFriends = ['Riya', 'Nisha', 'Borsha'];

myFriends.push(...newFriends);
// console.log(myFriends);

//Rest operator in ts
const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends('Provashish', 'Tonmoy', 'Roy', 'rakin', 'maruf', 'Pritam');

//Array and Object destructuring 
const student = {
  fullName: 'Athoi sarker',
  age: 20
}
const { fullName: myName } = student;
console.log(myName);