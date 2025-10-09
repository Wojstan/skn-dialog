import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Animal', 'bear')
  res.status(200).json({ endpoint: 'bear', ok: true })
}
