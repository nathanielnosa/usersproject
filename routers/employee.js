const express = require('express')
const router = express.Router()

router.router('/')
  .get()
  .post()
  .put()
  .delete()

router.route('/:id')
  .get()

module.exports = router