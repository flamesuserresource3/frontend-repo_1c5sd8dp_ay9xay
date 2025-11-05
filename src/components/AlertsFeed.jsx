import React, { useMemo, useState } from 'react';
import { Megaphone, AlertTriangle } from 'lucide-react';

const SAMPLE_ALERTS = [
  {
    id: 'a1',
    level: 'Severe',
    title: 'Flash Flood Warning',
    body: 'Move to higher ground immediately. Avoid low-lying areas and underpasses.',
    area: 'Riverside & Downtown',
    time: '5 mins ago',
    tag: 'Weather',
  },
  {
    id: 'a2',
    level: 'Moderate',
    title: 'Power Outage Update',
    body: 'Utility teams are working to restore power. Estimated time: 2 hours.',
    area: 'North District',
    time: '18 mins ago',
    tag: 'Infrastructure',
  },
  {
    id: 'a3',
    level: 'Information',
    title: 'Boil Water Advisory',
    body: 'Boil water for at least 1 minute before drinking or cooking until further notice.',
    area: 'East Side',
    time: '1 hour ago',
    tag: 'Health',
  },
];

const levelStyles = {
  Severe: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900',
  Moderate: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900',
  Information: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900',
};

export default function AlertsFeed() {
  const [filter, setFilter] = useState('All');
  const alerts = useMemo(() => {
    if (filter === 'All') return SAMPLE_ALERTS;
    return SAMPLE_ALERTS.filter((a) => a.level === filter);
  }, [filter]);

  return (
    <section className="max-w-6xl mx-auto px-4 pt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-lg bg-neutral-900 dark:bg-neutral-800 text-white grid place-items-center">
            <Megaphone className="h-5 w-5" />
          </span>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Live Alerts</h2>
        </div>
        <div className="flex items-center gap-2">
          {['All', 'Severe', 'Moderate', 'Information'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setFilter(lvl)}
              className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
                filter === lvl
                  ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-800 dark:border-neutral-700'
                  : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {alerts.map((a) => (
          <article
            key={a.id}
            className={`rounded-xl border ${levelStyles[a.level]} p-4`}
            aria-live={a.level === 'Severe' ? 'assertive' : 'polite'}
          >
            <div className="flex items-start gap-3">
              <span className="h-9 w-9 rounded-lg bg-white/70 dark:bg-black/20 border border-current grid place-items-center">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{a.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-current/30">{a.level}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-current/30">{a.tag}</span>
                </div>
                <p className="text-sm mt-1 opacity-90">{a.body}</p>
                <div className="text-xs mt-2 opacity-70 flex items-center gap-3">
                  <span>{a.area}</span>
                  <span>•</span>
                  <span>{a.time}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
