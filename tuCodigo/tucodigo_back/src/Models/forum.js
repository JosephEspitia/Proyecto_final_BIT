const mongoose = require("mongoose");
const { Schema } = mongoose;

const forumSchema = new Schema(
    {
        forumUser: { type: String, required: true },
        forumEmail: { type: String, required: true },
        forumTitle: { type: String, required: true },
        forumTags: { type: Array, required: false },
        ForumContent: { type: String, required: true },
        ForumAnswers: { type: Array, required: false, default: [] }
    },
    {
        versionKey: false,
        timestamps: true,
    });

module.exports = mongoose.model("Forum", forumSchema);