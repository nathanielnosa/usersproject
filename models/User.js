const mongoose = require('mongoose')
const Schema = mongoose.Schema


//username,password,image,email
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true
  },

})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel
