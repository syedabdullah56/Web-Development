const express = require('express')
const mongoose=require('mongoose')
const employee=require('./models/employee');
const app = express()
let conn=mongoose.connect("mongodb://localhost:27017/company")
const port = 3000
app.set('view engine','ejs');
app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
})
app.get('/generate',async(req,res)=>{
  // clear the collection employee
  await employee.deleteMany({})
  // generate random data
  let randomNames=["ABDULLAH","USMAN","TARIQ","BADAR","AALIYAN","SAAD","UMER"];
  let randomDesignation=["Software Enginner","Chemical Engineer","Mechanical Engineer","Civil Engineer"];
  let randomLang=["Python","Java","C++","C","JavaScript"];
  const Index1 = Math.floor(Math.random() * randomNames.length);
  const Index2 = Math.floor(Math.random() * randomDesignation.length);
  const Index3 = Math.floor(Math.random() * randomLang.length);
  for (let index = 0; index < 10; index++) {
    let e=await employee.create({
      name:randomNames[Index1],
      // for no:20 till 40 math*(max-min+1)+min
      age:Math.floor(Math.random()*(45-20+1)+20),
      designation:randomDesignation[Index2],
      isManager:(Math.random()>0.5)?true:false,
      salary:Math.floor(Math.random()*990000),
      language:randomLang[Index3]


    })
    console.log(e);
    
  }
  
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

