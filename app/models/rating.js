// load the things we need
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Schema = mongoose.Schema;

// define the schema for our user model
var ratingSchema = Schema({
  schoolId: { type: Schema.Types.ObjectId },
  userId: { type: Schema.Types.ObjectId },
  rating: { type: Number }
});

// create the model for users and expose it to our app
module.exports = mongoose.model("Rating", ratingSchema);
