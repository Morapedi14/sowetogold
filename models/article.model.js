const mongoose = require('mongoose');
const { Schema } = mongoose;
//Creating a schema model for user information to POST to the database
const articleSchema = new Schema({
    title: { type: String },
    // picture: { type: String },
    body: { type: String },
    isDraft: { type: Boolean, default: true },
    author: [{ type: Schema.Types.ObjectId, ref: "User" }],
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model('Article', articleSchema);//Exporting the model to be available to routes