"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <button
      type="button"
      title="Próximamente"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500 sm:bottom-5 sm:right-5 sm:px-4 sm:py-3"
    >
      <MessageCircle className="size-4" />
      WhatsApp
    </button>
  );
}
