const mongoose = require("mongoose");
const { Schema } = mongoose;

const SchemaCurses = new Schema({
  name:{ type: String, required: true,},
  numEjercise:{type:Number,required:true},
  ejercise:{type: String,required:true}

})
module.exports = mongoose.model("curses", SchemaCurses);