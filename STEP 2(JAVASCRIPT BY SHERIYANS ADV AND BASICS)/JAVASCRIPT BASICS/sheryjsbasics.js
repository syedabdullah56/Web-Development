console.log("HELLO WORLD");
// word vs keyword

// word:jis ka koi meaning ho lang main
// chacha,mama,good,ganda,gadha
// keyword:jis ka koi meaning na ho lang main
// for,if,else,let,var,const

// var const let:

// variable is a container which can br changed
// for variable var and let is used
var a=12;
console.log(a);
let b=19;
console.log(b);
// const is a container which cant be changed
// for const we used const
const g=9.8;
console.log(g);

// hoistings:

// in js variables and contant are hoisted so that there declaaration is moved to the top of the code
console.log(c);
var c=18;
// this will give value is undefined means that it w=exists but not defined by user c declaration will move to the top

// types in js

// there are two types in js
// primitive:it means that if you copy it you will copy the main value these are without brackets:EX:no,string,null,undefined,boolean:
let d=21;
let e=d;
console.log(e);
console.log(d);
d=d+2;
console.log(d);//output will not be same bc it is a primitive type
console.log(e);//output will not be same bc it is a primitive type

// reference:it means that if you copy it you will copy the reference value these are with brackets:EX:(),{},[]
let name1=["Abdullah","Usman"];
let name2=name1;
name2.pop();
console.log(name2);      // output will be abdullah bc it is a reference type
console.log(name1);      // output will be abdullah bc it is a reference type


// conditionals:if,else,else if .in if and else if statement there will only be two values true or false:
if(a>b){
    console.log("You are beautiful");
}
else{
    console.log("You are cute");
}
if(13<12){
    console.log(a);
}
else if(14<13){
    console.log(14);
}
else{
    console.log("You are very attractive");
}

// loops for and while:

// loops are used to do the same thing againa and again
// for loops
// for(Start;end;change){
//     console.log("Hello World");
// }
for(let i=0;i<20;i++){
    console.log(i);
}
let myname="Abdullah";
for(let j=0;j<25;j++){
    console.log(myname);
}
// while loops
k=0;
while(k<10){
  k++;
  console.log(k);
}

// functions in js
// there are three uses of function
// to reuse the code multiple times
// to use the code in future
// to use code every time with different data
function hello(a){
    console.log(a+" "+"Hello to you");
}
hello("Abdullah");
// abdullah here is an argument it sin the parameters
// a here is the parameters


// array
// array is used to store multiple values
let f=[1,2,34,5,6,7,8,9];
console.log(f);
f.pop();     //pop is used to omit last value
f.push(37);   //push is used to add value in end
f.unshift(31);  //unshift is used to add value in start
f.shift(31);   //shift is used to delete value in start
f.splice(1,3);   // splice is used to remove value from given to given index
console.log(f);


// Objects:
// this is used to store the details of any one thing like a watch a person and a product
let watch={
    brand:"Rolex",
    price:"20000000000RS",
    color:"blue",  //these are properties
    method:function(){  }  //this is a method

    
}
console.log(watch.brand);
console.log(watch.price);
console.log(watch.color);

// updating obj properties
watch.brand="CASIO";
console.log(watch.brand);