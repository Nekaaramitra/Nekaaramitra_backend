const asyncHandler = require("express-async-handler");
const OrderRequest = require("../models/requestForm");
const SuggestionForm = require("../models/suggestionModel");

const requestSuggestion = asyncHandler(async (req, res) => {
  let userreq = req.body;
  const newReq = SuggestionForm(userreq);

  try {
    userreq = new SuggestionForm(req.body);
    await newReq.save();
    res.status(201).json(newReq);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

const getRequestSuggestion = asyncHandler(async (req, res) => {
  try {
    const requests = await SuggestionForm.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = { requestSuggestion, getRequestSuggestion };
