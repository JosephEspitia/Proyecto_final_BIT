const mongoose = require("mongoose");
const { Schema } = mongoose

const contactsSchema = new Schema({
    contactName: {type: String, required: true},
    contactEmail: {type: String, required: true},
    contactPhone: {type: Number, required: true},
    contactContent: {type: String, required:true},
    contactAnswers: {type: String, required: true, default: 'Empty'}
},
{
    versionKey: false,
    timestamps: true,
  });

module.exports = mongoose.model("Contacts", contactsSchema);