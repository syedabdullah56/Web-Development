const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
app.use((req,res,next)=>{
  res.send("YOUR COMPUTER IS HACKED!");
})
app.use((req,res,next)=>{
  console.log("LOGGED!");
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello World about!')
  })
  app.get('/contact', (req, res) => {
    res.send('Hello World contact!')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})