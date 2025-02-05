
let classroom = [];



classroom.push("Arjun");
classroom.push("Rohit");
classroom.push("Rahul");
console.log(classroom);
// Output: [ 'Arjun', 'Rohit', 'Rahul' ]


classroom.unshift("Aakash");
classroom.unshift("Aadil");
console.log(classroom);
// Output: [ 'Aadil', 'Aakash', 'Arjun', 'Rohit', 'Rahul' ]


classroom.pop();
// Output: Rahul
console.log (classroom);
// Output: [ 'Aadil', 'Aakash', 'Arjun', 'Rohit']


classroom.shift();
// Output: Aadil
console.log(classroom);
// Output: [ 'Aakash', 'Arjun', 'Rohit' ]

console.log (classroom.length());
// Output: 3

let slicedclassroom = classroom.slice(1,3);
console.log(slicedclassroom);
// Output: [ 'Arjun', 'Rohit' ]

classroom.splice(3,1,"Hitesh");
console.log(classroom);
// Output: [ 'Aakash', 'Arjun', 'Hitesh', 'Rohit']