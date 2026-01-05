export default function PartnersPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-3">
        <div className="text-xs text-zinc-500">
          <a href="/" className="hover:text-zinc-900">
            Home
          </a>
          <span className="px-2">›</span>
          <a href="/que-hacemos/productos" className="hover:text-zinc-900">
            Qué Hacemos
          </a>
          <span className="px-2">›</span>
          <span className="text-zinc-400">Partners</span>
        </div>

        <div className="mt-4 overflow-hidden bg-white">
          <div className="grid min-h-[240px] md:grid-cols-12">
            <div className="relative md:col-span-4">
              <div className="absolute inset-0 bg-[#1E2A7B]" />
              <div className="absolute bottom-0 right-0 top-0 w-14 bg-[#D4A80F]" />
              <div className="absolute bottom-0 right-14 top-0 w-20 rounded-l-full bg-[#1E2A7B]" />
              <div className="relative p-8 text-white">
                <div className="text-[38px] font-semibold leading-[1.05]">
                  Partners
                  <br />
                  Estratégicos
                </div>
              </div>
            </div>

            <div className="relative md:col-span-8">
              <div className="relative h-[240px] md:h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-zinc-100 p-10 text-[24px] font-light leading-tight text-zinc-900">
              Asociaciones
              <br />
              Estratégicas
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-base leading-6 text-zinc-700">
              Mantenemos alianzas estratégicas con marcas líderes en el mercado con el fin de generar valor para el sector, a través de
              soluciones robustas y condiciones comerciales diferenciadas para nuestros clientes.
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-sm leading-6 text-zinc-700">
              <p>
                Identificamos y seleccionamos materiales de diferentes segmentos, con el compromiso de distribuir productos y soluciones de
                referencia para satisfacer las necesidades diarias de nuestros clientes.
              </p>
              <p className="mt-4">
                La calidad del producto, la disponibilidad, el cumplimiento normativo y el servicio postventa son criterios principales en
                nuestro proceso de calificación de proveedores.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="bg-zinc-100 p-10 text-[24px] font-light leading-tight text-zinc-900">
              Calidad de Productos y
              <br />
              Procesos
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="text-center text-[28px] font-light text-zinc-900">Nuestras Principales Marcas</div>

          <div className="relative mt-10">
            <button
              type="button"
              aria-label="Anterior"
              disabled
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-sky-600 px-4 py-5 text-white opacity-90"
            >
              <span className="text-2xl leading-none">‹</span>
            </button>

            <div className="mx-auto max-w-5xl px-12">
              <div className="grid items-center justify-items-center gap-y-8 md:grid-cols-5">
                <div className="text-sm font-semibold text-zinc-800">bticino</div>
                <div className="text-sm font-semibold text-blue-700">PHILIPS</div>
                <div className="text-sm font-semibold text-orange-600">INDECO</div>
                <div className="text-sm font-semibold text-emerald-700">Schneider Electric</div>
                <div className="text-sm font-semibold text-zinc-700">LEGRAND</div>
                <div className="md:col-span-5">
                  <div className="text-4xl font-extrabold text-red-600">3M</div>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Siguiente"
              disabled
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-sky-600 px-4 py-5 text-white opacity-90"
            >
              <span className="text-2xl leading-none">›</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-zinc-100 p-10 text-[24px] font-light leading-tight text-zinc-900">
              Innovación y
              <br />
              Promoción
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-sm leading-6 text-zinc-700">
              <p>
                La asociación estratégica con proveedores garantiza innovaciones tecnológicas y lanzamientos al mercado de forma oportuna,
                a través de una amplia cobertura.
              </p>
              <p className="mt-4">
                Ofreciendo formación a instaladores e integradores, contribuimos a incrementar el nivel de cualificación y la
                profesionalización del sector.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[300px] md:col-span-4 md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-10 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Valor Añadido</div>
            <div className="mt-4 text-sm leading-6 text-zinc-700">
              <div className="font-medium text-zinc-900">Valor Añadido</div>
              <div className="mt-2">
                Trabajamos con nuestros proveedores para promocionar sus marcas y llevar innovaciones a mercados diversos. Hacer negocios
                con Hnoz Fernandez es una garantía de distribución. Además de tener acceso a:
              </div>
              <div className="mt-4 grid gap-2">
                <div>- Proyectos a gran escala</div>
                <div>- Fuerza financiera</div>
                <div>- Formación innovadora con acceso rápido a noticias del mercado</div>
                <div>- Un socio global y regional al mismo tiempo</div>
                <div>- Proyección multiplataforma en el mercado digital</div>
              </div>
              <div className="mt-4">
                Impulsamos iniciativas para mantener un alto estándar: campañas, comunicación, capacitación técnica y evaluaciones
                recurrentes para mejorar procesos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
