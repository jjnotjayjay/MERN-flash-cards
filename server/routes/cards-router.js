const express = require('express')

function CardsRouter(collection) {
  const router = express.Router()

  router.get('/', (req, res) => {
    console.log('Get Request received')
    res.json('You sent a get request.')
  })

  return router
}

module.exports = CardsRouter
