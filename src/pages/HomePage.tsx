import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import ServicesSection from "../components/sections/ServicesSection"
import ProductsSection from "../components/sections//ProductsSection"
import HowToBuySection from "../components/sections/HowToBuySection"
import BenefitsSection from "../components/sections/BenefitsSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import type { Testimonial } from "../components/sections/TestimonialsSection"
import CTASection from "../components/sections/CTASection"

interface HomePageProps {
  whatsappLink: (message: string) => string
  testimonials: Testimonial[]
}

export default function HomePage({ whatsappLink, testimonials }: HomePageProps) {
  return (
    <>
      <HeroSection whatsappLink={whatsappLink} />
      <AboutSection />
      <ServicesSection whatsappLink={whatsappLink} />
      <ProductsSection whatsappLink={whatsappLink} />
      <HowToBuySection />
      <BenefitsSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection whatsappLink={whatsappLink} />
    </>
  )
}
