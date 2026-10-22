export default function MemeBreakSection() {
  return (
    <section className="py-16 bg-[#0a0f1c] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
            Format B · The Audit Disconnect
          </span>
        </div>

        {/* Two-Panel Meme Card */}
        <div className="bg-[#0f172a] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Panel 1 */}
            <div className="p-6 sm:p-8 flex flex-col justify-between bg-slate-900/40">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-2">Panel 1</span>
                <h4 className="text-sm font-semibold text-white mb-6">
                  What the board hears: <span className="text-slate-300 font-normal">&quot;We passed the audit. The certificate is framed in reception.&quot;</span>
                </h4>
              </div>

              {/* Illustration: Framed Certificate */}
              <div className="py-8 flex flex-col items-center justify-center">
                <div className="w-44 h-32 rounded-lg border-4 border-amber-500/80 bg-gradient-to-b from-amber-50 to-amber-100 p-3 shadow-xl relative flex flex-col items-center justify-center text-slate-900 text-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mb-1 text-amber-700 font-bold text-xs">
                    ★
                  </div>
                  <span className="font-serif text-[10px] uppercase tracking-wider font-bold text-slate-800">CERTIFICATE</span>
                  <span className="text-[9px] text-slate-600">ISO/IEC 27001:2022</span>
                  <div className="w-12 h-0.5 bg-amber-600/40 my-1"></div>
                  <span className="text-[8px] text-slate-500">Issued for Audit Day Only</span>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="p-6 sm:p-8 flex flex-col justify-between bg-slate-900/80">
              <div>
                <span className="text-[11px] font-mono text-red-400 uppercase tracking-widest block mb-2">Panel 2</span>
                <h4 className="text-sm font-semibold text-white mb-6">
                  What our tester found on day one: <span className="text-red-400 font-mono text-xs block mt-1">staging.yourcompany.in/admin (admin / Admin@123)</span>
                </h4>
              </div>

              {/* Illustration: Browser Login Screen */}
              <div className="py-4">
                <div className="rounded-lg border border-slate-700 bg-[#060a12] p-3.5 shadow-xl font-mono text-xs">
                  <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-slate-600 inline-block" />
                    <span>https://staging.yourcompany.in/admin</span>
                  </div>
                  <div className="bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 p-2 rounded text-[11px] mb-2 font-semibold">
                    ✓ Welcome, Administrator! [Bypassed Auth]
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-400">
                    <div>Role: <span className="text-red-400 font-bold">superuser</span></div>
                    <div>Database: <span className="text-white">prod_users_mirror_2026.sql</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Punchline under the meme */}
        <div className="text-center mt-6">
          <h3 className="text-base sm:text-lg font-bold text-slate-200">
            A certificate proves you had controls on audit day. A pentest proves they still work on a Tuesday.
          </h3>
        </div>
      </div>
    </section>
  );
}
