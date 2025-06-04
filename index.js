const express = require('express')
const { connect } = require('./mongoDB')
const rateLimit = require('express-rate-limit')

require('dotenv').config()

const app = express()

app.use(express.json())

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message: { error: 'Too many requests, please try again later.' }
})
app.use(limiter)

app.use('/tasks', require('./routes/task.route'))

connect()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server is on localhost: ${process.env.PORT}`)
        })
    })
    .catch((err) => console.error(err))
