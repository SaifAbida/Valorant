export type CardProps = {
  img: string;
  name: string;
};

export type CardDisplayProps = {
  id: string;
  img: string;
  name: string;
};

export type agentsDocumentType = {
  _id: string;
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
  _id: string;
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
  _id: string;
  name: string;
  image: string;
  mini_map: string;
  location: string;
  spike_sites: string;
  added: string;
};
