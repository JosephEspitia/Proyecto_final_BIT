const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema(
    {
    name: {type:String, requires:true},
    lastName:{type:String, requires:true},
    email: {type:String, requires:true},
    password: {type:String, requires:true},
    passwordConfirm: {type:String, requires:true},
    photoUser: { type: String, required: false, default: `image not available` },
    actualCourse: {type:String, requires:true},
    goals: {type:Array, requires:false},
    permissions: {
        admin: {type: Boolean, default: false},
        client: {type: Boolean, default: true},
        verified: {type: Boolean, default: false}
    }
},
{
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);