const { MongoClient } = require('mongodb')
require('dotenv/config')

const seedCards = [
  { topic: 'JavaScript', question: 'What are the six falsy values?', answer: '0, NaN, null, false, "", undefined' },
  { topic: 'JavaScript', question: 'What are truthy values in JavaScript?', answer: 'Any value that is not one of the six falsy values.' },
  { topic: 'Hitchhiking', question: 'What is the meaning of life?', answer: '42' }
]

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(client => {
    const collection = client
      .db()
      .collection('cards')

    return collection.deleteMany({})
      .then(() => collection.insertMany(seedCards))
      .then(() => client.close())
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
