import { Router } from "express";
import char from "../models/Dandd.js";

const router = Router();

// Create army route
router.post("/", async (request, response) => {
  try {
    const newchar = new char(request.body);

    const data = await newchar.save();

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
