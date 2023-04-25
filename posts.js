const express = require("express");
const router = express.Router();

const Post = require("../model/Post");
//const { name } = require("ejs");

//get all posts
/*router.get("/", (req, res) => {
     res.send("Inside the post");
});*/

router.get("/specific", (req,res) =>{ 
    res.send("Inside specific post");
}); 

//Save post
router.post("/", (req,res) => {
    //res.send('Save a post');
    //console.log(req.body);


   const post = new Post({
        fname : req.body.fname,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        paymentAmount: req.body.paymentAmount,
    });

    post
    .save()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json({message: err});
    });  
});

module.exports = router;
