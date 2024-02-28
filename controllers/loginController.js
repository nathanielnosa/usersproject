const User = require('../models/User')

const bcrypt = require('bcrypt')

const handleLogin = async (req, res) => {

  const { user, pwd } = req.body
  if (!user || !pwd) return res.status(400).json({ "Message": "Fields cannot be emmpty" })

  try {
    const foundUser = await User.findOne({ username: user }).exec()
    if (!foundUser) return res.status(401).json({ "Message": "User not found" })

    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
      const { password, ...other } = foundUser._doc
      res.json(other)
      res.status(200).json({ "Success": "Log in successful" })
      res.json(other)

    } else {
      res.status(400).json({ "Message": "username/password not correct" })
    }

  } catch (error) {
    res.status(500).json({ "Message": `${error.message}` })
  }


}

module.exports = { handleLogin }