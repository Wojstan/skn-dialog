export type HomeBlocks = {
  title: string;
  text?: string;
  info: {
    title: string;
    text: string;
    img: string;
  }[];
};

export interface ProjectInterface {
  data: {
    header: HomeBlocks;
    guard: HomeBlocks;
    administration: HomeBlocks;
  };
}
