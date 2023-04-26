const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
 //routes
const programRoutes = require('./routes/program')
const exerciseRoutes = require('./routes/exercise')
const errorController = require('./controllers/error');
const app = express();

//MIDDLEWARES 
app.use(cors());     //For cross-origin resources sharing
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json());
app.use('/program', programRoutes)
app.use('/exercise', exerciseRoutes)
app.use(errorController.get404);

mongoose.connect('mongodb+srv://kirti:test1234@cluster0.wgasf.mongodb.net/Fitness-APP?retryWrites=true&w=majority')
.then(result => {
    app.listen(3000)
    console.log('Connected!')
})
.catch(err => {
    console.log(err)
})