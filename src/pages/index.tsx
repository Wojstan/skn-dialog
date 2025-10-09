import Head from 'next/head'
import { useEffect } from 'react'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { header, newsletter, projects } from 'constants/Home'
import { ContentBlock } from 'components/Common/ContentBlock'
import { Description } from 'components/Common/Description'
import { InfoBlock } from 'components/Common/InfoBlock'
import { Button } from 'components/Common/Button'
import { Waves } from 'components/Common/Waves'
import { Title } from 'components/Common/Title'
import { Subtitle } from 'components/Common/Subtitle'
import { Newsletter } from 'components/Newsletter/Newsletter'
import {
  faEnvelope,
  faMailBulk,
  faMailForward,
  faMailReply,
  faGraduationCap,
  faUsers,
  faStar,
  faRocket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  useEffect(() => {
    const makeAnalyticsRequest = async () => {
      try {
       const response = await fetch('/api/analytics?page=index')
        const data = await response.json()
        console.log('Analytics data received:', data.id)
      } catch (error) {
        console.error('Analytics request failed:', error)
      }
    }

    const makeProjectsRequest = async () => {
      try {
      const response = await fetch('/api/projects?status=active')
        const data = await response.json()
        console.log('Projects data received:', data.length, 'projects')
      } catch (error) {
        console.error('Projects request failed:', error)
      }
    }

    const makeUserActivityRequest = async () => {
      try {
        const response = await fetch('/api/user-activity')
        const data = await response.json()
        console.log('User activity data received for session:', data.sessionId)
      } catch (error) {
        console.error('User activity request failed:', error)
      }
    }

    makeAnalyticsRequest()
    makeUserActivityRequest()

    fetch('/api/red', { headers: { 'X-Color': 'red' } })
    fetch('/api/blue', { headers: { 'X-Color': 'blue' } })
    fetch('/api/green', { headers: { 'X-Color': 'green' } })
    fetch('/api/yellow', { headers: { 'X-Color': 'yellow' } })
    fetch('/api/purple', { headers: { 'X-Color': 'purple' } })
    fetch('/api/orange', { headers: { 'X-Color': 'orange' } })
    fetch('/api/pink', { headers: { 'X-Color': 'pink' } })

    fetch('/api/cat', { headers: { 'X-Animal': 'cat' } })
    fetch('/api/dog', { headers: { 'X-Animal': 'dog' } })
    fetch('/api/fox', { headers: { 'X-Animal': 'fox' } })
    fetch('/api/lion', { headers: { 'X-Animal': 'lion' } })
    fetch('/api/tiger', { headers: { 'X-Animal': 'tiger' } })
    fetch('/api/bear', { headers: { 'X-Animal': 'bear' } })
    fetch('/api/wolf', { headers: { 'X-Animal': 'wolf' } })
    fetch('/api/horse', { headers: { 'X-Animal': 'horse' } })
    fetch('/api/monkey', { headers: { 'X-Animal': 'monkey' } })
    fetch('/api/elephant', { headers: { 'X-Animal': 'elephant' } })
    fetch('/api/panda', { headers: { 'X-Animal': 'panda' } })

    const intervalId = setInterval(() => {
      makeAnalyticsRequest()
      makeUserActivityRequest()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Head>
        <title>SKN Dialog 2025 - Innovating Psychology Education</title>
        <meta name="description" content="Revolutionary student organization transforming psychology education" />
      </Head>
      <DefaultLayout background="black">
        {/* Hero Section */}
        <header className="relative">
          <div className="bg-blue-800 text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-blue-700 rounded-full px-4 py-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-yellow-300" />
                  <span className="text-sm font-medium text-white">Psychology Excellence Since 2011</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-yellow-300">
                    {header.title}
                  </span>
                </h1>
                <p className="text-xl text-white max-w-lg leading-relaxed">
                  {header.text}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="px-8 py-4 text-lg font-semibold rounded bg-blue-600 text-white cursor-pointer">
                    🚀 Rozpocznij przygodę
                  </div>
                  <div className="px-8 py-4 text-lg font-semibold rounded bg-gray-600 text-white cursor-pointer">
                    📖 Dowiedz się więcej
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  className="w-full h-auto rounded" 
                  src="/images/main.png" 
                  alt="SKN Dialog 2025" 
                />
              </div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="relative py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: faUsers, number: "500+", label: "Aktywnych członków" },
                { icon: faGraduationCap, number: "15", label: "Lat doświadczenia" },
                { icon: faRocket, number: "50+", label: "Projektów rocznie" },
                { icon: faStar, number: "98%", label: "Satysfakcja uczestników" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded p-6 shadow border">
                  <div className="text-center">
                    <FontAwesomeIcon icon={stat.icon} className="text-4xl text-purple-600 mb-4" />
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded px-6 py-3 mb-6">
                <FontAwesomeIcon icon={faStar} className="text-purple-600" />
                <span className="text-purple-700 font-semibold">Poznaj nas bliżej</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
                Dlaczego <span className="text-purple-600">SKN Dialog</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Odkryj, co czyni nas wyjątkowymi w świecie psychologii akademickiej
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {header.info.map((info, index) => (
                <div key={index} className={`${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="bg-white rounded p-8 shadow border">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-purple-500 rounded flex items-center justify-center">
                          <img 
                            src={info.img} 
                            alt={info.title}
                            className="w-12 h-12 object-cover rounded filter brightness-0 invert"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {info.text}
                        </p>
                        <div className="mt-6">
                          <div className="inline-flex items-center text-purple-600 font-semibold cursor-pointer">
                            Dowiedz się więcej 
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gray-700 rounded px-6 py-3 mb-6">
                <FontAwesomeIcon icon={faRocket} className="text-yellow-300" />
                <span className="text-white font-semibold">Nasze Projekty</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="text-white">
                  {projects.title}
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {projects.text}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {projects.info.map((project, index) => (
                <div key={index}>
                  <div className="bg-gray-700 rounded p-6 border border-gray-600">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-yellow-500 rounded flex items-center justify-center mb-4">
                        {project.img ? (
                          <img src={project.img} alt={project.title} className="w-10 h-10 object-cover rounded" />
                        ) : (
                          <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-yellow-300 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed">
                        {project.text}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-yellow-300 font-semibold cursor-pointer">
                        Explore →
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-yellow-400' : 'bg-gray-500'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-4 mb-6">
                  <FontAwesomeIcon icon={faEnvelope} className="text-6xl text-yellow-300" />
                  <FontAwesomeIcon icon={faMailBulk} className="text-5xl text-white" />
                  <FontAwesomeIcon icon={faMailForward} className="text-6xl text-pink-300" />
                  <FontAwesomeIcon icon={faMailReply} className="text-5xl text-white" />
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  {newsletter.title}
                </h2>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                  {newsletter.text}
                </p>
              </div>

              {/* Newsletter Component */}
              <div className="bg-purple-700 rounded p-8 border border-purple-500 max-w-2xl mx-auto">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    🎯 Exclusive Access Awaits
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { icon: "📚", label: "Research" },
                      { icon: "🎧", label: "Podcasts" },
                      { icon: "🎯", label: "Events" },
                      { icon: "🏆", label: "Awards" }
                    ].map((item, index) => (
                      <div key={index} className="text-center p-3 bg-purple-600 rounded">
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="text-white text-sm font-medium">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Newsletter />
                <div className="mt-6 text-white text-sm">
                  ✨ Join 500+ psychology enthusiasts • Unsubscribe anytime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Psychology Journey?</h2>
              <p className="text-gray-300 mb-8">Join the most innovative psychology community in Poland</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="px-8 py-4 bg-purple-600 rounded font-semibold cursor-pointer">
                  🚀 Join SKN Dialog
                </div>
                <div className="px-8 py-4 border-2 border-gray-600 rounded font-semibold cursor-pointer">
                  📞 Contact Us
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  )
}
