import Link from "next/link";

export const metadata = {
  title: "Book a 30-Minute Security Scoping Call | Zenforce",
  description: "Schedule a direct technical scoping consultation with our offensive security leads.",
};

export default function BookConsultationPage() {
  return (
    <div className="py-16 bg-[#0a0f1c] min-h-screen text-slate-200">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
          Direct Scoping Dialogue
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
          Book a 30-Minute Scoping Consultation
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
          Pick a time on our calendar. You will speak directly with an offensive security practitioner who will help define your test scope and compliance requirements.
        </p>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white">What we cover during this call:</h2>
            <p className="text-xs text-slate-400 mt-1">Focused purely on scope and technical feasibility — zero sales fluff.</p>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">1.</span>
              <span>Inventory of assets to be evaluated (web apps, APIs, endpoints, cloud instances).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">2.</span>
              <span>Regulatory and customer drivers (DPDP, ISO 27001, SOC 2, SEBI, client questionnaires).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">3.</span>
              <span>Test windows, environment staging, and delivery timelines.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">4.</span>
              <span>Immediate fixed-scope quotation delivered within 24 hours.</span>
            </li>
          </ul>

          <div className="pt-4">
            <Link
              href="/get-a-quote/"
              className="w-full block text-center bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-lg transition-colors"
            >
              Or fill out the 24-hour scoping form instead →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
