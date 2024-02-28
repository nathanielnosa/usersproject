require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/dbCon')


const app = express()
app.use(express.json())
connectDB()

// routers
app.use('/register', require('./routers/register'))
app.use('/login', require('./routers/login'))


const PORT = process.env.PORT || 4000

mongoose.connection.once('open', () => {
  console.log('Database connection success');

  app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  })
})
