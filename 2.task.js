// // Convert all the strings to title caps in a string array

// const arr = ["hello world", "foo bar", "java script"];
// const titleCased = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1 ).toLowerCase());
// console.log(titleCased); // Output: ["Hello World", "Foo Bar", "Java Script"]

let arr = ['hello', 'its my life', 'dont interfier']
let titleCased = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log (titleCased)