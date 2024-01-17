import { Router } from "express";
import xarmy from "../models/XWing.js";

const router = Router();

// Create army route
router.post("/", async (request, response) => {
  try {
    const newXarmy = new xarmy(request.body);

    const data = await newXarmy.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
