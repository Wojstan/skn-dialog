import type { NextApiRequest, NextApiResponse } from 'next'

type UserActivity = {
  userId: string
  sessionId: string
  timestamp: string
  activity: {
    pageViews: number
    timeSpent: number
    interactions: number
    scrollDepth: number
  }
  device: {
    type: 'desktop' | 'tablet' | 'mobile'
    os: string
    browser: string
  }
  location: {
    country: string
    city: string
    timezone: string
  }
  // Extended fields for comparison
  version: string
  sessionType: 'new' | 'returning'
  referrer: string | null
  performance: {
    loadTime: number
    renderTime: number
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserActivity>
) {
  if (req.method === 'GET') {
    const devices = ['desktop', 'tablet', 'mobile'] as const
    const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge']
    const countries = ['Poland', 'Germany', 'United States', 'United Kingdom']
    const cities = ['Warsaw', 'Krakow', 'Berlin', 'London', 'New York']

    const data: UserActivity = {
      userId: `user_${Math.random().toString(36).substr(2, 8)}`,
      sessionId: `session_${Math.random().toString(36).substr(2, 10)}`,
      timestamp: new Date().toISOString(),
      activity: {
        pageViews: Math.floor(Math.random() * 20) + 1,
        timeSpent: Math.floor(Math.random() * 1800) + 60, // 1-30 minutes
        interactions: Math.floor(Math.random() * 50) + 5,
        scrollDepth: Math.floor(Math.random() * 100) + 1
      },
      device: {
        type: devices[Math.floor(Math.random() * devices.length)],
        os: Math.random() > 0.5 ? 'Windows' : 'macOS',
        browser: browsers[Math.floor(Math.random() * browsers.length)]
      },
      location: {
        country: countries[Math.floor(Math.random() * countries.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        timezone: 'Europe/Warsaw'
      },
      // Extended fields
      version: '1.0.5',
      sessionType: Math.random() > 0.3 ? 'returning' : 'new',
      referrer: Math.random() > 0.6 ? 'https://google.com' : null,
      performance: {
        loadTime: Math.floor(Math.random() * 2000) + 500,
        renderTime: Math.floor(Math.random() * 1000) + 200
      }
    }

    // Add custom headers for analysis
    res.setHeader('X-API-Source', 'user-activity-endpoint')
    res.setHeader('X-Request-UUID', `${Math.random().toString(36).substr(2, 12)}`)
    res.setHeader('X-Environment', process.env.NODE_ENV || 'development')
    res.setHeader('X-Response-Timestamp', new Date().toISOString())
    res.status(200).json(data)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}