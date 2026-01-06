export default function ServicioAlClientePage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-3">
        <div className="text-sm text-zinc-500">
          <a href="/" className="hover:text-zinc-900">
            Home
          </a>
          <span className="px-2">›</span>
          <a href="/que-hacemos/productos" className="hover:text-zinc-900">
            Qué Hacemos
          </a>
          <span className="px-2">›</span>
          <span className="text-zinc-900">Servicio al Cliente</span>
        </div>

        <div className="mt-4 overflow-hidden bg-white">
          <div className="grid min-h-[240px] md:grid-cols-12">
            <div className="relative md:col-span-4">
              <div className="absolute inset-0 bg-[#1E2A7B]" />
              <div className="absolute bottom-0 right-0 top-0 w-14 bg-[#D4A80F]" />
              <div className="absolute bottom-0 right-14 top-0 w-20 rounded-l-full bg-[#1E2A7B]" />
              <div className="relative p-8 text-white">
                <div className="text-4xl font-semibold leading-[1.05]">Servicio al Cliente</div>
              </div>
            </div>

            <div className="relative md:col-span-8">
              <div className="relative h-[240px] md:h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-zinc-100 p-12 text-[28px] font-light leading-tight text-zinc-900">
              Hacemos la Vida de
              <br />
              Nuestros Clientes más
              <br />
              Fácil
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-base leading-6 text-zinc-700">
              <p>
                En Hnoz Fernandez, hacemos la vida de nuestros clientes más fácil anticipándonos y respondiendo rápidamente a sus
                necesidades.
              </p>
              <p className="mt-4">
                Cualquiera que sea tu negocio, nuestro objetivo es ofrecerte la solución más adecuada para tu proyecto, con asesoría,
                disponibilidad y coordinación.
              </p>
              <p className="mt-4">
                Nos esforzamos por brindar el mejor soporte y acompañamiento en cada etapa, para que puedas avanzar con confianza.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Garantía</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Todos los productos que comercializamos cuentan con su respectiva garantía y esta varía según los mismos. Si presentaran
                alguna deficiencia, escríbenos y con gusto resolveremos tus inconvenientes ofreciendo la mejor solución posible.
              </p>
            </div>
          </div>
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Soporte</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Mantener la confianza del cliente es una prioridad. Nuestro rol no se limita a la venta, también brindamos soporte técnico
                profesional y altamente eficaz.
              </p>
              <p className="mt-4">
                La especialización y personalización de nuestro servicio permiten extraer el máximo partido a los productos adquiridos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Condiciones de Venta</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Todos los productos que comercializamos cuentan con condiciones reguladas para entregar y asegurar nuestra calidad y
                garantía. Para mayor información puede descargar nuestro PDF:
              </p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-sky-600 underline">
                Condiciones de Venta.pdf
              </a>
            </div>
          </div>
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            <img src="/4imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Política de privacidad y tratamiento de datos</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Nos preocupamos por tu privacidad y cumplir con las normativas de tratamiento de datos personales. Te invitamos a revisar
                nuestra política en el siguiente enlace adjunto:
              </p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-sky-600 underline">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Industria</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Atendemos a clientes industriales e instaladores, integradores, OEM y mantenimiento (MRO). Acompañamos con disponibilidad,
                soluciones integradas y servicio postventa.
              </p>
              <p className="mt-4">
                Nuestro objetivo es adaptarnos a necesidades exactas, coordinar entregas y brindar soporte con análisis y orden.
              </p>
              <p className="mt-4">
                Ofrecemos líneas de productos relevantes: gabinetes, automatización, cables, distribución, iluminación, herramientas,
                protección personal y más.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Construcción</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Trabajamos con instaladores, contratistas y especialistas. Buscamos mejorar la seguridad y eficiencia de tus proyectos,
                con énfasis en la ecoeficiencia.
              </p>
              <p className="mt-4">
                Con opciones de entrega flexible y servicio al cliente, apoyamos operaciones diarias de forma fluida, con un portafolio
                completo.
              </p>
            </div>
          </div>
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Energía</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Atendemos a empresas de generación y distribución. Recomendamos soluciones que satisfagan necesidades con una atención
                meticulosa.
              </p>
              <p className="mt-4">
                Nuestra oferta incluye interruptores, gabinetes, paneles, transformadores, distribución, cables, protección personal y
                accesorios.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="p-12 md:col-span-8">
            <div className="text-3xl font-light text-zinc-900">Hnoz Fernandez y tú</div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>Creemos que cada cliente es único, esté donde esté y sea cual sea su negocio.</p>
              <p className="mt-4">
                Nuestro objetivo es anticipar y satisfacer necesidades para que puedas realizar tu trabajo de forma rápida y sencilla.
              </p>
              <p className="mt-4">
                Construimos relaciones de largo plazo basadas en el respeto mutuo, creando un círculo virtuoso de mejores soluciones.
              </p>
            </div>
          </div>
          <div className="relative h-[320px] md:col-span-4 md:h-auto">
            <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 bg-zinc-100 p-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="text-3xl font-light text-zinc-900">¿Deseas contactarte con nuestro equipo?</div>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <a
                href="#formulario"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#1E2A7B] px-10 text-sm font-semibold text-white"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>

        <div id="formulario" className="mt-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="border-l-2 border-[#1E2A7B] bg-white pl-8">
                <form className="grid gap-6">
                  <div className="grid gap-3">
                    <label className="text-sm font-medium text-zinc-900">Nombre *</label>
                    <input
                      placeholder="Nombre"
                      className="h-11 w-full rounded-md border border-black/15 bg-white px-4 text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="grid gap-3">
                    <label className="text-sm font-medium text-zinc-900">E-mail *</label>
                    <input
                      placeholder="E-mail"
                      className="h-11 w-full rounded-md border border-black/15 bg-white px-4 text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-3">
                      <label className="text-sm font-medium text-zinc-900">Localidad *</label>
                      <input
                        placeholder="Localidad"
                        className="h-11 w-full rounded-md border border-black/15 bg-white px-4 text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
                      />
                    </div>
                    <div className="grid gap-3">
                      <label className="text-sm font-medium text-zinc-900">Celular *</label>
                      <input
                        placeholder="Celular"
                        className="h-11 w-full rounded-md border border-black/15 bg-white px-4 text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <label className="text-sm font-medium text-zinc-900">Mensaje *</label>
                    <textarea
                      placeholder="Mensaje"
                      rows={5}
                      className="w-full resize-none rounded-md border border-black/15 bg-white px-4 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="grid gap-3 text-xs text-zinc-700">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 size-4 rounded border border-black/20" />
                      <span>
                        Al enviar este formulario,{' '}
                        <a href="#" className="text-sky-600 underline">
                          autorizo el tratamiento de mis datos personales
                        </a>
                      </span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 size-4 rounded border border-black/20" />
                      <span>
                        Al enviar este formulario,{' '}
                        <a href="#" className="text-sky-600 underline">
                          autorizo el tratamiento de mis datos personales para fines adicionales
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="mt-2 flex items-center gap-6">
                    <button
                      type="reset"
                      className="h-10 rounded-full border border-sky-500 bg-white px-8 text-sm font-medium text-sky-700"
                    >
                      Reiniciar
                    </button>
                    <button
                      type="button"
                      disabled
                      className="h-10 cursor-not-allowed rounded-full bg-zinc-200 px-10 text-sm font-medium text-zinc-500"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="overflow-hidden bg-white">
                <div className="relative h-[430px]">
                  <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="grid h-[140px] grid-cols-2">
                  <div className="bg-[#1E2A7B]" />
                  <div className="bg-sky-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
