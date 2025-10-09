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
      <DefaultLayout background='white'>
        {/* Hero Section */}
        <header>
          <div>
            <div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>Psychology Excellence Since 2011</span>
                </div>
                <h1>
                  <span>
                    {header.title}
                  </span>
                </h1>
                <p>
                  {header.text}
                </p>
                <div>
                  <div>
                    🚀 Rozpocznij przygodę
                  </div>
                  <div>
                    📖 Dowiedz się więcej
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/images/main.png" 
                  alt="SKN Dialog 2025" 
                />
              </div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section>
          <div>
            <div>
              {[
                { icon: faUsers, number: "500+", label: "Aktywnych członków" },
                { icon: faGraduationCap, number: "15", label: "Lat doświadczenia" },
                { icon: faRocket, number: "50+", label: "Projektów rocznie" },
                { icon: faStar, number: "98%", label: "Satysfakcja uczestników" }
              ].map((stat, index) => (
                <div key={index}>
                  <div>
                    <FontAwesomeIcon icon={stat.icon} />
                    <div>{stat.number}</div>
                    <div>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section>
          <div>
            <div>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <span>Poznaj nas bliżej</span>
              </div>
              <h2>
                Dlaczego <span>SKN Dialog</span>?
              </h2>
              <p>
                Odkryj, co czyni nas wyjątkowymi w świecie psychologii akademickiej
              </p>
            </div>

            <div>
              {header.info.map((info, index) => (
                <div key={index}>
                  <div>
                    <div>
                      <div>
                        <div>
                          <img 
                            src={info.img} 
                            alt={info.title}
                          />
                        </div>
                      </div>
                      <div>
                        <h3>
                          {info.title}
                        </h3>
                        <p>
                          {info.text}
                        </p>
                        <div>
                          <div>
                            Dowiedz się więcej 
                            <svg>
                              <path d="M9 5l7 7-7 7" />
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
        <section>
          <div>
            <div>
              <div>
                <FontAwesomeIcon icon={faRocket} />
                <span>Nasze Projekty</span>
              </div>
              <h2>
                <span>
                  {projects.title}
                </span>
              </h2>
              <p>
                {projects.text}
              </p>
            </div>

            <div>
              {projects.info.map((project, index) => (
                <div key={index}>
                  <div>
                    <div>
                      <div>
                        {project.img ? (
                          <img src={project.img} alt={project.title} />
                        ) : (
                          <FontAwesomeIcon icon={faRocket} />
                        )}
                      </div>
                      <h3>
                        {project.title}
                      </h3>
                      <p>
                        {project.text}
                      </p>
                    </div>
                    <div>
                      <div>
                        Explore →
                      </div>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <div key={i}></div>
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
        <section>
          <div>
            <div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <FontAwesomeIcon icon={faMailBulk} />
                  <FontAwesomeIcon icon={faMailForward} />
                  <FontAwesomeIcon icon={faMailReply} />
                </div>
                <h2>
                  {newsletter.title}
                </h2>
                <p>
                  {newsletter.text}
                </p>
              </div>

              {/* Newsletter Component */}
              <div>
                <div>
                  <h3>
                    🎯 Exclusive Access Awaits
                  </h3>
                  <div>
                    {[
                      { icon: "📚", label: "Research" },
                      { icon: "🎧", label: "Podcasts" },
                      { icon: "🎯", label: "Events" },
                      { icon: "🏆", label: "Awards" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div>{item.icon}</div>
                        <div>{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Newsletter />
                <div>
                  ✨ Join 500+ psychology enthusiasts • Unsubscribe anytime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section>
          <div>
            <div>
              <h2>Ready to Transform Your Psychology Journey?</h2>
              <p>Join the most innovative psychology community in Poland</p>
              <div>
                <div>
                  🚀 Join SKN Dialog
                </div>
                <div>
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
