import { Router } from "express";
import army from "../models/Charmies.js";

const router = Router();

// Create army route
router.post("/", async (request, response) => {
  try {
    const newArmy = new army(request.body);

    const data = await newArmy.save();

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
