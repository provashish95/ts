//Nullable type
const searching = (value: string | null) => {
  if (value === null) {
    console.log("Nothing to search");
  } else {
    console.log("Searching ...");
  }
}
searching(null);


//Unknown type
const carSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed}`);
  }
  else if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseInt(value) * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed}`);

  } else {
    console.log('There is wrong type');
  }
}

carSpeed(10);
carSpeed("10 kmh^-1");
carSpeed(true);

//Never type
const throwError = (message: string): never => {
  throw new Error(message);
}

throwError("there are some error problem dude");