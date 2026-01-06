"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, ShoppingCart, Newspaper, Search, ChevronRight } from "lucide-react";
import { ScrollProgress } from "@/components/ScrollProgress";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros", hasChildren: true as const },
  { label: "Qué Hacemos", href: "/que-hacemos/productos", hasChildren: true as const },
  { label: "Sucursales", href: "/#presencia" },
  { label: "Compromisos", href: "/nuestro-proposito", hasChildren: true as const },
  { label: "Contacto", href: "/#footer" },
];

const subMenus = {
  about: {
    title: "Sobre Nosotros",
    items: [
      { label: "Sobre Nosotros", href: "/sobre-nosotros" },
      { label: "Nuestro Propósito", href: "/nuestro-proposito" },
      { label: "La Marca Hnoz Fernandez", href: "/sobre-nosotros/la-marca-hnoz-fernandez" },
      { label: "Transformación Digital", href: "/transformacion-digital" },
    ],
  },
  what: {
    title: "Qué Hacemos",
    items: [
      { label: "Qué Hacemos", href: "/que-hacemos/productos" },
      { label: "Servicio al Cliente", href: "/que-hacemos/servicio-al-cliente" },
      { label: "Partners", href: "/que-hacemos/partners" },
      { label: "Productos", href: "/que-hacemos/productos" },
      { label: "Soluciones", href: "/que-hacemos/soluciones" },
    ],
  },
  commitments: {
    title: "Compromisos",
    items: [
      { label: "Nuestro Propósito", href: "/nuestro-proposito" },
      { label: "Cumplimiento e Integridad", href: "/compromisos/cumplimiento-e-integridad" },
      { label: "Diversidad e Inclusión", href: "/compromisos/diversidad-e-inclusion" },
      { label: "Sostenibilidad", href: "/compromisos/sostenibilidad" },
    ],
  },
} as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"root" | "about" | "what" | "commitments">(
    "root",
  );

  const menuId = useMemo(
    () => `mobile-menu-${Math.random().toString(16).slice(2)}`,
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setActiveMenu("root");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-2 sm:px-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-16 w-14 items-center justify-center rounded-none bg-zinc-100 text-zinc-700 transition hover:bg-zinc-200"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-controls={menuId}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-7" />}
          </button>
          <Link href="#inicio" className="flex items-center gap-2">
            <Image
              src="/logoHnz.png"
              alt="Hnoz Fernandez"
              width={320}
              height={64}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-0">
          <div className="flex items-center md:hidden">
            <a
              href="/#noticias"
              className="inline-flex h-16 w-14 items-center justify-center rounded-none bg-sky-600 text-white transition hover:bg-sky-500 active:scale-[0.98]"
              aria-label="Noticias"
            >
              <Newspaper className="size-5" />
            </a>
            <a
              href="https://catalog-mauve-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 w-14 items-center justify-center rounded-none bg-orange-500 text-white transition hover:opacity-95 active:scale-[0.98]"
              aria-label="Tienda Online"
            >
              <ShoppingCart className="size-5" />
            </a>
          </div>

          <a
            href="/#noticias"
            className="hidden h-16 items-center gap-2 rounded-none bg-sky-600 px-4 text-base font-semibold text-white transition hover:bg-sky-500 active:scale-[0.98] md:inline-flex"
          >
            <Newspaper className="size-4" />
            Noticias
          </a>
          <a
            href="https://catalog-mauve-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-16 items-center gap-2 rounded-none bg-orange-500 px-4 text-base font-semibold text-white transition hover:opacity-95 active:scale-[0.98] md:inline-flex"
          >
            <ShoppingCart className="size-4" />
            Tienda Online
          </a>
        </div>
      </div>

      <div className="relative">
        <ScrollProgress />
      </div>

      {open ? (
        <div>
          <div
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-zinc-700/70"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            className="fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-full overflow-y-auto bg-white shadow-xl sm:left-[max(0px,calc((100vw-80rem)/2+0.5rem))] sm:w-[420px] sm:max-w-sm"
          >
            {activeMenu === "root" ? (
              <>
                <div className="px-4 py-3">
                  <div className="relative">
                    <Search className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
                    <button
                      type="button"
                      aria-label="Limpiar"
                      className="pointer-events-none absolute right-10 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 opacity-0"
                    >
                      <X className="size-3.5" />
                    </button>
                    <input
                      placeholder="Buscar"
                      className="h-10 w-full rounded-sm border border-black/20 bg-white px-3 pr-16 text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div className="grid gap-1 px-0">
                  {navItems.map((item) => {
                    if (item.hasChildren) {
                      const nextMenu =
                        item.label === "Sobre Nosotros"
                          ? "about"
                          : item.label === "Qué Hacemos"
                            ? "what"
                            : "commitments";

                      return (
                        <button
                          key={item.label}
                          type="button"
                          className="flex w-full items-center justify-between px-5 py-3 text-left text-base font-medium text-zinc-900 transition hover:bg-zinc-100"
                          onClick={() => setActiveMenu(nextMenu)}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="size-4 text-zinc-400" />
                        </button>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between px-5 py-3 text-base font-medium text-zinc-900 transition hover:bg-zinc-100"
                        onClick={() => setOpen(false)}
                      >
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="px-2 py-3">
                <button
                  type="button"
                  className="mb-2 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
                  onClick={() => setActiveMenu("root")}
                >
                  <span className="text-xl leading-none">‹</span>
                  Volver
                </button>

                <div className="px-3 py-2 text-base font-semibold text-zinc-950">
                  {activeMenu === "about"
                    ? subMenus.about.title
                    : activeMenu === "what"
                      ? subMenus.what.title
                      : subMenus.commitments.title}
                </div>

                <div className="mt-1 grid gap-1">
                  {(activeMenu === "about"
                    ? subMenus.about.items
                    : activeMenu === "what"
                      ? subMenus.what.items
                      : subMenus.commitments.items
                  ).map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="px-5 py-3 text-base text-zinc-900 transition hover:bg-zinc-100"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
