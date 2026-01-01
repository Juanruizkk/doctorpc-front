import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import logo from "@/assets/logo_doctor_pc.png";
const PHONE_NUMBER = "+5493815395778";
const WHATSAPP_URL = `https://wa.me/5493815395778?text=${encodeURIComponent(
  "Hola! Me interesa consultar sobre sus servicios"
)}`;
const currentYear = new Date().getFullYear();
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Doctor+PC+av+presidente+peron+Pindo+873+T4107+Yerba+Buena+Tucuman";

export default function Footer() {
  return (
    <footer id="contacto" className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            {/* Logo */}
            <div>
              <img
                className="pr-2 h-16 w-auto"
                src={logo}
                alt="Logo Doctor PC"
              />
            </div>
            <p className="text-muted-foreground text-pretty">
              Servicio técnico especializado en PC Gamer y venta de periféricos.
              Más de 15 años de experiencia.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-muted-foreground">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>+54 9 381 539 5778</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-accent" />
                <span>WhatsApp 24/7</span>
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span>
                  Doctor PC, Av. Presidente Perón, Pindo 873, T4107 Yerba Buena,
                  Tucumán
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span>Lun - Sáb: 9:00 - 20:00</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Reparación de PC</li>
              <li>• Mantenimiento</li>
              <li>• Armado PC Gamer</li>
              <li>• Venta de Periféricos</li>
              <li>• Asesoramiento</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>
            © {currentYear} Doctor PC - Guillermo Casasola. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
