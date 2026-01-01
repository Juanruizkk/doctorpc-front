import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X } from "lucide-react"
import logo from "@/assets/logo_doctor_pc.png"

interface HeaderProps {
  whatsappLink: (message: string) => string
}

export default function Header({ whatsappLink }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#productos", label: "Productos" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  const handleMenuClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img className="pr-2 h-16 w-auto" src={logo} alt="Logo Doctor PC" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-md items-center">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop WhatsApp Button */}
          <Button
            size="sm"
            className="hidden lg:flex bg-accent hover:bg-accent/90"
            onClick={() => window.open(whatsappLink("Hola! Me interesa consultar sobre sus servicios"), "_blank")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary/20 pt-4 animate-fade-in-down">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-md hover:text-primary transition-colors py-2"
                  onClick={handleMenuClick}
                >
                  {item.label}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 w-full mt-2"
                onClick={() => {
                  window.open(whatsappLink("Hola! Me interesa consultar sobre sus servicios"), "_blank")
                  handleMenuClick()
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
