var express = require("express");
var router = express.Router();
const card = require("./models/cards");
const item = require('./models/items');
const users = require("./models/users");


//finding all cards
router.get("/data", async (req, res) => {
  try {
    const cards = await card.find({});
    res.send(cards);
  } catch (err) {
    console.error(err.message);
  }
});

//finding cards using userID
router.get("/userdata/:userID", async (req, res) => {
  try {
    const usercards = await card.find({dataID:req.params.userID});
    res.send(usercards);
  } catch (err) {
    console.error(err.message);
  }
});

//finding items using cardId
router.get("/carditems/:dataID", async (req, res) => {
  try {
    const carditems = await item.find({dataID:req.params.dataID});
    res.send(carditems);
  } catch (err) {
    console.error(err.message);
  }
});

//creating card
router.post('/createPost', async (req,res)=>{
  try{
    const {userID,title,description,cardtemplate}=req.body;
    const newEntry = new card();
    newEntry.userID = userID;
    newEntry.title = title;
    newEntry.description = description;
    newEntry.cardtemplate= cardtemplate;
    newEntry.save();
    res.send(newEntry);
  }
  catch(e){
    console.log(e)
  }
})

//creating items within a card
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

//find by email in database
router.get('/findbyEmail/:email',async (req,res)=>{
  try{
      const found = await users.findOne({email: req.params.email});
      res.send(found);
  }
  catch(e){
    console.log(e)
  }

})

//create user with email 
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

//updating account info
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
