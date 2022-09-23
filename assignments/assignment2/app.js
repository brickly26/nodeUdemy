const express = require('express');

const app = express()

// app.use((req,res, next) => {
//   console.log("This is the first middleware")
//   next()
// })

// app.use((req, res) => {
//   console.log('This is the second middleware')
//   res.send("<h1>This is the response</h1>")
// })

app.use('/user', (req,res,next) => {
  console.log("this is the user route")
  res.send('<h1>This is the user route</h1>')
})

app.use('/', (req,res, next) => {
  console.log('This is the main route')
  res.send('<h1>This is the main route</h1>')
})

app.listen(3001)