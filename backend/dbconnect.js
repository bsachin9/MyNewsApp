const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/sachinNews')
const connection = mongoose.connection


connection.on('connected', () => {
  console.log('Mongo DB Connection Successfull')
})


connection.on('error', () => {
  console.log('Mongo DB Connection Failed')
})


module.exports = mongoose