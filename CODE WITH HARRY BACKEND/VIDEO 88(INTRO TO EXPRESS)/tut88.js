// Express code for printing hello world
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
    res.send('Hello World to contact!')
  })
  app.get('/about', (req, res) => {
    res.send('Hello World to about!')
  })
  app.get('/myprofile/:slug', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello world to ${req.params.slug}`)
  })
  // app.get('/myprofile/:slug', (req, res) => {
  //   res.send(`Hello world to ${req.params}`)
  // })
  // app.get('/myprofile/:slug', (req, res) => {
  //   res.send(`Hello world to ${req.query}`)
  // })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})