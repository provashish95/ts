//Generic Interface

interface CrushInterface<T, Y = null> {
  name: string,
  husband: T,
  wife?: Y
}

interface PersonInterface {
  name: string,
  age: number
}

const crushFour: CrushInterface<PersonInterface, PersonInterface> = {
  name: 'Provashish',
  husband: {
    name: 'Tonmoy',
    age: 27
  },
  wife: {
    name: 'kajol',
    age: 21
  }
}

const crushOne: CrushInterface<boolean> = {
  name: 'Kajol',
  husband: true
}
const crushTwo: CrushInterface<string> = {
  name: 'Kajol',
  husband: 'Tonmoy'
}


interface HusbandInterface {
  name: string, age: number
}
const crushThree: CrushInterface<HusbandInterface> = {
  name: 'Kajol',
  husband: {
    name: "Tonmoy",
    age: 34
  }
}



//Multiple parameter generic type array
type GenericTuple<x, y> = [x, y];

const relation: GenericTuple<string, number> = ['Roy', 1200];


// type relationWithCrushType = { name: string, age: number }

interface relationWithCrushInterface {
  name: string, age: number
}

const relationWithCrush: GenericTuple<relationWithCrushInterface, string> = [{
  name: 'Tonmoy',
  age: 27
},
  'Kajol'
];

const relationWithCrush1: GenericTuple<relationWithCrushInterface, string> = [{
  name: 'Tonmoy',
  age: 27
},
  'Kajol'
];


//Single parameter generic type array
type genericArray<t> = Array<t>;

const RollNumbers: genericArray<number> = [12, 3, 4, 56, 7, 8];

const RollNumberTwo: genericArray<string> = ['12', '23', '45', '56'];

const RollNumberThree: genericArray<boolean> = [true, false];

//generic array in object 
type NameRollType = {
  name: string;
  roll: number
}
const userNameAndRollNumbers: genericArray<NameRollType> = [{
  name: 'Tonmoy',
  roll: 12
},
{
  name: 'Provashish',
  roll: 23
}];