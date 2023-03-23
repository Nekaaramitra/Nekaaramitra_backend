const asyncHandler = require("express-async-handler");
const OrderRequest = require("../models/requestForm");

const orderRequest = asyncHandler(async (req, res) => {
  let userreq = req.body;
  const newReq = OrderRequest(userreq);

  try {
    userreq = new OrderRequest(req.body);
    await newReq.save();
    res.status(201).json(newReq);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

const getOrderRequests = asyncHandler(async (req, res) => {
  try {
    const requests = await OrderRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = { orderRequest, getOrderRequests };
