const express = require('express')
const uuid = require('uuid/v4')

function cardsRouter(collection) {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    return collection
      .find({})
      .toArray()
      .then(cards => res.json(cards))
      .catch(err => next(err))
  })

  router.post('/', (req, res, next) => {
    const { topic, question, answer } = req.body
    return collection
      .insertOne(Object.assign({ topic, question, answer }, { id: uuid() }))
      .then(result => res.json(result.ops[0]))
      .catch(err => next(err))
  })

  router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const { topic, question, answer } = req.body
    return collection
      .findOneAndUpdate({ id }, { $set: { topic, question, answer } }, { returnOriginal: false })
      .then(result => res.json(result.value))
      .catch(err => next(err))
  })

  router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    return collection
      .findOneAndDelete({ id })
      .then(() => res.sendStatus(204))
      .catch(err => next(err))
  })

  return router
}

module.exports = cardsRouter
