import Link from "next/link";

export default function FindingCardSection() {
  return (
    <section id="sample-report" className="py-16 md:py-24 bg-[#0a0f1c] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Format A Variant · Developer Deliverable
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            A pentest report your developers will actually use
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Every finding comes with clear reproduction steps, business impact in plain English, and drop-in code fixes. No 400-page scanner dump.
          </p>
        </div>

        {/* Finding Card */}
        <div className="rounded-2xl border border-slate-700 bg-[#070b14] shadow-2xl p-6 sm:p-8 font-mono text-xs sm:text-sm text-slate-300">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs">
            <span className="font-bold text-white bg-slate-800 px-3 py-1 rounded">
              Finding ID: ZF-API-007
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-red-950 text-red-400 border border-red-800 px-2.5 py-0.5 rounded font-bold uppercase text-[11px]">
                Severity: Critical
              </span>
              <span className="text-slate-400 font-sans text-xs">CVSS 4.0: 9.1</span>
            </div>
          </div>

          {/* Finding Title */}
          <h3 className="text-base sm:text-lg font-bold text-white font-sans mt-5 mb-4">
            Any authenticated customer can read any other customer&apos;s tax invoices (BOLA)
          </h3>

          {/* Details Grid */}
          <div className="space-y-4 font-sans text-xs sm:text-sm">
            <div className="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800 font-mono text-xs">
              <span className="text-slate-400 block mb-1">Vulnerable Endpoint:</span>
              <code className="text-red-400 font-bold">GET /api/v1/invoices/&#123;invoice_id&#125;</code>
            </div>

            <div>
              <strong className="text-slate-200 block mb-1 font-mono text-xs uppercase text-blue-400">Reproduction Proof:</strong>
              <p className="text-slate-300 leading-relaxed font-normal">
                Logged in as low-privilege User A (Token: <code className="text-slate-200 bg-slate-900 px-1 py-0.5 rounded">eyJhbGciOi...</code>), requested invoice <code className="text-slate-200 bg-slate-900 px-1 py-0.5 rounded">#INV-88492</code> belonging to Company B. Server returned HTTP 200 with complete billing PDF including names, GSTINs, and transactional banking details.
              </p>
            </div>

            <div className="bg-amber-950/20 p-3.5 rounded-lg border border-amber-900/40">
              <strong className="text-amber-400 block mb-1 font-mono text-xs uppercase">Business Impact:</strong>
              <p className="text-slate-300 leading-relaxed font-normal">
                Direct exposure of proprietary pricing and PII across 100% of customer accounts. Constitutes a high-severity, notifiable personal data breach under the DPDP Act 2023 with potential regulatory penalties.
              </p>
            </div>

            <div>
              <strong className="text-emerald-400 block mb-1 font-mono text-xs uppercase">Remediation Guidance:</strong>
              <p className="text-slate-300 leading-relaxed font-normal mb-2">
                Enforce tenant-level authorization checks at the database query layer rather than relying on session validity alone:
              </p>
              <div className="bg-[#050811] p-3 rounded border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                <span className="text-slate-500">// Check ownership before returning entity</span>
                <br />
                <span className="text-blue-400">const</span> invoice = <span className="text-blue-400">await</span> db.invoices.findUnique(&#123;
                <br />
                &nbsp;&nbsp;where: &#123; id: req.params.id, customerId: req.user.customerId &#125;
                <br />
                &#125;);
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Retest Status: Fixed and verified during Day 21 re-assessment
            </div>
          </div>
        </div>

        {/* CTA below card */}
        <div className="mt-8 text-center">
          <Link
            href="/get-a-quote/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 underline"
          >
            Download a full redacted sample report (PDF) →
          </Link>
        </div>
      </div>
    </section>
  );
}
