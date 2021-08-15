var express = require("express");
var router = express.Router();
const card = require("./models/cards");

router.get("/rohit", async (req, res) => {
  try {
    const hello = await card.findOne({
      userID: "123",
    });
    res.send(hello);
    console.log(hello);
  } catch (err) {
    console.error(err.message);
  }
});
router.post('/createPost', async (req,res)=>{
  try{
      const newEntry = new card();
      newEntry.userID = req.body.userID;
      newEntry.title = req.body.title;
      newEntry.description = req.body.description;
      newEntry.items.title = req.body.items.title;
      newEntry.items.description = req.body.items.description;
      newEntry.items.img = req.body.items.img;
      newEntry.items.link = req.body.items.link
      newEntry.save()
      res.send('data inserted')
        
      
  }
  catch(e){
    console.log(e)
  }

})


module.exports = router;
