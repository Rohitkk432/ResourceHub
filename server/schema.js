const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema({
  // _id: { type: String, required: true },
  userID: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  items: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: false },
      link: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('data', cardSchema, 'data');