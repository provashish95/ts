type User = {
  name: string;
  age: number
}

interface IUser {
  name: string;
  age: number;
}

interface IExtendUser extends IUser {
  role: string
}

const MyUser: IExtendUser = {
  name: 'Omanus',
  age: 300,
  role: '1'
}


const userWithTypeAlis: User = {
  name: 'Type Alis',
  age: 100
}

const userWithInterface: IUser = {
  name: 'Interface',
  age: 200
}


//arrow function signature with type alias
type addTwoNumberType = (num1: number, num2: number) => number;

//arrow function signature with interface
interface AddTwoNumberInterface {
  (num1: number, num2: number): number;
}

//const addNumber: addTwoNumberType = (num1, num2) => num1 + num2;
const addNumber: AddTwoNumberInterface = (num1, num2) => num1 + num2;


//array with type alias 
type RollNumberType = number[];

const points: RollNumberType = [1, 2, 3, 4, 5, 6];

//array with interface index signature
interface RollNumberInterface {
  [index: number]: number;
}

const rollNumbers: RollNumberInterface = [1, 2, 3, 4, 5, 6];



//when we work with object we should use Interface otherwise always use type alias