// 26.sort object by age
let info = [
  {
    name: "kart",
    age: 25,
  },
  {
    name: "agok",
    age: 24,
  },
];
let data = info.sort((a, b) => {
  return a.age - b.age;
});
console.log(data);

// program to sort array by property name

// function sortName(a, b) {
//   // converting to uppercase to have case-insensitive comparison
//   const name1 = a.name.toUpperCase();
//   const name2 = b.name.toUpperCase();

//   let comparingValue = 0;

//     if (name1 > name2) {
//       comparingValue = 1;
//     } else if (name1 < name2) {
//       comparingValue = -1;
//     }
//     return comparingValue;
// }

// const students = [
//   { name: "cra", age: 24 },
//   { name: "aohn", age: 24 },
//   { name: "back", age: 25 },
// ];

// console.log(students.sort(sortName));
