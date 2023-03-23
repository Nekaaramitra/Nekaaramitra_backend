const express = require("express");
const router = express.Router();

const { protect, adminOnly } = require("../middleware/authMIddleware");

const {
  registerLoom,
  getLoomById,
  deleteLoom,
  updateLoom,
  upgradeLoom,
  getLooms,
  getAllLooms,
  searchLoom,
  getLoomData,
} = require("../controllers/loomController");

// router.route("/create").post(protect, CreateNote);
router.post("/registerLoom", protect, registerLoom);
router.get("/getLooms", protect, getLooms);

router.get("/getLoomById/:id", protect, getLoomById);
// router.patch("/updateUser", protect, updateUser);
router.patch("/updateLoom/:id", protect, updateLoom);
router.delete("/deleteLoom/:id", protect, deleteLoom);

// .delete(protect, deleteLoom)
router.post("/upgradeLoom", /*protect, adminOnly,*/ upgradeLoom);
// router.delete("/deleteLoom", deleteLoom);
// router.route("/getAllLooms").post(/* protect, */ getAllLooms);
router.get("/getAllLooms", getAllLooms);
router.get("/getLoomData/:id", getLoomData);

// get searched loom for all
router.get("/searchLoom/:Reg_id", searchLoom);

module.exports = router;
