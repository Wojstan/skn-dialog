import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Animal', 'panda')
  res.status(200).json({ endpoint: 'panda', ok: true })
}
