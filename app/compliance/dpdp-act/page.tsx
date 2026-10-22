import Link from "next/link";

export const metadata = {
  title: "DPDP Act Compliance Readiness & Audit Prep | Zenforce",
  description: "Prepare for India's Digital Personal Data Protection Act before May 13, 2027. Consent mapping, breach response, and DPIA.",
};

export default function DpdpPage() {
  return (
    <div className="py-12 bg-[#0a0f1c] min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/60 border border-red-800 text-xs text-red-400 font-mono mb-4">
          Regulatory Deadline: 13 May 2027
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          DPDP Act Compliance for Indian Businesses
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
          The Digital Personal Data Protection Act requires all data fiduciaries to implement reasonable security safeguards. Penalties reach up to ₹250 crore per breach.
        </p>

        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 mb-8 space-y-4">
          <h2 className="text-xl font-bold text-white font-heading">What Zenforce Delivers:</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">✓ Personal data flow and PII inventory mapping</li>
            <li className="flex items-center gap-2">✓ Notice and consent management architecture review</li>
            <li className="flex items-center gap-2">✓ Mandatory 6-hour CERT-In / DPDP breach notification playbooks</li>
            <li className="flex items-center gap-2">✓ Technical VAPT on all customer-facing forms and API endpoints</li>
          </ul>
        </div>

        <Link
          href="/get-a-quote/"
          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Book a DPDP Readiness Review →
        </Link>
      </div>
    </div>
  );
}
