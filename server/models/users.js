const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    
    name:{required:false, type:String},
    email:{required:true, type:String},
    socials: [
        {
          instagram: { type: String, required: false },
          facebook: { type: String, required: false },
          linkedin: { type: String, required: false },
          github: { type: String, required: false },
          
        }
      ],
      bio:{required:false, type:String}
});
  
  module.exports = mongoose.model('user', userSchema, 'user');