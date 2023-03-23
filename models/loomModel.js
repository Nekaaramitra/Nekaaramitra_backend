const mongoose = require("mongoose");

const loomSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },

    Reg_id: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    loom_status: {
      type: String,
      required: true,
      default: "pending",
    },

    manufacturer_name: {
      type: String,
      required: true,
      trim: true,
    },
    // last_name: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    manufacturer_img: {
      type: String,
      required: true,
      trim: true,
    },
    manufacturer_phone: {
      type: String,
      required: true,
      trim: true,
    },
    manufacturer_state: {
      type: String,
      trim: true,
      required: true,
    },
    manufacturer_city: {
      type: String,
      trim: true,
      required: true,
    },
    manufacturer_village: {
      type: String,
      trim: true,
      required: true,
    },
    manufacturer_pincode: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      // validate(value) {
      //   if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
      //     throw new Error("Email is Not Valid. ");
      //   }
      // },
    },

    // Loom Details

    loom_number: {
      type: String,
      required: true,
      trim: true,
    },
    loom_type: {
      type: String,
      required: true,
      trim: true,
    },

    loom_type_img: {
      type: String,
      required: true,
      trim: true,
    },
    product_type: {
      type: String,
      required: true,
      trim: true,
    },
    product_type_img: {
      type: String,
      required: true,
      trim: true,
    },
    weaver_name: {
      type: String,
      required: true,
      trim: true,
    },
    weaver_img: {
      type: String,
      required: true,
      trim: true,
    },

    // Marketer Details

    marketer_name: {
      type: String,
      trim: true,
      required: true,
    },

    marketer_img: {
      type: String,
      trim: true,
      required: true,
    },
    marketer_phone: {
      type: String,
      trim: true,
      required: true,
    },

    marketer_state: {
      type: String,
      trim: true,
      required: true,
    },
    marketer_city: {
      type: String,
      trim: true,
      required: true,
    },
    marketer_village: {
      type: String,
      trim: true,
      required: true,
    },
    marketer_pincode: {
      type: String,
      trim: true,
      required: true,
    },
    terms: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Loom = mongoose.model("loom", loomSchema);

module.exports = Loom;
