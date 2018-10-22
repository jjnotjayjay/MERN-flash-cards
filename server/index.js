const express = require('express')
const { MongoClient } = require('mongodb')
const path = require('path')
const bodyParser = require('body-parser')
const CardsRouter = require('./routes/cards-router.js')
require('dotenv/config')

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(client => client.db())
  .then(db => db.collection('cards'))
  .then(collection => {
    const app = express()

    app.use(express.static(path.join(__dirname, 'public')))
    app.use(bodyParser.json())
    app.use('/cards', CardsRouter(collection))

    app.listen(process.env.PORT)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
