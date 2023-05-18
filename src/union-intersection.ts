type NoobDeveloper = {
  name: string
};

type JuniorDeveloper = NoobDeveloper & {
  expertise: string,
  experience: number
};

// enum Level {
//   junior = "junior",
//   mid = "mid",
//   senior = "senior",
// }

type NextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number,
  level: "junior" | "mid" | "senior"
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Provashish",
  expertise: "Javascript",
  experience: 6
}



const developer: NextLevelDeveloper = {
  name: "Provashish",
  expertise: "Javascript",
  experience: 4,
  leaderShipExperience: 2,
  level: "mid"
}
console.log(developer);
