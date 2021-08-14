var express = require("express");
var router = express.Router();
const card = require("./schema");

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

// router.use('/' , (req, res, next) => {
//     res.send('hello rohit');
// });


module.exports = router;
