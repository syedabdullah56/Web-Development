console.log("HELLO WORLD");
const { error } = require("console");
// for common js
const fs=require("fs");
console.log(fs);

// write file
fs.writeFileSync("ab.txt","ABDULLAH IS THE BEST SOFTWARE ENGINEER IN THE WORLD");
// this code will run when file will be created
console.log("done");
fs.writeFileSync("ab1.txt","ABDULLAH IS THE BEST SOFTWARE ENGINEER IN THE WORLD",()=>{console.log("done 3")})
// this code will run when before file will be created
console.log("done2");

// fs.readFile
fs.readFile("ab.txt",(error,data)=>{
    console.log(error,data);
})
fs.readFile("ab.txt",(error,data)=>{
    console.log(error,data.toString());
})
// so many callback functions create callback hell so for avoiding it we use promises