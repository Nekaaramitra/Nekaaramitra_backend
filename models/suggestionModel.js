const mongoose = require("mongoose");

const suggestion = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  user_email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },

  image: {
    type: String,
    // required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
});
const SuggestionForm = mongoose.model("suggestion", suggestion);
module.exports = SuggestionForm;
