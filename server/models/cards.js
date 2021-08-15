const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema({
  userID: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },  
});

module.exports = mongoose.model('data', cardSchema, 'data');