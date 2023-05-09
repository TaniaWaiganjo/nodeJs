const express = require("express");
const router = express.Router();

const Post = require("../model/Post");
//const { name } = require("ejs");

/*router.get("/", (req, res) => {
     res.send("Inside the post");
}); */

//get all posts using find
router.get("/", async (req, res) => {
   try {
    const posts = await Post.find();
    res.json(posts);
   } catch (err) {
    console.error(err);
    res.status(500).send(err);
   }
});

router.get("/specific", (req,res) =>{ 
    res.send("Inside specific post");
}); 

//Save post
router.post("/", async (req,res) => {
    //res.send('Save a post');
    //console.log(req.body);


   const post = new Post({
        fname : req.body.fname,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        paymentAmount: req.body.paymentAmount,
    });

   try {
    const savedPost = await post.save();
    res.json(savedPost);
    
   } catch (err) {
    res.json({message : err});

   }
});

// DELETE /bookings/:id - delete a booking by ID
router.delete('/:id', async (req, res) => {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      if (!booking) {
        return res.status(404).send({ message: 'Booking not found' });
      }
      res.send({ message: 'Booking deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  });
  

module.exports = router;
