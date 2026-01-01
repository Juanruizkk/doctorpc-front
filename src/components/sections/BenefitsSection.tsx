import { useEffect } from "react"
import { Zap, Star, CheckCircle, HardDrive } from "lucide-react"

export default function BenefitsSection() {
  useEffect(() => {
    const icons = document.querySelectorAll(".coin-icon")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-coin", "opacity-100")
            observer.unobserve(entry.target) // solo una vez
          }
        })
      },
      { threshold: 0.5 }
    )

    icons.forEach((icon) => observer.observe(icon))

    return () => {
      icons.forEach((icon) => observer.unobserve(icon))
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-3">
            <div className="coin-icon opacity-0 transition-opacity duration-300 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Atención Honesta</h3>
            <p className="text-sm text-muted-foreground text-pretty">Te decimos la posta, sin vueltas ni sobreprecios.</p>
          </div>
          <div className="text-center space-y-3">
            <div className="coin-icon opacity-0 transition-opacity duration-300 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold">Precios Claros</h3>
            <p className="text-sm text-muted-foreground text-pretty">Valores reales, acordes a la calidad del producto.</p>
          </div>
          <div className="text-center space-y-3">
            <div className="coin-icon opacity-0 transition-opacity duration-300 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Asesoramiento de Confianza</h3>
            <p className="text-sm text-muted-foreground text-pretty">Te recomendamos lo que necesitás, no lo más caro.</p>
          </div>
          <div className="text-center space-y-3">
            <div className="coin-icon opacity-0 transition-opacity duration-300 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <HardDrive className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold">Trabajo Responsable</h3>
            <p className="text-sm text-muted-foreground text-pretty">Cuidamos tus equipos como si fueran nuestros.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
