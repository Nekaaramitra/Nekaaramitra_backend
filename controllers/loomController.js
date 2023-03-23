const asyncHandler = require("express-async-handler");
const Loom = require("../models/loomModel");

// Register Loom
const registerLoom = asyncHandler(async (req, res) => {
  let loom = req.body;

  // let {
  //   Reg_id,
  //   manufacturer_name,
  //   manufacturer_img,
  //   manufacturer_phone,
  //   manufacturer_state,
  //   manufacturer_city,
  //   manufacturer_village,
  //   manufacturer_pincode,

  //   loom_number,
  //   loom_type,
  //   loom_type_img,
  //   product_type,
  //   product_type_img,
  //   weaver_name,
  //   weaver_img,

  //   marketer_name,
  //   marketer_img,
  //   marketer_phone,
  //   marketer_state,
  //   marketer_city,
  //   marketer_village,
  //   marketer_pincode,
  //   terms,
  // } = req.body;

  if (
    !loom.Reg_id ||
    !loom.email ||
    !loom.manufacturer_name ||
    !loom.manufacturer_img ||
    !loom.manufacturer_phone ||
    !loom.manufacturer_state ||
    !loom.manufacturer_city ||
    !loom.manufacturer_village ||
    !loom.manufacturer_pincode ||
    !loom.loom_number ||
    !loom.loom_type ||
    !loom.loom_type_img ||
    !loom.product_type ||
    !loom.product_type_img ||
    !loom.weaver_name ||
    !loom.weaver_img ||
    !loom.marketer_name ||
    !loom.marketer_img ||
    !loom.marketer_phone ||
    !loom.marketer_state ||
    !loom.marketer_city ||
    !loom.marketer_village ||
    !loom.marketer_pincode ||
    !loom.terms
  ) {
    res.status(404);
    throw new Error("All Fields are Required");
  } else {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let TotalReg =
      (await Loom.find({ createdAt: { $gt: today } }).countDocuments()) + 1;

    let numbertoString = TotalReg.toString();

    if (numbertoString.length < 4) {
      for (let i = numbertoString.length; i < 4; i++) {
        numbertoString = "0" + numbertoString;
      }
    }
    loom.Reg_id = loom.Reg_id + numbertoString;

    const myloom = new Loom({ user: req.user._id, ...loom });

    const createdloom = await myloom.save();
    res.status(201).json(createdloom);
  }
});

// Update Loom
const updateLoom = asyncHandler(async (req, res) => {
  const loom = await Loom.findById(req.params.id);
  if (loom.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (loom) {
    const {
      Reg_id,
      manufacturer_name,
      email,
      // manufacturer_name,
      manufacturer_img,
      manufacturer_phone,
      manufacturer_state,
      manufacturer_city,
      manufacturer_village,
      manufacturer_pincode,
      loom_number,
      loom_type,
      loom_type_img,
      product_type,
      product_type_img,
      weaver_name,
      weaver_img,
      marketer_name,
      marketer_img,
      marketer_phone,
      marketer_state,
      marketer_city,
      marketer_village,
      marketer_pincode,
      loom_status,
    } = loom;

    loom.Reg_id = Reg_id;
    loom.Reg_id = email;
    loom.loom_status = loom_status;
    loom.manufacturer_name = req.body.manufacturer_name || manufacturer_name;
    loom.manufacturer_img = req.body.manufacturer_img || manufacturer_img;
    loom.manufacturer_phone = req.body.manufacturer_phone || manufacturer_phone;
    loom.manufacturer_state = req.body.manufacturer_state || manufacturer_state;
    loom.manufacturer_city = req.body.manufacturer_city || manufacturer_city;
    loom.manufacturer_village =
      req.body.manufacturer_village || manufacturer_village;
    loom.manufacturer_pincode =
      req.body.manufacturer_pincode || manufacturer_pincode;
    loom.loom_number = req.body.loom_number || loom_number;
    loom.loom_type = req.body.loom_type || loom_type;
    loom.loom_type_img = req.body.loom_type_img || loom_type_img;
    loom.product_type = req.body.product_type || product_type;
    loom.product_type_img = req.body.product_type_img || product_type_img;
    loom.weaver_name = req.body.weaver_name || weaver_name;
    loom.weaver_img = req.body.weaver_img || weaver_img;
    loom.marketer_name = req.body.marketer_name || marketer_name;
    loom.marketer_img = req.body.marketer_img || marketer_img;
    loom.marketer_phone = req.body.marketer_phone || marketer_phone;
    loom.marketer_state = req.body.marketer_state || marketer_state;
    loom.marketer_city = req.body.marketer_city || marketer_city;
    loom.marketer_village = req.body.marketer_village || marketer_village;
    loom.marketer_pincode = req.body.marketer_pincode || marketer_pincode;

    const updatedLoom = await loom.save();
    res.json(updatedLoom);
  } else {
    res.status(404);
    throw new Error("Loom not found");
  }
});

// Fetch Single Loom
const getLoomById = asyncHandler(async (req, res) => {
  const loom = await Loom.findById(req.params.id);
  if (loom.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (loom) {
    res.status(200).json(loom);
  } else {
    res.status(404).json({ message: "Loom Not FOund" });
  }

  // res.json(loom);
});

// Delete Single Loom
const deleteLoom = asyncHandler(async (req, res) => {
  try {
    const loom = await Loom.findById(req.params.id);
    if (loom.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }

    if (loom) {
      await loom.remove();
      res.json({ message: "Loom Deleted Successfully" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get loggedIn user Looms
const getLooms = asyncHandler(async (req, res) => {
  try {
    const looms = await Loom.find({ user: req.user._id });
    res.status(200).json(looms);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get searched loom
const searchLoom = asyncHandler(async (req, res) => {
  try {
    const { Reg_id: Reg_id } = req.params;
    const loom = await Loom.findOne({ Reg_id }).select({ _id: 0, _v: 0 });
    if (loom) {
      res.status(200).json(loom);
    } else {
      res.status(404).json("loom not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all looms for admin
const getAllLooms = asyncHandler(async (req, res) => {
  try {
    const looms = await Loom.find();
    res.status(200).json(looms);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get Loom Data for admin
const getLoomData = asyncHandler(async (req, res) => {
  const loom = await Loom.findById(req.params.id);
  // if (loom.user.toString() !== req.user._id.toString()) {
  //   res.status(401);
  //   throw new Error("You can't perform this action");
  // }

  if (loom) {
    res.status(200).json(loom);
  } else {
    res.status(404).json({ message: "Loom Not FOund" });
  }
});

// upgrade Loom Status

const upgradeLoom = asyncHandler(async (req, res) => {
  const { loom_status, id } = req.body;

  const loom = await Loom.findById(id);

  if (!loom) {
    res.status(404);
    throw new Error("Loom Not FOund");
  }

  loom.loom_status = loom_status;

  await loom.save();

  res.status(200).json({
    message: `Loom Status Updated to ${loom_status}`,
  });
});

// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

module.exports = {
  registerLoom,
  updateLoom,
  getLoomById,
  getLooms,
  getAllLooms,
  getLoomData,
  searchLoom,
  upgradeLoom,
  deleteLoom,
};
