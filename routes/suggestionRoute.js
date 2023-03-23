const express = require("express");

const {
  requestSuggestion,
  getRequestSuggestion,
} = require("../controllers/suggestionController");
const router = express.Router();

router.post("/requestOrder", requestSuggestion);
router.get("/getAllOrderRequests", getRequestSuggestion);

module.exports = router;
