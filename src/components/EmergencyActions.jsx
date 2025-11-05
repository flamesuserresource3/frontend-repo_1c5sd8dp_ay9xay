import React from 'react';
import { Phone, AlertTriangle, MapPin } from 'lucide-react';

export default function EmergencyActions() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href="tel:112"
          className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-lg bg-red-600 text-white grid place-items-center">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="font-medium text-neutral-900 dark:text-neutral-100">Call Emergency</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Connect with local services</p>
            </div>
          </div>
        </a>
        <a
          href="#report"
          className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-lg bg-amber-500 text-white grid place-items-center">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <p className="font-medium text-neutral-900 dark:text-neutral-100">Report Incident</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Share details to alert others</p>
            </div>
          </div>
        </a>
        <a
          href="#safe-spaces"
          className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-lg bg-emerald-600 text-white grid place-items-center">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-medium text-neutral-900 dark:text-neutral-100">Find Safe Spaces</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Locate nearby shelters</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
