export default function LaMarcaHnozFernandezPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-3">
        <div className="text-sm text-zinc-500">
          <a href="/" className="hover:text-zinc-900">
            Home
          </a>
          <span className="px-2">›</span>
          <a href="/sobre-nosotros" className="hover:text-zinc-900">
            Sobre Nosotros
          </a>
          <span className="px-2">›</span>
          <span className="text-zinc-900">La Marca Hnoz Fernandez</span>
        </div>

        <div className="mt-4 overflow-hidden bg-white">
          <div className="grid min-h-[240px] md:grid-cols-12">
            <div className="relative md:col-span-4">
              <div className="absolute inset-0 bg-[#1E2A7B]" />
              <div className="absolute bottom-0 right-0 top-0 w-14 bg-[#D4A80F]" />
              <div className="absolute bottom-0 right-14 top-0 w-20 rounded-l-full bg-[#1E2A7B]" />
              <div className="relative p-8 text-white">
                <div className="whitespace-pre-line text-4xl font-semibold leading-[1.05]">La Marca\nHnoz Fernandez</div>
              </div>
            </div>

            <div className="relative md:col-span-8">
              <div className="relative h-[240px] md:h-full">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <img
                      src="/2imagen.jpg"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[300px] md:col-span-4 md:h-auto">
            <img src="/4imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-14 md:col-span-8">
            <div className="text-[38px] font-light leading-tight text-zinc-900">¿Quiénes somos?</div>
            <div className="mt-6 text-base leading-6 text-zinc-700">
              <p>
                Somos una empresa peruana enfocada en ferretería eléctrica e industrial, orientada al cliente profesional (instaladores,
                contratistas, mantenimiento e industria).
              </p>
              <p className="mt-4">
                Nuestro trabajo es hacer tu compra más simple: asesoría práctica, alternativas equivalentes, disponibilidad y coordinación
                de recojos o despachos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-zinc-100 p-12 text-[28px] font-light leading-tight text-zinc-900">Nuestra Misión</div>
          </div>
          <div className="md:col-span-8">
            <div className="text-base leading-6 text-zinc-700">
              Hacer la vida de nuestros clientes más fácil, brindando materiales confiables y un servicio ágil: cotizaciones claras,
              orientación técnica y atención cercana.
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-zinc-100 p-12 text-[28px] font-light leading-tight text-zinc-900">Nuestra visión</div>
          </div>
          <div className="md:col-span-8">
            <div className="text-base leading-6 text-zinc-700">
              Ser el aliado preferido en ferretería eléctrica e industrial, reconocido por nuestra disponibilidad, asesoría y capacidad de
              respuesta, apoyando el crecimiento de proyectos y mantenimiento.
            </div>
          </div>
        </div>

        <div className="mt-16 bg-zinc-100">
          <div className="grid gap-0 md:grid-cols-12">
            <div className="p-14 md:col-span-8">
              <div className="text-4xl font-light text-zinc-900">La esencia de nuestra identidad</div>
              <div className="mt-6 text-base leading-6 text-zinc-700">
                <p>
                  Nuestra marca expresa lo que somos y cómo atendemos: cercanía, claridad y soluciones prácticas. Trabajamos para que cada
                  cliente encuentre una alternativa adecuada, con información simple y un acompañamiento real.
                </p>
                <p className="mt-4">
                  El modelo de marca responde a preguntas clave: ¿Quiénes somos? ¿Qué hacemos? ¿Dónde estamos? y ¿Por qué elegirnos?
                </p>
              </div>
            </div>
            <div className="relative h-[340px] md:col-span-4 md:h-auto">
              <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-4xl font-light text-zinc-900">Nuestros valores</div>

          <div className="mt-8 grid gap-10">
            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="p-12 md:col-span-8">
                <div className="text-xl font-medium text-zinc-900">Centrados en el cliente</div>
                <div className="mt-4 text-base leading-6 text-zinc-700">
                  <div>Ofrecemos soluciones prácticas y asesoría para elegir lo correcto.</div>
                  <div className="mt-2">Simplificamos la compra con respuesta rápida y clara.</div>
                  <div className="mt-2">Nos anticipamos con alternativas equivalentes y disponibilidad.</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-orange-500 p-12 md:col-span-4">
                <div className="text-2xl font-semibold tracking-wide text-[#1E2A7B]">CLIENTE</div>
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="flex items-center justify-center bg-emerald-700 p-12 md:col-span-4">
                <div className="text-2xl font-semibold leading-tight tracking-wide text-orange-500">
                  PERSONAS
                  <br />Y PLANETA
                </div>
              </div>
              <div className="p-12 md:col-span-8">
                <div className="text-xl font-medium text-zinc-900">Comprometidos con las Personas y el Planeta</div>
                <div className="mt-4 text-base leading-6 text-zinc-700">
                  <div>Promovemos un entorno de trabajo respetuoso y colaborativo.</div>
                  <div className="mt-2">Trabajamos con prácticas responsables y mejora continua.</div>
                  <div className="mt-2">Impulsamos decisiones conscientes en productos y servicio.</div>
                </div>
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="p-12 md:col-span-8">
                <div className="text-xl font-medium text-zinc-900">Lideramos con el ejemplo</div>
                <div className="mt-4 text-base leading-6 text-zinc-700">
                  <div>Hacemos lo correcto: transparencia, orden y responsabilidad.</div>
                  <div className="mt-2">Cuidamos el cumplimiento y la calidad en cada proceso.</div>
                  <div className="mt-2">Escuchamos al cliente y mejoramos con aprendizaje constante.</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-sky-600 p-12 md:col-span-4">
                <div className="text-2xl font-semibold tracking-wide text-[#1E2A7B]">LIDERAZGO</div>
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="flex items-center justify-center bg-[#5B3A7A] p-12 md:col-span-4">
                <div className="text-2xl font-semibold tracking-wide text-[#D4A80F]">ATREVERSE</div>
              </div>
              <div className="p-12 md:col-span-8">
                <div className="text-xl font-medium text-zinc-900">La voluntad de atreverse</div>
                <div className="mt-4 text-base leading-6 text-zinc-700">
                  <div>Buscamos soluciones y alternativas ante cada desafío.</div>
                  <div className="mt-2">Mejoramos nuestra atención incorporando nuevas herramientas.</div>
                  <div className="mt-2">Preguntamos, probamos y aprendemos para servir mejor.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-4xl font-light text-zinc-900">Nuestros Compromisos</div>

          <div className="mt-8 grid gap-10">
            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="p-12 md:col-span-8">
                <div className="text-2xl font-medium text-zinc-900">Calidad</div>
                <div className="mt-4 text-base leading-6 text-zinc-700">
                  Garantizamos un catálogo confiable, cuidando especificaciones y recomendaciones para que el cliente lleve el producto
                  correcto, con soporte de postventa cuando se requiere.
                </div>
              </div>
              <div className="relative h-[280px] md:col-span-4 md:h-auto">
                <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="relative h-[280px] md:col-span-4 md:h-auto">
                <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-12 md:col-span-8">
                <div className="text-2xl font-medium text-zinc-900">Gestión Medioambiental</div>
                <div className="mt-4 text-base leading-6 text-zinc-700">
                  Buscamos prácticas responsables en nuestras operaciones: orden, reducción de desperdicios y elección de alternativas que
                  favorezcan eficiencia y durabilidad.
                </div>
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="p-12 md:col-span-8">
                <div className="text-2xl font-medium text-zinc-900">Protección de Datos</div>
                <div className="mt-4 text-base leading-6 text-zinc-700">
                  Cuidamos la información de clientes y proveedores, con buenas prácticas de registro y atención, priorizando la
                  confidencialidad.
                </div>
              </div>
              <div className="relative h-[280px] md:col-span-4 md:h-auto">
                <img src="/4imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="relative h-[280px] md:col-span-4 md:h-auto">
                <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-12 md:col-span-8">
                <div className="text-2xl font-medium text-zinc-900">Prevención de Riesgos Laborales</div>
                <div className="mt-4 text-base leading-6 text-zinc-700">
                  Promovemos seguridad en nuestras actividades, orden en almacén y atención responsable, cuidando a nuestro equipo y a
                  quienes nos visitan.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-4xl font-light text-zinc-900">Políticas del Sistema de Gestión de la Calidad</div>

          <div className="mt-8 grid gap-10">
            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="p-12 md:col-span-8">
                <div className="text-base leading-6 text-zinc-700">
                  Facilitar el proceso de adquisición de productos eléctricos satisfaciendo las necesidades y expectativas de los clientes
                  de manera oportuna.
                </div>
              </div>
              <div className="relative h-[280px] md:col-span-4 md:h-auto">
                <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="relative h-[280px] md:col-span-4 md:h-auto">
                <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-12 md:col-span-8">
                <div className="text-base leading-6 text-zinc-700">
                  Mejorar continuamente el desempeño de nuestros procesos, promoviendo la mejora continua como principio fundamental
                  aplicable a los procesos clave de la organización.
                </div>
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="p-12 md:col-span-8">
                <div className="text-base leading-6 text-zinc-700">
                  Fundamentar el sistema de gestión en la prevención de no conformidades como un medio que proporcione a los clientes,
                  productos y servicios de calidad.
                </div>
              </div>
              <div className="relative h-[280px] md:col-span-4 md:h-auto">
                <img src="/4imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-4xl font-light text-zinc-900">Nuestras Prioridades Estratégicas</div>

          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="bg-zinc-100 p-12 text-[28px] font-light leading-tight text-zinc-900">Desarrollo Sostenible</div>
            </div>
            <div className="md:col-span-8">
              <div className="text-base leading-6 text-zinc-700">
                El compromiso de Hnoz Fernandez con el progreso se materializa en prácticas responsables: eficiencia, orden, alternativas
                durables y una atención que reduce retrabajos.
                <div className="mt-4">
                  “Blue”: representa nuestro enfoque de confianza y claridad. “Way”: encarna el deseo de mejorar y marcar un camino a
                  seguir.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-0 border border-black/5 bg-white md:grid-cols-12">
            <div className="p-12 md:col-span-8">
              <div className="text-[28px] font-light leading-tight text-zinc-900">Principios</div>
              <div className="mt-5 text-base leading-6 text-zinc-700">
                <p>
                  Promovemos un comportamiento responsable en consumo de energía, consumibles y recursos, cuidando la eficiencia en cada
                  proceso de atención.
                </p>
                <p className="mt-4">
                  Identificamos alternativas que ayuden a mejorar la vida útil de instalaciones, optimizar costos y reducir desperdicios.
                </p>
                <p className="mt-4">
                  Fomentamos el diálogo transparente con clientes y proveedores para potenciar soluciones responsables.
                </p>
              </div>
            </div>
            <div className="relative h-[320px] md:col-span-4 md:h-auto">
              <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-4xl font-light text-zinc-900">Certificaciones</div>

          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="bg-zinc-100 p-12 text-[28px] font-light leading-tight text-zinc-900">
                Hnoz Fernandez Camino a la Excelencia Operacional
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="text-base leading-6 text-zinc-700">
                Buscamos estandarizar y mejorar continuamente nuestras operaciones, con procesos claros y enfoque en la satisfacción del
                cliente.
                <div className="mt-4">
                  Nuestro objetivo es medir resultados, corregir y mejorar: disponibilidad, tiempos de respuesta, orden y calidad del
                  servicio.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-0 border border-black/5 bg-white md:grid-cols-12">
            <div className="relative h-[280px] md:col-span-4 md:h-auto">
              <img src="/2imagen.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-12 md:col-span-8">
              <div className="text-base leading-6 text-zinc-700">
                Como en toda organización que crece, asumimos el compromiso de ser mejores: buscamos oportunidades para mejorar nuestras
                operaciones, seguimiento y atención al cliente.
                <div className="mt-4">
                  Afianzamos nuestro compromiso con la calidad, explorando nuevas herramientas y procesos en beneficio de nuestros
                  clientes.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-4xl font-light text-zinc-900">Responsabilidad Social</div>

          <div className="mt-8 grid gap-10">
            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="relative h-[320px] md:col-span-4 md:h-auto">
                <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-12 md:col-span-8">
                <div className="text-base leading-6 text-zinc-700">
                  Impulsamos acciones de apoyo a la comunidad, colaborando con iniciativas locales y aportando conocimiento, materiales o
                  coordinación cuando se requiere.
                  <div className="mt-4">
                    Creemos que la responsabilidad social empieza por el servicio: escuchar, orientar y actuar con respeto.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-0 border border-black/5 bg-white md:grid-cols-12">
              <div className="p-12 md:col-span-8">
                <div className="text-base leading-6 text-zinc-700">
                  Nuestros equipos participan en actividades de voluntariado cuando se presentan oportunidades, reforzando la cultura de
                  colaboración y compromiso.
                  <div className="mt-4">
                    Cada acción suma: apoyo a familias, coordinación logística y acompañamiento para mejorar condiciones y seguridad.
                  </div>
                </div>
              </div>
              <div className="relative h-[320px] md:col-span-4 md:h-auto">
                <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
