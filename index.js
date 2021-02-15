const express = require('express');
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.use(bodyParser.json())

app.use('/api/v2', routes)


app.listen(3000)