//require('dotenv').config()

const express = require('express')

const app = express()

const ejs = require('ejs')

const path = require('path')

const expressLayout = require('express-ejs-layouts')

const PORT = process.env.PORT || 3300

const mongoose = require('mongoose')

const url = "mongodb+srv://mk:mk123@cluster0.b9st8.mongodb.net/menus?retryWrites=true&w=majority";

// mongoose.connect(url, { useNewUrlParser: true, useCreateindex: true, useUnifiedTopology: true });

// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log("db connected");
// }).catch(err => {
//     console.log("connection failed")
// })
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));

app.use(express.static('public'))

app.use(expressLayout)

app.set('views', path.join(__dirname, '/resources/views'))

app.set('view engine', 'ejs')

require('./routes/web')(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})