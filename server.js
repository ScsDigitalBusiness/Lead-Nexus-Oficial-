const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes');
const path = require('path');
const app = express();
const connectionURL = "mongodb+srv://xdevelopment:X331400X@lead-nexus.qfz22lk.mongodb.net/?retryWrites=true&w=majority&appName=Lead-Nexus";
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(connectionURL).then(() => {
    console.log("Conectando...");
    app.emit("Connected!");
}).catch(e => {
    console.error(e);
})

app.on("Connected!", () => {
    app.listen(3000, () => {
        console.log("Acesse : http://localhost:3000");
    })
})



app.use(router);


app.set('views', path.resolve(__dirname, "src", "views"));
app.set('view engine', 'ejs'); 
