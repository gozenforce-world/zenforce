"use client";

import { useState } from "react";
import Link from "next/link";

export default function WhereWeWorkCTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "India",
    service: "Web app",
    deadline: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Capture tracking event and simulated submission
    console.log("Form submit payload:", formData);
    setSubmitted(true);
  };

  const cities = [
    { name: "Mumbai", href: "/in/mumbai/" },
    { name: "Bengaluru", href: "/in/bengaluru/" },
    { name: "Pune", href: "/in/pune/" },
    { name: "Delhi NCR", href: "/in/delhi-ncr/" },
    { name: "Hyderabad", href: "/in/hyderabad/" },
    { name: "Chennai", href: "/in/chennai/" },
    { name: "Ahmedabad & GIFT City", href: "/in/ahmedabad/" },
    { name: "Kolkata", href: "/in/kolkata/" },
  ];

  const countries = [
    { name: "United States", href: "/us/" },
    { name: "United Kingdom", href: "/uk/" },
    { name: "UAE (Dubai & Abu Dhabi)", href: "/ae/" },
    { name: "Singapore", href: "/sg/" },
    { name: "Australia", href: "/au/" },
    { name: "Canada", href: "/ca/" },
  ];

  return (
    <section id="quote-form" className="py-16 md:py-24 bg-[#0a0f1c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Where We Work */}
        <div className="mb-16 pb-12 border-b border-slate-800 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Global Delivery · Local Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Security testing for teams across India and abroad
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            We test remotely for clients anywhere and travel on-site when regulatory or air-gapped scope demands it.
          </p>

          <div className="mt-8 space-y-4 text-xs sm:text-sm">
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <span className="text-slate-500 font-mono font-medium">India Hubs:</span>
              {cities.map((city, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <Link href={city.href} className="text-slate-300 hover:text-white transition-colors underline decoration-slate-700">
                    {city.name}
                  </Link>
                  {idx < cities.length - 1 && <span className="text-slate-700">•</span>}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <span className="text-slate-500 font-mono font-medium">International:</span>
              {countries.map((c, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <Link href={c.href} className="text-slate-300 hover:text-white transition-colors underline decoration-slate-700">
                    {c.name}
                  </Link>
                  {idx < countries.length - 1 && <span className="text-slate-700">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Final Conversion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
              Step 1 · 24-Hour Scoping
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Find out how you&apos;d get breached, before someone else does.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tell us what you want tested. We&apos;ll come back within 24 hours with exact scope, realistic timelines, and a firm fixed-price quote.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span>✓</span> NDA sent prior to receiving IP/credential details
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span>✓</span> Direct dialogue with the offensive engineer assigned to you
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span>✓</span> Free fix retest included in all standard packages
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400">Prefer an immediate conversation?</p>
              <Link
                href="/book-consultation/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-1"
              >
                Book a direct 30-minute scoping call on our calendar →
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] rounded-2xl border border-slate-700 shadow-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white">Scoping Request Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Our lead security practitioner will review your assets and respond with a formal scoping questionnaire and fixed quotation within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full bg-[#0a0f1c] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#0a0f1c] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Fintech Ltd"
                        className="w-full bg-[#0a0f1c] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Location / Country</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-[#0a0f1c] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="UAE">UAE</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="Other">Other Global</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">What should we test?</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0a0f1c] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Web app">Web Application Pentest</option>
                        <option value="API">REST / GraphQL API Pentest</option>
                        <option value="Mobile">Mobile Application (iOS / Android)</option>
                        <option value="Network">Internal / External Network</option>
                        <option value="Cloud">AWS / Azure Cloud Security</option>
                        <option value="Compliance readiness">Compliance Readiness (SOC 2 / ISO)</option>
                        <option value="DPDP">DPDP Act Compliance Readiness</option>
                        <option value="Not sure">Not sure yet / Multiple assets</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Target Deadline (Optional)</label>
                      <input
                        type="text"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        placeholder="e.g. Next month, Urgently"
                        className="w-full bg-[#0a0f1c] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-400">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"
                      />
                      <span>
                        I consent to Zenforce storing my details solely for quotation and communication purposes in compliance with the DPDP Act 2023.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-600/30 transition-all active:scale-[0.98] mt-3"
                  >
                    Get my scoped quote in 24 hours
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
