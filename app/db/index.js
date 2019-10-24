import mongoose from 'mongoose'
const DB_URL = 'mongodb://39.106.80.90:27017/lotteryDraw'

mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })

/**
  * 连接成功
  */
mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open to ' + DB_URL)  
})

/**
 * 连接异常
 */
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err)  
})

module.exports = mongoose
