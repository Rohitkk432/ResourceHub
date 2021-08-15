var express = require("express");
var router = express.Router();
const card = require("./models/cards");
const item = require('./models/items');
const users = require("./models/users");

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

router.get('/findbyEmail/:email',async (req,res)=>{

  try{
      const found = await users.findOne({email: req.params.email});
      res.send(found);
  }
  catch(e){
    console.log(e)
  }

})

router.post('/createAccount',async(req,res)=>{
  try{
    const newEntry= new users();
    newEntry.email  = req.body.email;
    newEntry.save();
    res.send(newEntry)
  }

  
  catch(e){
    console.log(e)
  }
})


router.post('/updateAccount/', async(req,res)=>{
  try{
    
    result = await users.findOneAndUpdate({email:req.body.email}, 
      {
        name : req.body.name,
        socials:
          {
            instagram: req.body.socials.instagram,
            facebook: req.body.socials.facebook,
            linkedin: req.body.socials.linkedin,
            github: req.body.socials.github ,     
          }
      }
    );
     res.send('successful') // the  result does not show the updated document because by default the function findOneAnd Update returns the document as it was before update

    }    
  
  catch(e){
    console.log(e)
  }
})

    





module.exports = router;
