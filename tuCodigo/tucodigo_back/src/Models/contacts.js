const mongoose = require("mongoose");
const { Schema } = mongoose

const contactsSchema = new Schema({
    contactName: {type: String, required: true},
    contactEmail: {type: String, required: true},
    contactPhone: {type: Number, required: true},
},
{
    versionKey: false,
    timestamps: true,
  });

module.exports = mongoose.model("Contacts", contactsSchema);