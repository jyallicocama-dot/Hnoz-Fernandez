export default function ProductosPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-3">
        <div className="text-xs text-zinc-500">
          <a href="/" className="hover:text-zinc-900">
            Home
          </a>
          <span className="px-2">›</span>
          <span className="text-zinc-900">Qué Hacemos</span>
        </div>

        <div className="mt-4 overflow-hidden bg-white">
          <div className="grid min-h-[260px] md:grid-cols-12">
            <div className="relative md:col-span-4">
              <div className="absolute inset-0 bg-[#1E2A7B]" />
              <div className="absolute bottom-0 right-0 top-0 w-14 bg-[#D4A80F]" />
              <div className="absolute bottom-0 right-14 top-0 w-20 rounded-l-full bg-[#1E2A7B]" />
              <div className="relative p-8 text-white">
                <div className="text-[42px] font-semibold leading-[1.05]">
                  ¿Qué
                  <br />
                  Hacemos?
                </div>
              </div>
            </div>

            <div className="relative md:col-span-8">
              <div className="relative h-[260px] md:h-full">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-zinc-100 p-12 text-[28px] font-light leading-tight text-zinc-900">
              Simplificamos tu
              <br />
              negocio
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-base leading-6 text-zinc-700">
              Atendemos a clientes en todo el país con un equilibrio entre disponibilidad, asesoría y capacidad local, facilitando sus
              operaciones diarias.
              <div className="mt-4">
                Optimizamos nuestra forma de trabajar para ofrecer un servicio ágil: alternativas, coordinación de entrega, seguimiento y
                comunicación clara.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[340px] md:col-span-4 md:h-auto">
            <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Vamos Contigo</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>Donde lo necesites, dondequiera que tu proyecto te lleve.</p>
              <p className="mt-4">
                Estamos preparados para retos ambiciosos, ya sean los más sencillos o los más exigentes. Te ayudamos a avanzar con
                disponibilidad, alternativas y respuesta rápida.
              </p>
              <p className="mt-4">Seguimos este camino juntos, hasta el éxito.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Sensibilidad</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>Ningún pedido es demasiado pequeño, ningún proyecto es demasiado complejo.</p>
              <p className="mt-4">
                Nuestra cadena de suministro y atención está preparada para responder a solicitudes diversas, estén donde estén.
              </p>
            </div>
          </div>
          <div className="relative h-[340px] md:col-span-4 md:h-auto">
            <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[340px] md:col-span-4 md:h-auto">
            <img src="/4imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Siempre lo Entendemos</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p className="font-medium">¡Simplifica tu vida!</p>
              <p className="mt-4">
                Te apoyamos en cada paso: queremos crecer contigo y ser parte del éxito de tus proyectos.
              </p>
              <p className="mt-4">
                Ponemos a tu disposición nuestro know-how técnico para que tomes mejores decisiones, con confianza.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative overflow-hidden">
            <div className="grid gap-0 md:grid-cols-12">
              <div className="relative h-[320px] md:col-span-4 md:h-[420px]">
                <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="relative h-[320px] md:col-span-8 md:h-[420px]">
                <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0">
              <div className="mx-auto w-full max-w-7xl px-2 pb-6 sm:px-3">
                <div className="grid gap-0 md:grid-cols-12">
                  <div className="md:col-span-4" />
                  <div className="grid md:col-span-8 md:grid-cols-2">
                    <div className="pointer-events-auto bg-emerald-800 p-10 text-white">
                      <div className="text-lg font-semibold">Clientes y Segmentos</div>
                      <div className="mt-3 text-sm leading-6 text-white/90">
                        Hacer la vida de nuestros clientes más fácil: entendiendo en profundidad sus necesidades y entregando soluciones
                        completas.
                      </div>
                      <a href="/que-hacemos/productos" className="mt-6 inline-block text-sm font-semibold underline">
                        Conoce más
                      </a>
                    </div>
                    <div className="pointer-events-auto bg-sky-600 p-10 text-white">
                      <div className="text-lg font-semibold">Partners</div>
                      <div className="mt-3 text-sm leading-6 text-white/90">
                        Alianzas estratégicas y fabricantes confiables para ofrecer altos niveles de calidad, seguridad y tecnología.
                      </div>
                      <a href="/que-hacemos/partners" className="mt-6 inline-block text-sm font-semibold underline">
                        Conoce más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
