export interface HomeInterface {
  data: {
    header: {
      title: string;
      text?: string;
    };
    projects: {
      title: string;
      text?: string;
      data: {
        title: string;
        text: string;
        img: string;
      }[];
    };
    partners: string[];
  };
}
