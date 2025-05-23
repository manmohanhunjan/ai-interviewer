import Navbar from './components/ui/navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import TransformSection from './components/TransformSection'
import TestimonialSection from './components/TestimonialSection'
import ReadySection from './components/ReadySection'
import FooterSection from './components/FooterSection'

// Main Landing Page
export default function Landing() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />
            <FeaturesSection />
            <TransformSection />
            <TestimonialSection />
            <ReadySection />
          </div>
        </main>
        <FooterSection />
      </div>
    </div>
  )
}
