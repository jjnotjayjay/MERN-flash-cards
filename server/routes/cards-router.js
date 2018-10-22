const express = require('express')

function CardsRouter(collection) {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    collection
      .find({})
      .toArray()
      .then(cards => res.json(cards))
      .catch(err => next(err))
  })

  return router
}

module.exports = CardsRouter
