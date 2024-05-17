const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes');
const path = require('path');  
const session = require('express-session');  
const MongoStore = require('connect-mongo');  
const flash  = require('connect-flash');    
require('dotenv').config(); 



const globalMiddleware = require ('./src/middlewares/middlewares'); 
const app = express();
const port = 10000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.CONNECTION_URL).then(() => {
    console.log("Conectando...");
    app.emit("Connected!");
}).catch(e => {
    console.error(e);
})

app.on("Connected!", () => {
    app.listen(port, () => {
        console.log("Acesse : http://localhost:3000");
    })
})

  

//sessions : 
const sessionOptions = session({
    secret : "Project Sessions", 
    store: MongoStore.create({mongoUrl: process.env.CONNECTION_URL}), 
    resave: false, 
    saveUninitialized:false, 
    cookie : {
        maxAge: 1000 * 60 * 60 *7, 
        httpOnly: true
    }
})
 

app.use(sessionOptions); 
app.use(flash()); 
app.use(globalMiddleware); 
app.use(router);

app.set('views', path.resolve(__dirname, "src", "views"));
app.set('view engine', 'ejs'); 
