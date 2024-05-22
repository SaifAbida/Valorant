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
