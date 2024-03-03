console.log("Hello World");
// difference btw let,const and var

// 1
// var is in old Js (es5)
// let and const is in new Js (es6)

// 2
// var is function scoped
// let and const are braces scoped

// 3
// var adds itself in window Object
var a=12;
let b=6;
// let and const do not adds itself in window Object
// window object:js dont have many things which it takes from window to help us.This is called as window object
console.log("Difference btw let and var is done");

// Browser context api
// A browsing context is an environment in which a browser displays a Document. 
// There are 3 things in it  1.Window 2.Stacks:How things will work  3.Heap memory:All the data we made during programming is stored ij heap ,emory

// Execution Context
// When we made a function its code is stored in a container which has three things  1.Varibales  2.Child Functions  
// 3.Lexical environment:What are the limitiations of a functions
// It is like a container that stores all the code of a function

// How to copy reference values
let c=[1,23,34,5,6,7,8,,9,10,11];
let d={
    name:"Abdullah",
    RollNO:22057,
    GPA:3.26
}
let e=[...c];
let f={...d};
e.pop();
console.log(e);
// c value doesnot cahnged
console.log(c);
f.name="Usman";
console.log(f);
// d value doesnot changed
console.log(d);

// TRUTHY AND FALSY
// you write anything on js it will be only one of two things  truthy or falsy
// falsy values are:0,False,NaN(NOT A NUMBER),null,undefined,document.all  (all other values except these these always return true)
// all falsy values return false
// all truthy values returns true
if("harsh"){
    console.log("HEY");
}
else{
    console.log("say no");
}

// foreach loop:
// THIS IS USED TO ITERATE OVER ARRAY
let names=["abduulah","usman","tariq","srk","badar","aaliyan"];
// for each kabhi bhi array main changing nahi karta bus us ki temporary files bana leta hai or us pe functions perform karta hai
names.forEach(function greet(a){
    console.log("Hello"+" "+a);
})
let num=[1,2,3,4,5,6,7,8,9];
num.forEach(function add2(b){
    console.log(b+2);
})

// for in loop used for objects;
for(let key in d){
    // console.log(key);
    // console.log(d[key]);
    // console.log(key,d[key]);
    console.log(`Key: ${key}, Value: ${d[key]}`);
    // `` this is template literal string used to use variables in very easy way
}


// template literal or template STRING :
// it is like fstring of python
// we use backticks in instanceof(``````)
let g="ABDUULLLAJ";
let u="USMAN";
console.log(`Hello ${g} and ${u} in this website and welcome ${g} in the world of programming`);



// do while loop
// let i=0;
// do{
//     console.log("HELLO ABDULLAH You are the best programmer in this world");
//     i++;
// }
//   while(i<20);
// let j=0;
// do{
//     alert("You are best programmer");
//     j++;
// }
//  while (j<8);
// k=0
// do{
//     alert("You are best software engineer");
//     k++;
// }
//  while (k<0);
 


// callback functions in js
// "I will call back later!"
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished
setTimeout(function live(a){
    console.log('Hello Dunya after 3 seconds');
},3000);
// callback function runs when a function is executed




// firstclass functions
// there is a concept in js that we can use and run function by assigning it a variable and varlue ;
// JavaScript functions are first-class functions meaning functions and objects are treated as the same thing. Functions can be stored as a variable inside an object or an array as well as it can be passed as an argument or be returned by another function. That makes function "first-class citizens in JavaScript"
// In JavaScript, functions are first-class citizens, which means they can be treated as values and used in the same way as other types like strings, numbers, or objects. Here are a few examples of how functions are treated as first-class citizens:

// assigning functions to variables
let greet=function(name){
    console.log(`HELLO ${name}`);
}
greet("ABDULLAH");
// to learn more about first class functions



// how arrays are made in bts
// arrays are actually objects
// for exampele
let z=[1,2,3,4,5,,6,7,8,9];
console.log(z);
console.log(typeof(z));// output:object
console.log(Array.isArray([]));
console.log(Array.isArray({}));


// delete object properties
let person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
delete person.name;
console.log(person);