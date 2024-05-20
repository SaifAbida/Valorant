import mongoose from "mongoose";

const mapSchema = new mongoose.Schema({
  name: { type: String, required: [true, "The map name is required"] },
  mini_map: { type: String, required: [true, "The mini map is required"] },
  location: { type: String, required: [true, "The map location is required"] },
  spike_sites: {
    type: String,
    required: [true, "The map location is required"],
  },
  added: { type: Date, required: [true, "The map creation date is required"] },
});

export const Map = mongoose.model("Map", mapSchema);
