import { Routes, Route } from "react-router-dom"
import Header from "../src/components/layout/Header"
import Footer from "../src/components/layout/Footer"
import HomePage from "../src/pages/HomePage"
import ProductDetail from "../src/pages/ProductDetail"
import type { Testimonial } from "../src/components/sections/TestimonialsSection"

// Datos de testimonios - Estos datos eventualmente vendrán de Strapi
const testimonials: Testimonial[] = [
  {
    name: "Francisco Paolantonio",
    comment:
      "Excelente servicio, le di dos compus, una para armado y otra para formateo. Siempre me mantuvo actualizado con fotos y mensajes. Las dos pcs 10/10, súper recomendable.",
    rating: 5,
  },
  {
    name: "Emilia Caseres",
    comment:
      "Me ayudó muchísimo con el asesoramiento para comprarme una pc óptima. Se tomó el tiempo para enviarme audios y links con opciones. Notable predisposición. Un crack!",
    rating: 5,
  },
  {
    name: "Gero Yapur",
    comment:
      "Llegué sin esperanzas y encontré una luz. Guille me guió hasta el paraíso: una 4090ti andando como pura sangre, 500 fps promedio. Un verdadero profesional.",
    rating: 5,
  },
]

export default function App() {
  const whatsappNumber = "5493815395778"
  const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="min-h-screen bg-background">
      <Header whatsappLink={whatsappLink} />
      <Routes>
        <Route path="/" element={<HomePage whatsappLink={whatsappLink} testimonials={testimonials} />} />
        <Route path="/producto/:slug" element={<ProductDetail whatsappLink={whatsappLink} />} />
      </Routes>
      <Footer />
    </div>
  )
}
