export type AboutBlocks = {
  title: string;
  text?: string;
  info: {
    title: string;
    text: string;
    img: string;
  }[];
};

export interface AboutInterface {
  data: {
    header: AboutBlocks;
    guard: AboutBlocks;
    administration: AboutBlocks;
  };
}
