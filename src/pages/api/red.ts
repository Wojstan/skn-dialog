import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Color', 'red')
  res.status(200).json({ endpoint: 'red', ok: true })
}
