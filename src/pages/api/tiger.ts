import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Animal', 'tiger')
  res.status(200).json({ endpoint: 'tiger', ok: true })
}
