import Link from "next/link";

export default function ImageStoryStripSection() {
  const panels = [
    {
      num: "01",
      timing: "Monday, 11:40 am",
      title: "The Silent Deployment",
      desc: "A developer ships /api/v2/claims/{id}. It verifies you are logged in, but never checks whose claim it actually is.",
      border: "border-slate-800",
      accent: "text-blue-400",
    },
    {
      num: "02",
      timing: "Three weeks later",
      title: "The Manual Curiosity",
      desc: "Someone logged in as an ordinary user changes 100482 to 100483. They instantly view a complete stranger's medical diagnosis.",
      border: "border-amber-900/60",
      accent: "text-amber-400",
    },
    {
      num: "03",
      timing: "That night",
      title: "The 20-Line Python Script",
      desc: "A simple script loops through claim IDs from 1 to 3 crore. The API merrily responds with data on every single request.",
      border: "border-red-900/60",
      accent: "text-red-400",
    },
    {
      num: "04",
      timing: "Ten days later",
      title: "The Telegram Dump",
      desc: "Your entire customer records database turns up for sale on an open Telegram channel. A journalist emails your CEO for comment.",
      border: "border-red-800",
      accent: "text-red-300",
    },
    {
      num: "05",
      timing: "The next quarter",
      title: "The Penalty & Churn",
      desc: "CERT-In 6-hour inquiry, DPDP breach notice to every customer, emergency board meetings, legal expenses, and customer churn.",
      border: "border-red-700",
      accent: "text-red-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
            Format C · Anatomy of an Incident
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            How a single API bug turns into a front-page breach
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A real-world breakdown of how authorization flaws cascade when not caught by manual testing.
          </p>
        </div>

        {/* 5-Panel Story Strip */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {panels.map((panel, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl bg-slate-900/80 border ${panel.border} flex flex-col justify-between relative group hover:border-slate-600 transition-colors`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className={`font-bold ${panel.accent}`}>{panel.num}</span>
                  <span className="text-slate-400 text-[11px]">{panel.timing}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 font-heading">{panel.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {panel.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
                Step {idx + 1} of 5
              </div>
            </div>
          ))}
        </div>

        {/* Callout & Note under strip */}
        <div className="mt-8 p-5 rounded-xl bg-blue-950/30 border border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-200">
            <strong className="text-blue-400">We stop this at panel 2:</strong> In an API penetration test, swapping object IDs between two authenticated test accounts is one of the very first things we try on every endpoint.
          </p>
          <Link
            href="/cybersecurity/penetration-testing/api/"
            className="text-xs font-semibold whitespace-nowrap bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Explore API penetration testing →
          </Link>
        </div>

        <p className="text-[11px] text-slate-400 mt-3 font-mono">
          * Illustrative scenario showing a common bug class (BOLA/IDOR). It does not describe any specific company&apos;s incident.
        </p>
      </div>
    </section>
  );
}
