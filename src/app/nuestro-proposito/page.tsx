export default function NuestroPropositoPage() {
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
          <span className="text-zinc-900">Nuestro Propósito</span>
        </div>

        <div className="mt-4 overflow-hidden bg-white">
          <div className="grid min-h-[240px] md:grid-cols-12">
            <div className="relative md:col-span-4">
              <div className="absolute inset-0 bg-[#1E2A7B]" />
              <div className="absolute bottom-0 right-0 top-0 w-14 bg-[#D4A80F]" />
              <div className="absolute bottom-0 right-14 top-0 w-20 rounded-l-full bg-[#1E2A7B]" />
              <div className="relative p-8 text-white">
                <div className="text-[40px] font-semibold leading-[1.02]">
                  Powering
                  <br />
                  Progress
                  <br />
                  for Future
                  <br />
                  Generations
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

        <div className="mt-12 grid gap-0 bg-zinc-100 md:grid-cols-12">
          <div className="relative h-[260px] md:col-span-4 md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/3imagen.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-12 md:col-span-8">
            <div className="text-base leading-6 text-zinc-700">
              <p>
                La humanidad se enfrenta a desafíos colectivos cada vez más grandes. Nuestro propósito es una manera de canalizar
                nuestra energía hacia soluciones concretas: calidad, asesoría, disponibilidad y respuesta rápida.
              </p>
              <p className="mt-4">
                En Hnoz Fernandez creemos que el progreso se construye con acciones diarias: atención cercana, alternativas para cada
                presupuesto y acompañamiento en cada compra, desde una cotización simple hasta una entrega coordinada.
              </p>
              <p className="mt-4">
                Este propósito guía cómo trabajamos con nuestros clientes y proveedores, y cómo mejoramos continuamente nuestra forma de
                atender proyectos, mantenimiento e industria.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-0 bg-white md:grid-cols-12">
          <div className="bg-zinc-100 p-12 md:col-span-7">
            <div className="text-[28px] font-light leading-tight text-zinc-900">
              Seis compromisos audaces para concretar nuestro Propósito
            </div>
            <div className="mt-5 text-base leading-6 text-zinc-700">
              <p>
                Para arraigar nuestro propósito en nuestras actividades principales, establecemos compromisos claros que involucran a
                nuestro equipo, clientes y aliados.
              </p>
              <p className="mt-4">
                Son iniciativas medibles orientadas a mejorar experiencia, sostenibilidad, capacitación y responsabilidad con la
                comunidad.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="flex h-full min-h-[200px] items-center justify-center bg-white px-10 py-12">
              <div className="max-w-sm text-left text-5xl font-extrabold leading-[0.95] text-[#1E2A7B]">
                Powering
                <br />
                Progress
                <br />
                for Future
                <br />
                Generations
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Educación Continua",
              text: "Capacitaciones prácticas para instaladores y técnicos: selección de materiales, seguridad y mejores prácticas.",
              line: "bg-[#D4A80F]",
              icon: "/file.svg",
            },
            {
              title: "Viaje Sostenible del Cliente",
              text: "Promovemos alternativas eficientes y orientamos a elegir opciones que reduzcan consumo y mantenimiento.",
              line: "bg-emerald-600",
              icon: "/globe.svg",
            },
            {
              title: "Circularidad del Producto",
              text: "Impulsamos el uso responsable: compatibilidad, equivalencias y recomendaciones para alargar la vida útil.",
              line: "bg-sky-500",
              icon: "/window.svg",
            },
            {
              title: "Equilibrio de Género",
              text: "Fomentamos un entorno inclusivo, con oportunidades y respeto para todas las personas del equipo.",
              line: "bg-[#D4A80F]",
              icon: "/globe.svg",
            },
            {
              title: "Comunidades",
              text: "Apoyamos iniciativas locales y buscamos contribuir con conocimiento y materiales en acciones solidarias.",
              line: "bg-emerald-600",
              icon: "/file.svg",
            },
            {
              title: "Compartir en Familia",
              text: "Reconocemos el valor del trabajo en equipo, la confianza y la mejora constante en la atención.",
              line: "bg-sky-500",
              icon: "/window.svg",
            },
          ].map((it) => (
            <div key={it.title} className="bg-zinc-100">
              <div className="flex h-[240px] items-center justify-center bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.icon} alt="" className="h-32 w-32 opacity-80" />
              </div>
              <div className="p-10">
                <div className="text-xl font-medium text-zinc-900">{it.title}</div>
                <div className="mt-4 text-sm leading-6 text-zinc-700">{it.text}</div>
              </div>
              <div className={`h-1 ${it.line}`} />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-zinc-100">
          <div className="grid gap-0 md:grid-cols-12">
            <div className="relative h-[220px] md:col-span-4 md:h-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/1imagen.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-12 md:col-span-8">
              <div className="text-2xl font-medium text-zinc-900">Comité de Propósito</div>
              <div className="mt-4 text-base leading-6 text-zinc-700">
                Para coordinar las iniciativas de propósito y mantenerlas presentes en nuestras decisiones, establecemos un equipo de
                trabajo interno que revisa avances, escucha a clientes y propone mejoras continuas.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="text-3xl font-light text-zinc-900">Contenido Relacionado</div>
          <div className="mt-6 grid gap-0 md:grid-cols-3">
            <div className="relative overflow-hidden bg-zinc-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/2imagen.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="relative p-10">
                <div className="text-lg font-medium text-zinc-900">La Marca Hnoz</div>
                <div className="mt-3 text-sm leading-6 text-zinc-700">
                  Quiénes somos, cómo trabajamos y qué nos hace diferentes.
                </div>
                <a href="/sobre-nosotros" className="mt-6 inline-block text-sm font-medium text-zinc-900 underline">
                  Conoce más
                </a>
              </div>
            </div>

            <div className="bg-[#1E2A7B] p-10 text-white">
              <div className="text-lg font-medium">Sobre Nosotros</div>
              <div className="mt-3 text-sm leading-6 text-white/85">
                Empresa familiar enfocada en ferretería eléctrica e industrial, con atención cercana y asesoría técnica.
              </div>
              <a href="/sobre-nosotros" className="mt-6 inline-block text-sm font-medium text-white underline">
                Conoce más
              </a>
            </div>

            <div className="relative overflow-hidden bg-zinc-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/1imagen.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="relative p-10">
                <div className="text-lg font-medium text-zinc-900">Compromisos</div>
                <div className="mt-3 text-sm leading-6 text-zinc-700">
                  Estándares de calidad, mejora continua y servicio consistente.
                </div>
                <a href="/nuestro-proposito" className="mt-6 inline-block text-sm font-medium text-zinc-900 underline">
                  Nuestros Compromisos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
