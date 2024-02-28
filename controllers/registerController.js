const User = require('../models/User')

const bcrypt = require('bcrypt')

const handleRegister = async (req, res) => {
  const { user, email, image, pwd } = req.body
  if (!user || !email || !pwd) return res.status(401).json({ "Message": "Fields cannot be empty" })

  try {
    const existingUser = await User.findOne({ username: user }).exec()
    const existingEmail = await User.findOne({ email: email }).exec()

    if (existingUser || existingEmail) return res.status(401).json({ "Message": "username/email already taken" })
    const hashedPwd = await bcrypt.hash(pwd, 10)

    const createUser = await User.create({
      "username": user,
      "email": email,
      "image": image,
      "password": hashedPwd
    })
    res.status(200).json({ "Message": `User ${createUser.username} was created successfully!` })

  } catch (error) {
    res.status(500).json({ "Message": `${error.message}` })
  }


}


module.exports = { handleRegister }