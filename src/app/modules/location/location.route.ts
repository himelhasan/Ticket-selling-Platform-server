import express from "express";
import { createALocation, findLocations } from "./location.controller";

const locationRouter = express.Router();

locationRouter.get("/", findLocations);
locationRouter.post("/add", createALocation);
export default locationRouter;
