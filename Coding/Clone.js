const person = {
    name: 'John',
    age: 21,

    // the inner objects will change in the shallow copy
    marks: { math: 66, english: 73}
}

// cloning the object
const clonePerson = { ... person}

console.log(clonePerson); 

// changing the value of clonePerson
clonePerson.marks.math = 100;

console.log(clonePerson.marks.math);
console.log(person.marks.math); 