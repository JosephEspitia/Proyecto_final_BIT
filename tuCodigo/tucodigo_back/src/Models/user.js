const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema(
    {
    name: {type:String, requires:true},
    lastName:{type:String, requires:true},
    photoUser:{type:String, require:false, default:`imagen no disponible`},
    email: {type:String, requires:true},
    password: {type:String, requires:true},
    passwordConfirm: {type:String, requires:true},
    actualCourse: {type:String, requires:true},
    goals: {type:Array, requires:false},
    permissionsAdmin: { type:Boolean, requires:false, default: false},
    permissionsClient: { type:Boolean, requires:false, default: true},
    permissionsVerified: {type:Boolean, require:false, default: false}
       
},
{
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);