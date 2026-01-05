"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <button
      type="button"
      title="Próximamente"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
    >
      <MessageCircle className="size-4" />
      WhatsApp
    </button>
  );
}
