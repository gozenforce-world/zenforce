import Link from "next/link";

export default function FrameworksDecodedSection() {
  const frameworks = [
    {
      name: "ISO 27001",
      slug: "/compliance/iso-27001/",
      oneLine: "The global security benchmark enterprise and government buyers ask for.",
      who: "B2B SaaS, IT services, enterprise vendors",
      role: "Gap assessment, ISMS build, internal audit, auditor intro",
    },
    {
      name: "SOC 2 (Type 1 & 2)",
      slug: "/compliance/soc-2/",
      oneLine: "The attestation US and Western buyers demand before signing software contracts.",
      who: "SaaS companies exporting to North America",
      role: "Control mapping, evidence collection, pentest, CPA introduction",
    },
    {
      name: "DPDP Act 2023",
      slug: "/compliance/dpdp-act/",
      oneLine: "India's landmark privacy law. Full penalties enforceable 13 May 2027.",
      who: "Any organization processing Indian citizens' data",
      role: "Data flow mapping, consent architecture, breach response",
    },
    {
      name: "CERT-In Directions",
      slug: "/compliance/cert-in/",
      oneLine: "Mandatory 6-hour incident reporting and strict 5-year log retention rules.",
      who: "All Indian companies, data centres, and service providers",
      role: "Log audit, incident playbook, compliance readiness VAPT",
    },
    {
      name: "SEBI CSCRF",
      slug: "/compliance/sebi-cscrf/",
      oneLine: "Cybersecurity framework mandating recurring half-yearly VAPT and closure audits.",
      who: "Stock brokers, AMCs, depositories, mutual funds",
      role: "Regulator VAPT, root-cause closure reporting, partner audits",
    },
    {
      name: "RBI Cyber & IT Governance",
      slug: "/compliance/rbi/",
      oneLine: "Strict security baselines for financial data integrity and vendor management.",
      who: "Banks, NBFCs, payment aggregators, fintechs",
      role: "IS audit support, vendor risk framework, external pentesting",
    },
    {
      name: "PCI DSS v4.0",
      slug: "/compliance/pci-dss/",
      oneLine: "The global payment card standard requiring annual pentesting and quarterly scans.",
      who: "E-commerce brands, payment gateways, merchants",
      role: "Requirement 11 penetration testing, ASV scans, QSA readiness",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Format D · Regulatory Decoded
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            Which compliance framework do you need? One line each.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            We demystify the alphabet soup so your board knows exactly what to prioritize.
          </p>
        </div>

        {/* Table of Frameworks */}
        <div className="rounded-xl border border-slate-800 bg-[#0a0f1c] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900/90 text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-slate-800">
                  <th className="py-3.5 px-4 font-semibold">Framework</th>
                  <th className="py-3.5 px-4 font-semibold">In One Line</th>
                  <th className="py-3.5 px-4 font-semibold">Who Needs It</th>
                  <th className="py-3.5 px-4 font-semibold">How Zenforce Helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                {frameworks.map((fw, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                      <Link href={fw.slug} className="text-blue-400 hover:text-blue-300 hover:underline">
                        {fw.name} →
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-slate-200">{fw.oneLine}</td>
                    <td className="py-4 px-4 text-slate-400 text-xs">{fw.who}</td>
                    <td className="py-4 px-4 text-xs font-mono text-slate-300">{fw.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Callout under table */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs sm:text-sm text-slate-300">
          <p>
            <strong className="text-white">Unsure which deadline applies to you?</strong> We map your tech stack to mandatory regulator requirements in under 30 minutes.
          </p>
          <Link
            href="/compliance/"
            className="text-xs font-mono uppercase bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded transition-colors whitespace-nowrap"
          >
            Launch framework guide →
          </Link>
        </div>
      </div>
    </section>
  );
}
