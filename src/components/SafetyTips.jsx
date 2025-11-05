import React from 'react';
import { Shield } from 'lucide-react';

const tips = [
  {
    title: 'Flood Safety',
    points: [
      'Move to higher ground; avoid walking or driving through flood waters.',
      'Disconnect electrical appliances if safe to do so.',
      'Keep emergency kit with water, food, and medications.',
    ],
    color: 'from-sky-500/10 to-blue-500/10',
  },
  {
    title: 'Power Outage',
    points: [
      'Use flashlights instead of candles to reduce fire risk.',
      'Keep fridge and freezer closed to preserve food.',
      'Unplug sensitive electronics to prevent damage.',
    ],
    color: 'from-amber-500/10 to-yellow-500/10',
  },
  {
    title: 'General Preparedness',
    points: [
      'Identify two evacuation routes from your home and workplace.',
      'Share a family emergency plan and meeting point.',
      'Store copies of important documents in a safe location.',
    ],
    color: 'from-emerald-500/10 to-green-500/10',
  },
];

export default function SafetyTips() {
  return (
    <section id="safe-spaces" className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-9 w-9 rounded-lg bg-neutral-900 dark:bg-neutral-800 text-white grid place-items-center">
          <Shield className="h-5 w-5" />
        </span>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Safety Tips & Preparedness</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tips.map((t) => (
          <div
            key={t.title}
            className={`rounded-xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br ${t.color} p-5 backdrop-blur-sm`}
          >
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{t.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc list-inside">
              {t.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
