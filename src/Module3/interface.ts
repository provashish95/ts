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

