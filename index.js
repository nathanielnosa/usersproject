require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/dbCon')


const app = express()
connectDB()



const PORT = process.env.PORT || 4000

mongoose.connection.once('open', () => {
  console.log('Database connection success');

  app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  })
})
