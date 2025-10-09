import type { NextApiRequest, NextApiResponse } from 'next'

type ProjectStats = {
  id: string
  name: string
  description: string
  status: 'active' | 'completed' | 'planned'
  participants: number
  startDate: string
  estimatedCompletion: string
  tags: string[]
  metrics: {
    engagement: number
    satisfaction: number
    completion: number
  }
  // Extended fields for comparison
  priority: 'high' | 'medium' | 'low'
  budget: number
  category: string
  lastUpdated: string
}

const dummyProjects: ProjectStats[] = [
  {
    id: 'proj_1',
    name: 'Dialog Psychology Research Initiative',
    description: 'Advanced research in cognitive psychology and behavioral analysis',
    status: 'active',
    participants: 45,
    startDate: '2024-09-15',
    estimatedCompletion: '2025-03-20',
    tags: ['research', 'psychology', 'cognitive'],
    metrics: {
      engagement: 87,
      satisfaction: 92,
      completion: 65
    },
    priority: 'high',
    budget: 15000,
    category: 'research',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'proj_2',
    name: 'Mental Health Awareness Campaign',
    description: 'Community outreach program for mental health education',
    status: 'active',
    participants: 32,
    startDate: '2024-10-01',
    estimatedCompletion: '2025-01-15',
    tags: ['mental-health', 'education', 'community'],
    metrics: {
      engagement: 94,
      satisfaction: 89,
      completion: 78
    },
    priority: 'high',
    budget: 8500,
    category: 'community',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'proj_3',
    name: 'Student Support Network',
    description: 'Peer-to-peer support system for academic and personal challenges',
    status: 'completed',
    participants: 67,
    startDate: '2024-06-10',
    estimatedCompletion: '2024-09-30',
    tags: ['support', 'students', 'network'],
    metrics: {
      engagement: 91,
      satisfaction: 96,
      completion: 100
    },
    priority: 'medium',
    budget: 5200,
    category: 'support',
    lastUpdated: new Date().toISOString()
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectStats[]>
) {
  if (req.method === 'GET') {
    // Simulate API delay
    setTimeout(() => {
      const filteredProjects = req.query.status 
        ? dummyProjects.filter(project => project.status === req.query.status)
        : dummyProjects

      res.status(200).json(filteredProjects)
    }, Math.random() * 200 + 100) // Random delay between 100-300ms
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}