type FriendType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
}

const friend1: FriendType = {
  name: "Moyna pakhi",
  age: 22,
  profession: "web developer",
  address: "dhaka"
};

const friend2: FriendType = {
  name: "Tia pakhi",
  profession: "Teacher",
  address: "Bangladesh"
};

type CrushMarriedType = boolean;

const isMarried: CrushMarriedType = true;

type CourseNameType = string;

const crushName: CourseNameType = "web developer next level";

// console.log(isMarried);


//function type alias 

type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number, //10
  number2: number, //20
  operation: OperationType //(x, y) => x + y)
) => {
  return operation(number1, number2);
}

const result1 = calculate(10, 20, (x, y) => x + y);
const result2 = calculate(10, 20, (x, y) => x - y);
const result3 = calculate(10, 20, (x, y) => x * y);

console.log(result3);
