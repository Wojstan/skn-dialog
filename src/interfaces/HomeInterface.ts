export type HomeBlocks = {
  title: string
  text?: string
  info: {
    title: string
    text: string
    img: string
  }[]
}

export interface HomeInterface {
  data: {
    header: HomeBlocks
    projects: HomeBlocks
    partners: string[]
  }
}
