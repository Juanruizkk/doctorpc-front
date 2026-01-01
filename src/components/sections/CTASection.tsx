import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface CTASectionProps {
  whatsappLink: (message: string) => string
}

export default function CTASection({ whatsappLink }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">
          ¿Tu PC anda lenta o querés mejorar tu setup gamer?
        </h2>
        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          Contactanos ahora y te asesoramos sin compromiso
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-lg h-16 px-8"
          onClick={() => window.open(whatsappLink("Hola! Quiero mejorar mi PC/Setup"), "_blank")}
        >
          <MessageCircle className="mr-2 h-6 w-6" />
          Hablemos por WhatsApp
        </Button>
      </div>
    </section>
  )
}
