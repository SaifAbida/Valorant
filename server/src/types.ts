import mongoose from "mongoose";

export type agentDocumentType = {
  _id: mongoose.Types.ObjectId;
  code_name: string;
  real_name: string;
  role: { name: string; image: string };
  image: string;
  origin: string;
  voice_actor: string;
  passives: string;
  basic_abilities: { name: string; image: string }[];
  signature_ability: { name: string; image: string };
  ultimate_ability: { name: string; image: string };
};

export type weaponDocumentType = {
  _id: mongoose.Types.ObjectId;
  name: string;
  type: string;
  image: string;
  credits: number;
  wall_Penetration: string;
  magazine: number;
  reserve: number;
  damage: { distance: string; head: number; body: number; leg: number }[];
};

export type mapDocumentType = {
  _id: mongoose.Types.ObjectId;
  name: string;
  mini_map: string;
  location: string;
  spike_sites: string;
  added: string;
};

export type agentCreationType = {
  code_name: string;
  real_name: string;
  role: { name: string; image: string };
  image: string;
  origin: string;
  voice_actor: string;
  passives: string;
  basic_abilities: { name: string; image: string }[];
  signature_ability: { name: string; image: string };
  ultimate_ability: { name: string; image: string };
};

export type weaponCreationType = {
  name: string;
  type: string;
  image: string;
  credits: number;
  wall_Penetration: string;
  magazine: number;
  reserve: number;
  damage: { distance: string; head: number; body: number; leg: number }[];
};

export type mapCreationType = {
  name: string;
  mini_map: string;
  location: string;
  spike_sites: string;
  added: string;
};
