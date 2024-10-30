import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ReadySection from './components/ReadySection'
import VideoSection from './components/VideoSection'
import SuppliersSection from './components/SuppliersSection'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ReadySection />
        <VideoSection />
        <SuppliersSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}