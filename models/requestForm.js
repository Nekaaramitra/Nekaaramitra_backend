const mongoose = require("mongoose");

const requestFormSchema = mongoose.Schema({
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
  Registered_id: {
    type: String,
    unique: false,
    trim: true,
    required: true,
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
  loom_Image: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
});
const OrderRequest = mongoose.model("OrderRequest", requestFormSchema);
module.exports = OrderRequest;
