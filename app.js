// imports
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

// set up body-parser middleware to parse JSON requests

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//IMPORT ROUTES
const postRoute = require('./routes/posts');

app.use("/posts", postRoute);



app.get("/", (req, res) => {
    res.send("Inside");
});

//app.get("/posts", (req, res)) => {
   // res.send("Inside the post");
//});

//MIDDLE WARE
//app.use("/posts", () => {
  //  console.log('This is middle ware');
//});

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname = 'public/css'))
app.use('/js', express.static(__dirname = 'public/js'))
app.use('/img', express.static(__dirname = 'public/img'))

//app.use(bodyParser.urlencoded({extended: false}))

//Routes
//Get(),Post()

//connect mongodb
mongoose.connect('mongodb+srv://waiganjo:volaire@cluster0.lnpfric.mongodb.net/node-api?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to mongoose')
})
.catch(err => console.error('Error connecting to MongoDB:', err));


//Listen on port

app.listen(port, () => console.info(`App listening on port ${port}`))