export default function HowToBuySection() {
  return (
    <section className="py-20 px-4 bg-accent/15">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            ¿Cómo <span className="text-primary">Comprar?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold">Elegí tu Producto</h3>
            <p className="text-muted-foreground text-pretty">
              Navegá por nuestro catálogo y seleccioná el producto o servicio que necesitás
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-accent">2</span>
            </div>
            <h3 className="text-xl font-semibold">Contactanos por WhatsApp</h3>
            <p className="text-muted-foreground text-pretty">
              Tocá el botón "Consultar" y hablá directamente con nosotros
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold">Coordiná y Recibí</h3>
            <p className="text-muted-foreground text-pretty">Confirmamos precio, forma de pago y entrega. ¡Listo!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
