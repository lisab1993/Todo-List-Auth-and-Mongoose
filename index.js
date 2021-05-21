const express = require('express')
const mongoose = require('mongoose')
// Morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process.
//npm install morgan --save
const morgan = require('morgan')

const app = express()
const port = 8000

//“dev”: A color-coded (by request status) log format.
app.use(morgan('dev'))
app.use(express.json())

//connects to the routes created under the "routes" directory
const userRoutes = require('./routes/users')
app.use('/', userRoutes)

const protectedRoutes = require('./routes/protected')
app.use('/', protectedRoutes)

//creates an async function that will be used to connect to "localhost", and the name of our database.
const connectDatabase = async (hostname, databaseName) => {
    const database = await mongoose.connect(
      `mongodb://${hostname}/${databaseName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    )
  
    console.log(`database connected at mongodb://${hostname}/${databaseName}`)
  
    return database
  }
  
  //the express app listens on port 8000, and asynchronously runs the connectDatabase function crreated above.
  app.listen(port, async () => {
    await connectDatabase('localhost', 'auth-demo')
    console.log(`server is listening on port ${port}`)
  })