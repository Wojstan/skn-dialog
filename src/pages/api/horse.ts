import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Animal', 'horse')
  res.status(200).json({ endpoint: 'horse', ok: true })
}
