import Link from "next/link";

export default function PricingPreviewSection() {
  const packages = [
    {
      name: "Web App or API Pentest",
      priceINR: "₹45,000",
      priceUSD: "$650",
      bestFor: "One application up to 3 user roles and ~25 dynamic endpoints.",
      features: [
        "100% manual testing (WSTG / API Top 10)",
        "Zero automated false positives",
        "Developer fix assistance via Slack",
        "Free retest within 30 days",
        "Executive & technical PDF reports",
      ],
      ctaText: "Scope web or API test",
      popular: false,
    },
    {
      name: "Startup Security Pack",
      priceINR: "₹1,20,000",
      priceUSD: "$1,600",
      bestFor: "Fast-growing companies pitching to enterprise buyers or raising capital.",
      features: [
        "Web App + REST/GraphQL API pentest",
        "AWS / Azure cloud configuration review",
        "Third-party vendor risk assessment",
        "Formal attestation letter for enterprise clients",
        "2 rounds of fix retesting",
      ],
      ctaText: "Get startup package",
      popular: true,
    },
    {
      name: "Compliance Readiness (SOC 2 / ISO)",
      priceINR: "₹1,80,000",
      priceUSD: "$2,400",
      bestFor: "Closing compliance gaps before hiring an accredited CPA or registrar.",
      features: [
        "Comprehensive control gap assessment",
        "Complete policy pack customized to your tech stack",
        "Mandatory pentest evidence included",
        "Internal audit & staff interview prep",
        "Direct introduction to vetted audit partners",
      ],
      ctaText: "Scope compliance prep",
      popular: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
            Format D · Radical Price Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            What a pentest costs, without the sales dance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            We don&apos;t hide behind &ldquo;Contact Sales&rdquo;. Transparent starting baselines with fixed quotes scoped in 24 hours.
          </p>
        </div>

        {/* 3 Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                pkg.popular
                  ? "bg-slate-900 border-2 border-orange-500 shadow-2xl shadow-orange-500/10 scale-100 md:-translate-y-2"
                  : "bg-slate-900/60 border border-slate-800"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] uppercase font-mono font-bold tracking-wider py-1 px-3 rounded-full">
                  Most Popular for SaaS
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-slate-400 mb-6 min-h-[32px]">{pkg.bestFor}</p>

                <div className="mb-6 pb-6 border-b border-slate-800 font-mono">
                  <div className="text-3xl font-extrabold text-white">
                    {pkg.priceINR} <span className="text-sm font-normal text-slate-400">/ {pkg.priceUSD}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">Starting baseline · Fixed scope</span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-slate-300">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/get-a-quote/"
                className={`w-full py-3 rounded-lg text-center text-sm font-semibold transition-all ${
                  pkg.popular
                    ? "bg-orange-600 hover:bg-orange-500 text-white shadow-md shadow-orange-600/30"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                }`}
              >
                {pkg.ctaText}
              </Link>
            </div>
          ))}
        </div>

        {/* Link under cards */}
        <div className="text-center mt-10 text-xs sm:text-sm text-slate-400">
          Final pricing depends strictly on the count of endpoints, user roles, and environment complexity.{" "}
          <Link href="/pricing/" className="text-blue-400 hover:text-blue-300 font-semibold underline ml-1">
            Read our full pricing &amp; cost drivers guide →
          </Link>
        </div>
      </div>
    </section>
  );
}
