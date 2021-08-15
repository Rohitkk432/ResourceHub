const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    link: { type: String, required: true },
    dataID : { type: String, required: true },
});

module.exports = mongoose.model('item', ItemSchema, 'item');