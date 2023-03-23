const express = require("express");
const {
  orderRequest,
  getOrderRequests,
} = require("../controllers/requestForm");
const router = express.Router();

router.post("/requestOrder", orderRequest);
router.get("/getAllOrderRequests", getOrderRequests);

module.exports = router;
