import sobre_mi_foto from "@/assets/foto_yo.jpeg";
import { AnimatedNumber } from "../ui/AnimatedNumber";
export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Columna 1: Imagen (toda la altura) */}
          <div className="relative flex justify-center items-start">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl" />
            <img
              src={sobre_mi_foto}
              alt="Foto Perfil"
              className="relative rounded-lg h-150 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Columna 2: Texto arriba y Estadísticas abajo */}
          <div className="flex flex-col gap-8">
            {/* Fila superior: Texto */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Guillermo Casasola -{" "}
                <span className="text-primary">DOCTOR PC</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Soy técnico especializado en PC Gamer con más de 15 años de
                experiencia. Me dedico a la reparación y mantenimiento de
                computadoras, notebooks, netbooks y consolas, además de realizar
                trabajos de electrónica en general y reparación de
                electrodomésticos, ofreciendo soluciones confiables y duraderas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                También soy electricista domiciliario e instalador. Realizo
                visitas a domicilio (con costo adicional), brindo capacitación
                en computación y electrónica para todas las edades y ofrezco
                asistencia remota rápida y segura a través de TeamViewer.
              </p>
            </div>

            {/* Fila inferior: Estadísticas en grid 2x2 */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 text-center">
                <AnimatedNumber
                  value={15}
                  suffix="+"
                  className="text-4xl font-bold text-primary"
                />
                <div className="text-sm text-muted-foreground">
                  Años de Experiencia
                </div>
              </div>

              <div className="space-y-2 text-center">
                <AnimatedNumber
                  value={50}
                  suffix="+"
                  className="text-4xl font-bold text-accent"
                />
                <div className="text-sm text-muted-foreground">
                  Reseñas en Google
                </div>
              </div>

              <div className="space-y-2 text-center">
                <AnimatedNumber
                  value={2000}
                  suffix="+"
                  className="text-4xl font-bold text-primary"
                />
                <div className="text-sm text-muted-foreground">
                  Reparaciones
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Consultas WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
