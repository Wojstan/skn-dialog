export type JoinBlocks = {
  title: string
  text?: string
  info: {
    title: string
    time: string
  }[]
}

export interface JoinInterface {
  data: {
    header: JoinBlocks
    timeline: JoinBlocks
  }
}
