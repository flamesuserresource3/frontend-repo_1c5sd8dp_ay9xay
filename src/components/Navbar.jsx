import React from 'react';
import { Shield, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 dark:bg-neutral-900/90 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-red-500 text-white grid place-items-center shadow">
            <Shield className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">CivicSafe</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Public Crisis Companion</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:112"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 text-white px-3 py-2 text-sm hover:bg-red-700 transition-colors"
            aria-label="Call Emergency Services"
          >
            <Phone className="h-4 w-4" /> Emergency
          </a>
          <a
            href="#safe-spaces"
            className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-3 py-2 text-sm hover:bg-neutral-800 transition-colors dark:bg-neutral-800 dark:hover:bg-neutral-700"
            aria-label="Find Safe Spaces"
          >
            <MapPin className="h-4 w-4" /> Safe Spaces
          </a>
        </div>
      </div>
    </header>
  );
}
