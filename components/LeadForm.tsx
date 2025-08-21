'use client'
import { useState } from 'react'

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="rounded-2xl shadow-xl bg-white/95 border p-6">
      <h3 className="text-2xl font-semibold">Request Your Free Quote</h3>
      {!submitted ? (
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
          className="grid gap-4 mt-4"
        >
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Full Name</span>
            <input required className="rounded-xl border px-3 py-2" placeholder="Jane Doe" />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Email</span>
            <input type="email" required className="rounded-xl border px-3 py-2" placeholder="you@example.com" />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Phone</span>
            <input type="tel" className="rounded-xl border px-3 py-2" placeholder="(555) 123-4567" />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Project Type</span>
            <select className="rounded-xl border px-3 py-2">
              <option>Luxury Garden Design</option>
              <option>Eco-Friendly Lawn</option>
              <option>Outdoor Living Space</option>
              <option>Maintenance Plan</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Location</span>
            <input className="rounded-xl border px-3 py-2" placeholder="City / Neighborhood" />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Tell us about your vision</span>
            <textarea className="rounded-xl border px-3 py-2 min-h-[100px]" placeholder="Modern Zen garden with water feature" />
          </label>
          <button className="rounded-2xl py-3 text-base bg-emerald-600 hover:bg-emerald-700 text-white">Claim My Offer</button>
          <p className="text-xs text-emerald-900/60">By submitting, you agree to be contacted about your project. No spam, ever.</p>
        </form>
      ) : (
        <div className="mt-6 text-emerald-800">
          <p className="font-semibold">Thanks! Your request has been received.</p>
          <p className="text-sm">We’ll reach out shortly to schedule your free consultation.</p>
        </div>
      )}
    </div>
  )
}
