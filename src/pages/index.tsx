import Head from 'next/head'
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
import { faEnvelope, faMailBulk, faMailForward, faMailReply, faGraduationCap, faUsers, faStar, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <>
      <Head>
        <title>SKN Dialog 2025 - Innovating Psychology Education</title>
        <meta name="description" content="Revolutionary student organization transforming psychology education" />
      </Head>
      <DefaultLayout background="white">
        {/* Hero Section with Gradient Background */}
        <header className="relative">
          <div className="bg-neural-gradient gradient-shift text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 glass-morphism rounded-full px-4 py-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-yellow-300 bounce-custom" />
                  <span className="text-sm font-medium">Psychology Excellence Since 2011</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="neon-text bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    {header.title}
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg leading-relaxed float-animation">
                  {header.text}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover-lift bg-cyber-gradient text-white pulse-glow cursor-pointer">
                    🚀 Rozpocznij przygodę
                  </div>
                  <div className="px-8 py-4 text-lg font-semibold rounded-full glass-morphism hover:glass-morphism-dark transition-all text-white cursor-pointer neon-border">
                    📖 Dowiedz się więcej
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-3xl blur-3xl opacity-30 pulse-glow"></div>
                <img 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl hover-lift float-animation" 
                  src="/images/main.png" 
                  alt="SKN Dialog 2025" 
                />
              </div>
            </div>
          </div>
        </header>

        {/* Floating Stats Section */}
        <section className="relative -mt-24 z-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: faUsers, number: "500+", label: "Aktywnych członków" },
                { icon: faGraduationCap, number: "15", label: "Lat doświadczenia" },
                { icon: faRocket, number: "50+", label: "Projektów rocznie" },
                { icon: faStar, number: "98%", label: "Satysfakcja uczestników" }
              ].map((stat, index) => (
                <div key={index} className="glass-morphism rounded-2xl p-6 shadow-xl hover-lift neon-border">
                  <div className="text-center">
                    <FontAwesomeIcon icon={stat.icon} className={`text-4xl text-purple-600 mb-4 ${index % 2 === 0 ? 'bounce-custom' : 'float-animation'}`} />
                    <div className="text-3xl font-bold text-gray-800 mb-2 neon-text">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section with Card Layout */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3 mb-6">
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
                <div key={index} className={`group ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                          <img 
                            src={info.img} 
                            alt={info.title}
                            className="w-12 h-12 object-cover rounded-lg filter brightness-0 invert"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {info.text}
                        </p>
                        <div className="mt-6">
                          <div className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 cursor-pointer">
                            Dowiedz się więcej 
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Projects Section with Modern Grid */}
        <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                <FontAwesomeIcon icon={faRocket} className="text-yellow-300" />
                <span className="text-white font-semibold">Nasze Projekty</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  {projects.title}
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {projects.text}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {projects.info.map((project, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                        {project.img ? (
                          <img src={project.img} alt={project.title} className="w-10 h-10 object-cover rounded-lg" />
                        ) : (
                          <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        {project.text}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-yellow-300 font-semibold cursor-pointer hover:text-yellow-200">
                        Explore →
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-yellow-400' : 'bg-white/30'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section with Interactive Design */}
        <section className="py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full animate-spin slow"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-yellow-300/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/10 rounded-full animate-ping slow"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-4 mb-6">
                  <FontAwesomeIcon icon={faEnvelope} className="text-6xl text-yellow-300 animate-bounce" />
                  <FontAwesomeIcon icon={faMailBulk} className="text-5xl text-white/80 animate-pulse" />
                  <FontAwesomeIcon icon={faMailForward} className="text-6xl text-pink-300 animate-bounce delay-300" />
                  <FontAwesomeIcon icon={faMailReply} className="text-5xl text-white/80 animate-pulse delay-500" />
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  {newsletter.title}
                </h2>
                <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                  {newsletter.text}
                </p>
              </div>

              {/* Enhanced Newsletter Component with Custom Styling */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
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
                      <div key={index} className="text-center p-3 bg-white/10 rounded-xl">
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="text-white text-sm font-medium">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Newsletter />
                <div className="mt-6 text-pink-200 text-sm">
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
                <div className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all cursor-pointer">
                  🚀 Join SKN Dialog
                </div>
                <div className="px-8 py-4 border-2 border-gray-600 hover:border-purple-500 rounded-full font-semibold transition-all cursor-pointer">
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
