//arrow function with type 

const createArray = (param: string): string[] => {
  return [param];
}

//array function with generic type

const createArray1 = <T>(param: T): T[] => {
  return [param];
}

const result = createArray1<string>('Bangladesh');
const results1 = createArray1<boolean>(true);
const results2 = createArray1<object>({ name: 'bangladesh' });