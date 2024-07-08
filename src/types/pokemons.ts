export type Pokemon = {
  id: number;
  name: string;
  korean_name: string;
  height: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
};
