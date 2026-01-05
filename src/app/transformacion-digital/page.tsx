export default function TransformacionDigitalPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-3">
        <div className="text-xs text-zinc-500">
          <a href="/" className="hover:text-zinc-900">
            Home
          </a>
          <span className="px-2">›</span>
          <a href="/sobre-nosotros" className="hover:text-zinc-900">
            Sobre Nosotros
          </a>
          <span className="px-2">›</span>
          <span className="text-zinc-900">Transformación Digital</span>
        </div>

        <div className="mt-4 overflow-hidden bg-white">
          <div className="grid min-h-[240px] md:grid-cols-12">
            <div className="relative md:col-span-4">
              <div className="absolute inset-0 bg-[#1E2A7B]" />
              <div className="absolute bottom-0 right-0 top-0 w-14 bg-[#D4A80F]" />
              <div className="absolute bottom-0 right-14 top-0 w-20 rounded-l-full bg-[#1E2A7B]" />
              <div className="relative p-8 text-white">
                <div className="text-[38px] font-semibold leading-[1.05]">
                  Transformación
                  <br />
                  Digital
                </div>
              </div>
            </div>

            <div className="relative md:col-span-8">
              <div className="relative h-[240px] md:h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/4imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-zinc-100 p-12 text-[28px] font-light leading-tight text-zinc-900">
              Reinventar nuestro
              <br />
              negocio para una
              <br />
              nueva era digital
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-base leading-6 text-zinc-700">
              <p>
                En el mundo empresarial, la revolución digital continúa acelerándose. La tecnología está en constante evolución y ofrece un
                flujo de nuevas oportunidades.
              </p>
              <p className="mt-4">
                Esto implica reinventar nuestra forma de atender: mejorar procesos, organizar información y facilitar una experiencia más
                clara para clientes y equipos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Centrada en el cliente</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Nuestros clientes son nuestro foco: buscamos que encontrar y comprar sea más fácil, con información clara sobre productos,
                stock y alternativas.
              </p>
              <p className="mt-4">
                Esto ayuda a ahorrar tiempo, mejorar la planificación y reducir retrabajos, brindando una atención consistente.
              </p>
              <p className="mt-4">
                Implementamos mejoras progresivas para responder con excelencia a nuevas necesidades.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Servicios digitales innovadores</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Disponibilidad 24/7, información organizada y una atención más ágil. Nuestra meta es que puedas cotizar, comparar y decidir
                con rapidez.
              </p>
              <p className="mt-4">
                A medida que evolucionamos, incorporamos funciones para seguimiento de pedidos, gestión de cuenta y visualización de
                condiciones de compra.
              </p>
            </div>
          </div>
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Protección de datos y su experiencia en línea</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                A medida que adaptamos nuestra atención a entornos digitales, la importancia de los datos crece. Protegerlos es una
                prioridad: aplicamos buenas prácticas y un enfoque responsable.
              </p>
              <p className="mt-4">
                Trabajamos con procesos claros, control de accesos y mejora constante para mantener una experiencia confiable.
              </p>
              <p className="mt-4">
                Nuestro compromiso con la ciberseguridad avanza al mismo ritmo que nuestras mejoras digitales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
