//Normal object 
// const user = {
//   name: 'tonmoy',
//   age: 27,
//   isMarried: true,
//   wife: 'Ms. Roy'
// }

//with type object and specific value (literal type)
// const user: {
//   company: "Provashish Roy",
//   name: string;
//   age: number;
//   isMarried: boolean;
//   wife?: string
// } = {
//   company: 'Provashish Roy',
//   name: 'tonmoy',
//   age: 27,
//   isMarried: true,
// }


//with type object and specific value (readonly)
const user: {
  readonly company: string,
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string
} = {
  company: 'Provashish Roy',
  name: 'tonmoy',
  age: 27,
  isMarried: true,
}
// user.company = 'dhfgsdh';
// user['company'] = 'ajkshkjsad';


console.log(user);