const express = require('express')
const routes = require('./routes/routes')


const app = express()
app.use('/routes', routes)
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World abdullah is the best software engineer in the world and he is the most attractive men in this world and he is a billionare!')
})
app.put('/', (req, res) => {
    console.log("hello world 2")
    res.send('Hello World abdullah is the best software engineer and it is a put request!')
  })
app.get("/index",(req,res)=>{
  console.log("IAM SERVING HTML FILE")
  res.sendFile("templates/index.html",{root:__dirname});
})
app.get("/api",(req,res)=>{
  console.log("IAM SERVING json FILE")
  res.json({a:1,b:2,c:3,d:4});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})