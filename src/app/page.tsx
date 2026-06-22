import Hero from '@/components/sections/Hero'
import LogoStrip from '@/components/sections/LogoStrip'
import CaseStudies from '@/components/sections/CaseStudies'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import WhyNetguru from '@/components/sections/WhyNetguru'
import CommerceFootprint from '@/components/sections/CommerceFootprint'
import Insights from '@/components/sections/Insights'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      {/* <> is a Fragment — groups elements without adding an extra div */}
      <Hero />
      {/* <LogoStrip /> */}
      <CaseStudies />
      <Services />
      <Stats />
      <Testimonials />
      <WhyNetguru />
      <CommerceFootprint />
      <Insights />
      <CtaBanner />
    </>
  )
}