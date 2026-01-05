import { MotionSection } from "@/components/MotionSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main id="inicio" className="bg-white">
      <MotionSection className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-2 py-16 sm:px-3 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <div className="relative aspect-[16/9] bg-zinc-200">
                  <HeroCarousel />

                  <div className="absolute inset-x-6 bottom-6 max-w-xl rounded-xl bg-white/80 p-7 backdrop-blur-sm">
                    <div className="text-2xl font-semibold text-zinc-950">
                      Bienvenido a Hnoz Fernandez, tu distribuidor de materiales
                      eléctricos
                    </div>
                    <div className="mt-3 text-base leading-7 text-zinc-700">
                      Distribución de materiales eléctricos y ferretería
                      industrial, con atención rápida y apoyo para proyectos.
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href="#nosotros"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-[#1E2A7B] px-7 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
                      >
                        Nosotros
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="h-full overflow-hidden rounded-2xl border border-black/10 shadow-sm">
                <div className="flex h-full flex-col">
                  <div className="flex-1 bg-[#5B3A7A] p-8 text-white">
                    <div className="text-xl font-semibold">Cifras Clave 2026</div>
                    <div className="mt-3 text-base leading-7 text-white/90">
                      Distribución B2B de materiales eléctricos. Bloque
                      referencial para tus números.
                    </div>
                    <a
                      href="#numeros"
                      className="mt-5 inline-flex text-base font-semibold text-white underline underline-offset-4"
                    >
                      Conoce más
                    </a>
                  </div>

                  <div className="flex-1 bg-[#D4A80F] p-8 text-zinc-950">
                    <div className="text-xl font-semibold">Compromisos Audaces</div>
                    <div className="mt-3 text-base leading-7 text-zinc-900">
                      Calidad, asesoría técnica y respuesta rápida.
                    </div>
                    <a
                      href="#nosotros"
                      className="mt-5 inline-flex text-base font-semibold text-zinc-950 underline underline-offset-4"
                    >
                      Ir a Nuestro Propósito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="presencia"
        className="mx-auto w-full max-w-7xl px-2 py-14 sm:px-3"
        delay={0.05}
      >
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-zinc-100 px-10 py-10">
              <h2 className="text-3xl font-medium tracking-tight text-zinc-950">
                Presencia de Hnoz Fernandez
              </h2>
              <div className="mt-2 text-base text-zinc-600">En Perú</div>
            </div>
          </div>

          <div className="md:col-span-8">
            <p className="text-base leading-8 text-zinc-700">
              Distribuidor B2B de materiales eléctricos y ferretería industrial,
              trabajando día a día para atender proyectos, mantenimiento e
              instalaciones.
            </p>
            <p className="mt-6 text-base leading-8 text-zinc-700">
              En Perú, brindamos una gama de productos combinados con asesoría y
              atención orientada al cliente.
            </p>
          </div>
        </div>
      </MotionSection>

      <div className="mx-auto w-full max-w-7xl px-2 sm:px-3">
        <div className="h-1 w-full bg-emerald-700" />
      </div>

      <MotionSection
        id="categorias"
        className="mx-auto w-full max-w-7xl px-2 py-14 sm:px-3"
        delay={0.05}
      >
        <div className="overflow-hidden rounded-none bg-emerald-800">
          <div className="px-10 py-10 text-white">
            <div className="text-2xl font-semibold">
              Bienvenido a Hnoz Fernandez, tu distribuidor líder en materiales
              eléctricos
            </div>
            <div className="mt-4 max-w-5xl text-base leading-8 text-white/90">
              En Hnoz Fernandez, nos enorgullecemos de atender proyectos con una
              amplia gama de materiales eléctricos y ferretería industrial.
            </div>
            <div className="mt-6 max-w-5xl text-base leading-8 text-white/90">
              Nuestro compromiso es brindarte soluciones y un servicio al cliente
              enfocado en rapidez y confianza.
            </div>
          </div>

          <div className="grid bg-white md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/1imagen.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="bg-emerald-800 p-10 text-white">
                <div className="text-2xl font-semibold">Quiénes Somos</div>
                <div className="mt-4 text-base leading-8 text-white/90">
                  Empresa enfocada en distribución B2B de materiales eléctricos y
                  soluciones complementarias para obra y mantenimiento.
                </div>
                <a
                  href="#nosotros"
                  className="mt-6 inline-flex text-base font-semibold text-white underline underline-offset-4"
                >
                  Sobre Nosotros
                </a>
              </div>
            </div>

            <div className="relative md:col-span-8 md:min-h-[560px]">
              <div className="relative h-[320px] md:h-full">
                <Image
                  src="/3imagen.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 67vw"
                  className="object-cover"
                />
              </div>

              <div className="bg-sky-600 p-10 text-white md:absolute md:bottom-0 md:right-0 md:w-[55%]">
                <div className="text-2xl font-semibold">Dónde Estamos</div>
                <div className="mt-4 text-base leading-8 text-white/90">
                  Atención para Lima y provincias (referencial). Coordinamos
                  pedidos, recojo y despachos según requerimiento.
                </div>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex text-base font-semibold text-white underline underline-offset-4"
                >
                  Averígualo
                </a>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="numeros"
        className="mx-auto w-full max-w-7xl px-2 py-14 sm:px-3"
        delay={0.05}
      >
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-zinc-950">
            Números Clave
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { value: "S/. 232 MM", label: "Ventas", bg: "bg-[#F4B400]", fg: "text-zinc-950" },
            { value: "21%", label: "Ventas en canal digital", bg: "bg-[#5B3A7A]", fg: "text-white" },
            { value: "+5,600 SKU", label: "en stock local", bg: "bg-[#007A5E]", fg: "text-white" },
            { value: "+180", label: "Colaboradores", bg: "bg-[#00A0DF]", fg: "text-white" },
            { value: "12", label: "Sucursales a nivel nacional", bg: "bg-[#D53A3A]", fg: "text-white" },
            { value: "+11,000", label: "Clientes atendidos", bg: "bg-[#26328C]", fg: "text-white" },
          ].map((k) => (
            <div key={k.label} className={`${k.bg} ${k.fg} px-10 py-9`}>
              <div className="text-4xl font-medium">{k.value}</div>
              <div className={`mt-3 text-base ${k.fg === "text-white" ? "text-white/90" : "text-zinc-900/80"}`}>
                {k.label}
              </div>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection
        id="noticias"
        className="mx-auto w-full max-w-7xl px-2 py-14 sm:px-3"
        delay={0.05}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-950">
            Últimas Noticias
          </h2>
          <a
            href="#"
            aria-disabled
            title="Próximamente"
            className="pointer-events-none hidden rounded-full bg-[#1E2A7B] px-7 py-3 text-base font-semibold text-white opacity-90 md:inline-flex"
          >
            Ver noticias anteriores
          </a>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-4">
          {[
            {
              img: "/1imagen.jpg",
              date: "03.09.2025",
              title: "Hnoz Fernandez amplía stock de materiales eléctricos",
            },
            {
              img: "/2imagen.jpg",
              date: "24.03.2025",
              title: "Nuevas marcas y soluciones para proyectos industriales",
            },
            {
              img: "/3imagen.jpg",
              date: "27.01.2025",
              title: "Consejos de seguridad: instalaciones más confiables",
            },
            {
              img: "/4imagen.jpg",
              date: "22.01.2025",
              title: "Mejoras en atención y despacho a Lima y provincias",
            },
          ].map((p) => (
            <article key={p.title} className="grid gap-4">
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-200">
                <Image
                  src={p.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-zinc-600">{p.date}</div>
              <div className="text-lg font-semibold text-zinc-950">{p.title}</div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection
        id="proposito"
        className="mx-auto w-full max-w-7xl px-2 py-14 sm:px-3"
        delay={0.05}
      >
        <div className="grid bg-white md:min-h-[560px] md:grid-cols-12 md:items-stretch">
          <div className="flex flex-col md:col-span-4">
            <div className="relative aspect-[4/3] md:h-[45%] md:grow-0 md:shrink-0 md:basis-auto md:aspect-auto">
              <Image
                src="/3imagen.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="bg-emerald-800 p-10 text-white md:flex-1">
              <div className="text-2xl font-semibold">Únete a Nosotros</div>
              <div className="mt-4 text-base leading-8 text-white/90">
                En Hnoz Fernandez, crecemos con nuestra gente. Bloque referencial
                para cultura y equipo.
              </div>
              <a
                href="#"
                aria-disabled
                title="Próximamente"
                className="pointer-events-none mt-6 inline-flex text-base font-semibold text-white underline underline-offset-4 opacity-90"
              >
                Trabaja con Nosotros
              </a>
            </div>
          </div>

          <div className="relative md:col-span-8 md:min-h-[560px]">
            <div className="relative h-full">
              <Image
                src="/4imagen.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 67vw"
                className="object-cover"
              />
            </div>
            <div className="bg-sky-600 p-10 text-white md:absolute md:bottom-0 md:right-0 md:w-[55%]">
              <div className="text-2xl font-semibold">Nuestro Propósito</div>
              <div className="mt-4 text-base leading-8 text-white/90">
                Comprometidos con estándares de atención, confianza y respuesta
                para proyectos.
              </div>
              <a
                href="#numeros"
                className="mt-6 inline-flex text-base font-semibold text-white underline underline-offset-4"
              >
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
