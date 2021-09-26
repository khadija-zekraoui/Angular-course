
// Primitives: number, string, boolean
let age: number = 12;
// age = '12'; error

// More complex types: arrays, objects
let hobbies: string[]  // array of string
hobbies = ['Sports', 'Cooking'];

let person: {
    name: string,
    age: number
}; //type assignment

person = {
    name: 'sofia',
    age: 32
};

// person = {
//     isEmployee: true 
// } error

// array of people object
let people: {
    name: string,
    age: number
}[];

//type inference
// TypeScript tries to know which types are used without explicitly stating those types
let course = 'Angular-introduction';
// course = 1234; error 

//Union types --> use multiple types
let onlineCourse: string | number = 'Angular-introduction';
onlineCourse = 1234;  

//Type Aliases
type Student = {
    name: string,
    course: string | number, 
}

let student: Student

let students: Student[];