import type { NextApiRequest, NextApiResponse } from 'next'

type AnalyticsData = {
  id: string
  timestamp: string
  page: string
  userAgent: string
  visits: number
  sessionDuration: number
  // Extended fields for comparison
  version: string
  status: string
  events: Array<{
    type: string
    action: string
    timestamp: string
    value?: number
  }>
  metadata: {
    requestId: string
    processingTime: number
    serverRegion: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalyticsData>
) {
  if (req.method === 'GET') {
    const startTime = Date.now()
    
    // Simulate some processing time
    const data: AnalyticsData = {
      id: `session_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      page: req.query.page as string || 'index',
      userAgent: req.headers['user-agent'] || 'unknown',
      visits: Math.floor(Math.random() * 1000) + 1,
      sessionDuration: Math.floor(Math.random() * 300) + 30,
      // Extended fields
      version: '1.2.3',
      status: 'active',
      events: [
        {
          type: 'page_view',
          action: 'load',
          timestamp: new Date().toISOString(),
          value: Math.floor(Math.random() * 100)
        },
        {
          type: 'user_interaction',
          action: 'scroll',
          timestamp: new Date(Date.now() - Math.random() * 10000).toISOString(),
          value: Math.floor(Math.random() * 100)
        },
        {
          type: 'engagement',
          action: 'hover',
          timestamp: new Date(Date.now() - Math.random() * 5000).toISOString()
        }
      ],
      metadata: {
        requestId: `req_${Math.random().toString(36).substr(2, 8)}`,
        processingTime: Date.now() - startTime,
        serverRegion: 'eu-central-1'
      }
    }

    // Add custom headers for analysis
    res.setHeader('X-API-Source', 'analytics-endpoint')
    res.setHeader('X-Request-UUID', `${Math.random().toString(36).substr(2, 12)}`)
    res.setHeader('X-Environment', process.env.NODE_ENV || 'development')
    res.setHeader('X-Response-Timestamp', new Date().toISOString())
    res.status(200).json(data)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}