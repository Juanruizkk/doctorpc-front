import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    emoji: "🔧",
    title: "Reparación de PC y Notebooks",
    description: "Diagnóstico y reparación de cualquier problema de hardware o software. Desde componentes dañados hasta fallas del sistema.",
  },
  {
    emoji: "🧹",
    title: "Limpieza y Mantenimiento",
    description: "Limpieza profunda, cambio de pasta térmica, optimización de temperatura y rendimiento de tu equipo.",
  },
  {
    emoji: "💿",
    title: "Instalación de Windows y Software",
    description: "Formateo, instalación de sistema operativo, drivers, programas y juegos. Configuración completa de tu PC.",
  },
  {
    emoji: "🎮",
    title: "Armado y Upgrade PC Gamer",
    description: "Asesoramiento y armado de PC gaming personalizada. Upgrade de componentes para mejorar rendimiento.",
  },
  {
    emoji: "🔍",
    title: "Diagnóstico Completo",
    description: "Análisis completo de componentes, detección de fallas, testeo de rendimiento y recomendaciones técnicas",
  },
  {
    emoji: "🏠",
    title: "Servicio a Domicilio",
    description: "Visitas programadas a tu hogar u oficina. Instalaciones eléctricas, domótica y soporte técnico in-situ.",
  },
]

interface ServicesSectionProps {
  whatsappLink: (message: string) => string
}

export default function ServicesSection({ whatsappLink }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 px-4 bg-card/80" /* style={{ backgroundColor: "#09073B" }} */>
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Soluciones completas para todas tus necesidades tecnológicas
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
                className="
                          group
                          bg-card/50 backdrop-blur
                          border border-border/40
                          transition-all duration-300
                          hover:border-[rgba(170,57,211,0.8)]
                          hover:shadow-[0_0_25px_6px_rgba(170,57,211,0.35)]
                        "

              
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-3xl">{service.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
