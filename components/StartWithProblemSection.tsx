import Link from "next/link";

export default function StartWithProblemSection() {
  const problems = [
    {
      problem: "A big client sent us a 200-question security questionnaire.",
      service: "Gap Assessment + Pentest + Policy Pack",
      walkaway: "Answers backed by technical proof and an attestation letter you can attach.",
      timeline: "3–5 days",
      href: "/solutions/enterprise-security-questionnaires/",
      tag: "Urgent Deal Closer",
    },
    {
      problem: "We launch the app next month.",
      service: "Web, API & Mobile Penetration Testing",
      walkaway: "Findings ranked by business risk, direct developer fix support, free retest.",
      timeline: "5–7 working days",
      href: "/cybersecurity/penetration-testing/",
      tag: "Pre-Release",
    },
    {
      problem: "Our US buyer wants SOC 2.",
      service: "SOC 2 Readiness + Auditor Partner Prep",
      walkaway: "Control gaps closed, policies drafted, evidence folder ready for CPA sign-off.",
      timeline: "4–6 weeks",
      href: "/compliance/soc-2/",
      tag: "US Expansion",
    },
    {
      problem: "RBI / SEBI / IRDAI cyber audit is due.",
      service: "Regulatory VAPT & Audit Support",
      walkaway: "Report formatted strictly to regulator circulars with closure tracking.",
      timeline: "2–3 weeks",
      href: "/compliance/sebi-cscrf/",
      tag: "Mandatory Compliance",
    },
    {
      problem: "DPDP enforcement is coming and we don't know where our data is.",
      service: "DPDP Readiness & Privacy Engineering",
      walkaway: "Full data map, consent notices review, and incident reporting playbook.",
      timeline: "3–4 weeks",
      href: "/compliance/dpdp-act/",
      tag: "Deadline: May 2027",
    },
    {
      problem: "We don't have a security person at all.",
      service: "Virtual CISO (Fractional Security Lead)",
      walkaway: "A named practitioner owning your roadmap, customer reviews, and security posture.",
      timeline: "Monthly Retainer",
      href: "/cybersecurity/virtual-ciso/",
      tag: "Strategic Leadership",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0f1c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Problem-to-Service Mapping
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            Start with your problem. We&apos;ll name the service.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            You don&apos;t need to decode security jargon. Tell us what trigger you&apos;re facing.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 inline-block mb-3">
                  {item.tag}
                </span>
                <p className="text-base font-bold text-white mb-4 italic font-serif">
                  &ldquo;{item.problem}&rdquo;
                </p>
                <div className="mb-4">
                  <span className="text-xs text-blue-400 font-semibold block mb-1">What we do:</span>
                  <p className="text-sm font-semibold text-slate-200">{item.service}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-1">What you walk away with:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.walkaway}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Timeline: {item.timeline}</span>
                <Link
                  href={item.href}
                  className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
