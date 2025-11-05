import React from 'react';
import Navbar from './components/Navbar.jsx';
import EmergencyActions from './components/EmergencyActions.jsx';
import AlertsFeed from './components/AlertsFeed.jsx';
import ReportIncident from './components/ReportIncident.jsx';
import SafetyTips from './components/SafetyTips.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Stay informed. Act fast. Stay safe.
                </h1>
                <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-prose">
                  CivicSafe delivers timely alerts, practical guidance, and a simple way to report incidents during emergencies.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Quick Status
                </p>
                <div className="mt-3 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-lg p-3 bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900">
                    <p className="text-xs">Safe Shelters</p>
                    <p className="text-lg font-semibold">12</p>
                  </div>
                  <div className="rounded-lg p-3 bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900">
                    <p className="text-xs">Active Alerts</p>
                    <p className="text-lg font-semibold">3</p>
                  </div>
                  <div className="rounded-lg p-3 bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900">
                    <p className="text-xs">Updates Today</p>
                    <p className="text-lg font-semibold">14</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <EmergencyActions />
        </section>

        <AlertsFeed />
        <ReportIncident />
        <SafetyTips />
      </main>

      <footer className="mt-10 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} CivicSafe — For public awareness and assistance. Always follow official guidance.
        </div>
      </footer>
    </div>
  );
}

export default App;
