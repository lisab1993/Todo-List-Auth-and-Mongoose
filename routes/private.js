const User = require('../schemas')
const express = require('express')
//npm install jsonwebtoken
//JSON web token is a way to securely transmit data between parties as a JSON object
const jwt = require('jsonwebtoken')

const router = express.Router()

// /hello is being defined here, and it's arbitrary.
//it returned hello in the starter code, hence the name
router.get('/hello', (req, res) => {
  const authorization = req.header('Authorization') || ''
  const [type, token] = authorization.split(' ')

  if (type === 'Bearer' && jwt.verify(token, 'CHANGEME!')) {
    const payload = jwt.decode(token, 'CHANGEME!')
    User.findOne({ _id: payload._id }, (err, user) => {
      if (err) return res.status(500).send(err)
      if (!user) return res.status(400).send('not a valid user')

      //Currentlly just returns hello
      res.json({ secretMessage: 'Hello' })
    })
  } else {
    return res.status(400).send('You are not authorized to make GET requests -Lisa')
  }
})

//add my curl folder to my path (similar to the way we added mongoose)

module.exports = router