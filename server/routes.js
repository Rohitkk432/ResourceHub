var express = require("express");
var router = express.Router();
const card = require("./models/cards");
const item = require('./models/items');

router.get("/data", async (req, res) => {
  try {
    const cards = await card.find({});
    res.send(cards);
  } catch (err) {
    console.error(err.message);
  }
});


router.post('/createPost', async (req,res)=>{
  try{
    const {userID,title,description}=req.body;
    const newEntry = new card();
    newEntry.userID = userID;
    newEntry.title = title;
    newEntry.description = description;
    newEntry.save();
    res.send(newEntry);
  }
  catch(e){
    console.log(e)
  }
})

router.post('/createItemPost', async (req,res)=>{
  try{
    const {title,description,image,link,dataID}=req.body;
    const newEntry = new item();
    newEntry.title = title;
    newEntry.description = description;
    newEntry.image = image;
    newEntry.link = link;
    newEntry.dataID = dataID;
    newEntry.save();
    res.send(newEntry);
  }
  catch(e){
    console.log(e)
  }

})




module.exports = router;
