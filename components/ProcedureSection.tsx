export default function ProcedureSection() {
  const steps = [
    {
      day: "Day 1",
      title: "Scoping call (30 min)",
      desc: "We clarify your apps, user roles, APIs, and business deadline. You receive a firm fixed quote, not a vague range.",
    },
    {
      day: "Day 2",
      title: "Rules of Engagement Signed",
      desc: "We define testing windows, whitelisted IPs, staging accounts, and an emergency escalation contact line.",
    },
    {
      day: "Days 3–7",
      title: "Deep Manual Testing",
      desc: "Rigorous human testing mapped to OWASP WSTG, OWASP API Top 10, MASVS and PTES. Scanners are used only for baseline breadth.",
    },
    {
      day: "Same-Day Alert",
      title: "Critical Findings Flagged Live",
      desc: "If we breach administrative controls or leak customer PII, you get an immediate phone briefing, not a delayed PDF.",
    },
    {
      day: "Day 8",
      title: "Report & Developer Walkthrough",
      desc: "An executive risk summary for your leadership and reproducible curl/code steps for your engineering team.",
    },
    {
      day: "Days 9–20",
      title: "Direct Fix Support",
      desc: "Your developers can directly Slack/message the testing team while they implement patches and architectural fixes.",
    },
    {
      day: "Day 21",
      title: "Free Retest & Attestation Pack",
      desc: "We re-probe fixed endpoints and issue a formal attestation letter mapped to ISO 27001, SOC 2, or CERT-In standards.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
            Format C · Predictable Delivery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            What happens after you click &ldquo;Get a quote&rdquo;
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            No endless sales ping-pong. A transparent 7-step engineering timeline from scope to attestation.
          </p>
        </div>

        {/* 7-Step Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Dot on timeline */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wide bg-slate-900/90 px-2.5 py-0.5 rounded border border-slate-800 w-fit">
                  {step.day}
                </span>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed mt-1 font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
