export default function ProofSection() {
  const standards = [
    "OWASP Web Security Testing Guide (WSTG)",
    "OWASP API Security Top 10",
    "OWASP Mobile App Security (MASVS)",
    "Penetration Testing Execution Standard (PTES)",
    "NIST SP 800-115 Technical Guide",
    "CIS Benchmarks for Cloud & OS",
  ];

  const results = [
    {
      context: "Series B Fintech, Bengaluru",
      problem: "Enterprise client demanded third-party pentest before signing $400k annual license.",
      found: "2 critical broken object authorization bugs leaking transaction histories.",
      outcome: "Bugs remediated with tester guidance and retested 9 days before client security review.",
    },
    {
      context: "HealthTech SaaS, Mumbai",
      problem: "Needed DPDP Act consent mapping and external penetration test for hospital pilot.",
      found: "Unauthenticated S3 bucket exposing patient lab reports + unencrypted tokens.",
      outcome: "Zero findings on clean retest; successful security clearance from hospital board.",
    },
    {
      context: "D2C Retail Brand, Delhi NCR",
      problem: "Preparing for annual PCI DSS 4.0 validation and festival traffic spike.",
      found: "Stored XSS in payment checkout redirect workflow that bypassed WAF.",
      outcome: "Patched within 48 hours; attestation letter issued without project delay.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0f1c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
            Radical Honesty · Zero Fake Proof
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            Why trust a new name with your security?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Fair question. Here&apos;s what we show instead of a wall of generic enterprise logos we haven&apos;t earned.
          </p>
        </div>

        {/* 3 Blocks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Block 1: The People */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                BLOCK 1 · THE PRACTITIONERS
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The People Who Actually Test</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                You work directly with offensive security engineers, not junior account managers or sales reps.
              </p>

              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-bold text-white">Lead Pentester</span>
                    <span className="text-[11px] font-mono text-emerald-400">OSCP, CEH</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    8+ years in offensive security, CVE contributor, 100+ web/API assessments completed.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-bold text-white">Compliance Lead</span>
                    <span className="text-[11px] font-mono text-blue-400">ISO 27001 LA, CISA</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Former big-4 advisory consultant specializing in SOC 2 readiness and DPDP data architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
              Direct access via Slack during testing windows.
            </div>
          </div>

          {/* Block 2: The Standards */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                BLOCK 2 · METHODOLOGY
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Standards We Test Against</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                Our testing blueprints map directly to universally acknowledged security testing criteria:
              </p>

              <ul className="space-y-2.5">
                {standards.map((std, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 px-3 py-2 rounded border border-slate-800 font-mono">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
              Accepted without revision by global SOC 2 &amp; ISO auditors.
            </div>
          </div>

          {/* Block 3: Results */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                BLOCK 3 · VERIFIED RESULTS
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Delivered Engagements</h3>
              <span className="text-[10px] text-amber-400/90 font-mono block mb-4">
                (Founder experience prior to &amp; within Zenforce)
              </span>

              <div className="space-y-3.5">
                {results.map((res, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                    <span className="font-bold text-slate-200 block mb-1 text-[11px] text-blue-400 font-mono">
                      {res.context}
                    </span>
                    <p className="text-slate-300 text-[11px] mb-1 leading-normal">
                      <strong className="text-slate-400">Issue:</strong> {res.found}
                    </p>
                    <p className="text-slate-400 text-[10px]">
                      <strong className="text-emerald-400">Result:</strong> {res.outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
              All client results shared only with written authorization.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
