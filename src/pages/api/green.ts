import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Color', 'green')
  res.status(200).json({ endpoint: 'green', ok: true })
}
