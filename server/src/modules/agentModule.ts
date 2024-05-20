import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({

  code_name: { type: String, required: [true, "The agent's code name is required"] },
  real_name: { type: String, required: [true, "The agent's real name is required"] },
  role: {
    image: { type: String, required: [true, "The role image is required"] },
    name: { type: String, required: [true, "The role name is required"] },
  },
  image : { type: String, required: [true, "The image is required"] },
  origin: { type: String, required: [true, "The origin is required"] },
  voice_actor: {
    type: String,
    required: [true, "The voice actor is required"],
  },
  passives: { type: String, required: [true, "The passives are required"] },
  basic_abilities: [
    {
      image: {
        type: String,
        required: [true, "The ability image is required"],
      },
      name: { type: String, required: [true, "The ability name is required"] },
    },
  ],
  signature_ability: {
    image: { type: String, required: [true, "The ability image is required"] },
    name: { type: String, required: [true, "The ability name is required"] },
  },
  ultimate_ability: {
    image: { type: String, required: [true, "The ability image is required"] },
    name: { type: String, required: [true, "The ability name is required"] },
  },
});

export const Agent = mongoose.model("Agents", agentSchema);
