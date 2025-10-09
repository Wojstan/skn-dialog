import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Animal', 'elephant')
  res.status(200).json({ endpoint: 'elephant', ok: true })
}
