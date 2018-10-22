const express = require('express')

function CardsRouter(collection) {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    return collection
      .find({})
      .toArray()
      .then(cards => res.json(cards))
      .catch(err => next(err))
  })

  router.post('/', (req, res, next) => {
    const { id, topic, question, answer } = req.body
    return collection
      .insertOne({ id, topic, question, answer })
      .then(result => res.json(result.ops[0]))
      .catch(err => next(err))
  })

  router.put('/', (req, res, next) => {
    const { id, topic, question, answer } = req.body
    return collection
      .findOneAndUpdate({ id }, { $set: { topic, question, answer } }, { returnOriginal: false })
      .then(result => res.json(result.value))
      .catch(err => next(err))
  })

  return router
}

module.exports = CardsRouter
