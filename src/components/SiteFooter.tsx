import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-black/10 bg-zinc-100">
      <div className="mx-auto w-full max-w-7xl px-2 sm:px-3">
        <div className="grid items-stretch gap-8 md:grid-cols-12">
          <div className="py-7 md:col-span-4">
            <Image
              src="/logoHnz.png"
              alt="Hnoz Fernandez"
              width={320}
              height={64}
              className="h-12 w-auto"
            />

            <div className="mt-6 flex items-center gap-3 text-zinc-600">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-disabled
                  title="Próximamente"
                  className="pointer-events-none inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white opacity-80"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="py-7 md:col-span-3">
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-zinc-700">
              <div className="grid gap-2">
                <a href="#nosotros" className="hover:text-zinc-950">
                  Sobre Nosotros
                </a>
                <a
                  href="#"
                  aria-disabled
                  className="pointer-events-none opacity-70"
                  title="Próximamente"
                >
                  Programa de Fidelización
                </a>
                <a
                  href="#"
                  aria-disabled
                  className="pointer-events-none opacity-70"
                  title="Próximamente"
                >
                  Sucursales
                </a>
                <a
                  href="#"
                  aria-disabled
                  className="pointer-events-none opacity-70"
                  title="Próximamente"
                >
                  Trabaja con Nosotros
                </a>
              </div>

              <div className="grid gap-2">
                <a href="#categorias" className="hover:text-zinc-950">
                  Qué Hacemos
                </a>
                <a href="#numeros" className="hover:text-zinc-950">
                  Compromisos
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-0 md:col-span-5 md:grid-cols-2 md:self-stretch">
            <div className="flex h-full flex-col justify-between bg-emerald-800 p-7 text-white">
              <div>
                <div className="text-base font-semibold">¿Tienes alguna pregunta?</div>
                <div className="text-base font-semibold">¡Contáctenos!</div>
              </div>
              <a
                href="#"
                aria-disabled
                title="Próximamente"
                className="pointer-events-none mt-6 inline-flex w-fit rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 opacity-95"
              >
                Contáctanos
              </a>
            </div>

            <div className="flex h-full flex-col justify-between bg-[#26328C] p-7 text-white">
              <div>
                <div className="text-base font-semibold">¿Deseas contactarte con</div>
                <div className="text-base font-semibold">nuestro equipo de ventas?</div>
              </div>
              <a
                href="#"
                aria-disabled
                title="Próximamente"
                className="pointer-events-none mt-6 inline-flex w-fit rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#26328C] opacity-95"
              >
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1E2A7B]">
        <div className="mx-auto w-full max-w-7xl px-2 py-4 text-white sm:px-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="grid gap-2 text-[13px] text-white/90">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "Política de Privacidad",
                  "Cláusula de Tratamiento de Datos Personales",
                  "Política de Cookies",
                  "Libro de Reclamaciones",
                  "Condiciones de Venta",
                ].map((t) => (
                  <a
                    key={t}
                    href="#"
                    aria-disabled
                    title="Próximamente"
                    className="pointer-events-none opacity-90"
                  >
                    {t}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "Términos y Condiciones de promociones",
                  "Comprobantes electrónicos",
                ].map((t) => (
                  <a
                    key={t}
                    href="#"
                    aria-disabled
                    title="Próximamente"
                    className="pointer-events-none opacity-90"
                  >
                    {t}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-[13px] text-white/90">© {new Date().getFullYear()} Hnoz Fernandez</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
