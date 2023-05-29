let emni: any;
emni = "Next level web development";

(emni as string).length;

<string>emni.length;

function KgToGm(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted result is ${value}`;
  }
  if (typeof param === 'number') {
    const value = param * 1000;
    return `The converted value is ${value}`;
  }
}

const getResult = KgToGm('1000') as number;
const getResult2 = KgToGm('1000') as string;



//another example
type CustomeErrorType = {
  message: string
}

try {

} catch (err) {
  console.log((err as CustomeErrorType).message);
}