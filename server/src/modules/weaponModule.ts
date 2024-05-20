import mongoose from "mongoose";

const weaponSchema = new mongoose.Schema({
  name: { type: String, required: [true, "The weapon name is required"] },
  type: { type: String, required: [true, "The weapon type is required"] },
  image: { type: String, required: [true, "The weapon image is required"] },
  credits: { type: Number, required: [true, "The weapon price is required"] },
  wall_Penetration: {
    type: String,
    required: [true, "The weapon's wall pen is required"],
  },
  magazine: { type: Number, required: [true, "The magazine is required"] },
  reserve: { type: Number, required: [true, "The reserve is required"] },
  damage: [
    {
      distance: {
        type: String,
        required: [true, "The damage distance is required"],
      },
      head: { type: Number, required: [true, "The head damage is required"] },
      body: { type: Number, required: [true, "The body damage is required"] },
      leg: { type: Number, required: [true, "The leg damage is required"] },
    },
  ],
});

export const Weapon = mongoose.model("Weapons", weaponSchema);
