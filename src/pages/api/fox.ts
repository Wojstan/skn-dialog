import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Animal', 'fox')
  res.status(200).json({ endpoint: 'fox', ok: true })
}
