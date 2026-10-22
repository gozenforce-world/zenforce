export default function AnswerBlock() {
  return (
    <section className="py-10 bg-[#0d1424] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
          <h2 className="text-xs uppercase tracking-widest font-mono font-semibold text-blue-400 mb-2">
            What Zenforce does, in one paragraph
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Zenforce is a cybersecurity and compliance services company. We run manual VAPT and penetration tests on web applications, APIs, mobile apps, networks and cloud, fix-verify the findings with your team, and prepare you for ISO 27001, SOC 2, PCI DSS, CERT-In, RBI, SEBI CSCRF and India&apos;s DPDP Act. We work with startups, SaaS companies and regulated businesses in India and abroad.
          </p>
        </div>
      </div>
    </section>
  );
}
