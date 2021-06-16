// load the things we need
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Schema = mongoose.Schema;

// define the schema for our user model
var reviewSchema = Schema({
  reviewerEmail: { type: String, required: true },
  pros_review: { type: String, required: true },
  cons_review: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId },
  schoolId: { type: Schema.Types.ObjectId }
});

// create the model for users and expose it to our app
module.exports = mongoose.model("Review", reviewSchema);
