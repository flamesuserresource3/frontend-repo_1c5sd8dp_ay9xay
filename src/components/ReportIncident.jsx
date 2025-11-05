import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ReportIncident() {
  const [form, setForm] = useState({ type: 'General', location: '', details: '', contact: '' });
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setForm({ type: 'General', location: '', details: '', contact: '' });
      setTimeout(() => setStatus(null), 2500);
    }, 800);
  };

  return (
    <section id="report" className="max-w-6xl mx-auto px-4 pt-10">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-9 w-9 rounded-lg bg-neutral-900 dark:bg-neutral-800 text-white grid place-items-center">
            <Send className="h-5 w-5" />
          </span>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Report an Incident</h2>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-neutral-600 dark:text-neutral-400 mb-1" htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={onChange}
              className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
              required
            >
              <option>General</option>
              <option>Medical</option>
              <option>Fire</option>
              <option>Security</option>
              <option>Weather</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-neutral-600 dark:text-neutral-400 mb-1" htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              value={form.location}
              onChange={onChange}
              placeholder="e.g., 5th & Main, Community Center"
              className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-neutral-600 dark:text-neutral-400 mb-1" htmlFor="details">Details</label>
            <textarea
              id="details"
              name="details"
              value={form.details}
              onChange={onChange}
              rows={4}
              placeholder="Describe what happened, number of people affected, hazards, etc."
              className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-neutral-600 dark:text-neutral-400 mb-1" htmlFor="contact">Contact (optional)</label>
            <input
              id="contact"
              name="contact"
              value={form.contact}
              onChange={onChange}
              placeholder="Phone or email for follow-up"
              className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
            />
          </div>

          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Only share accurate, verified information. Misuse may be reported.</p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition-colors disabled:opacity-60 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <Send className="h-4 w-4" />
              {status === 'submitting' ? 'Sending...' : 'Submit Report'}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <div className="mt-4 text-sm rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 p-3 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900">
            Thank you. Your report has been noted.
          </div>
        )}
      </div>
    </section>
  );
}
