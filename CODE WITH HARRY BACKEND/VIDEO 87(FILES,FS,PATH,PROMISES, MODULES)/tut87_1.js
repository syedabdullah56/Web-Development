// PROMISES
import fs from "fs/promises"
import path from "path"
let a=await fs.readFile("ab1.txt")
let b=await fs.writeFile("ab3.txt","ABDULLAH IS THE MOST ATTRACTIVE MEN IN THE WORLD");
console.log(a.toString(),b);

// path
let myPath=("e:\\CODE WITH ABDULLAH\\WEB DEVELOPMENT\CODE WITH HARRY BACKEND\\VIDEO 87(FILES,FS,PATH,PROMISES, MODULES)\\tut87_1.js");
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));
console.log(path.join("e://CODE WITH ABDULLAH\\WEB DEVELOPMENT\CODE WITH HARRY BACKEND\\VIDEO 87(FILES,FS,PATH,PROMISES, MODULES)\\tut87_1.js"));
