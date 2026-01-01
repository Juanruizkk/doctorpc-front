import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"
import pc_gamer from "@/assets/pc_GAMER.jpg"
import circuitos from "@/assets/blue_circuit2.png"
interface HeroSectionProps {
  whatsappLink: (message: string) => string
}

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">


        <img
          src={circuitos}
          alt="Electronic circuits background"
          className="w-full h-full object-cover"
        />


        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30">+15 años de experiencia</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Servicio Técnico de PC & Gaming
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Reparación, mantenimiento, upgrade y venta de periféricos gamers. Soluciones profesionales para tu
              computadora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-lg h-14"
                onClick={() => window.open(whatsappLink("Hola! Necesito ayuda con mi PC"), "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-lg h-14 bg-transparent"
                onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Productos
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl" />
            <img
              src={pc_gamer}
              alt="Gaming PC Setup"
              className="relative rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
