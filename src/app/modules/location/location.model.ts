import { Schema, model } from "mongoose";

const locationSchema = new Schema<ILocation>({
  name: { type: String, required: true },
  points: [{ type: String, required: true }],
});

const LocationModel = model("Locations", locationSchema);

export default LocationModel;
