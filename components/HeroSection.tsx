"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [typedLines, setTypedLines] = useState<string[]>([
    "$ GET /api/v2/claims/100482",
    "  200 OK   { \"policy_holder\": \"Customer A\", \"diagnosis\": \"...\" }",
    "",
    "$ GET /api/v2/claims/100483",
    "  200 OK   { \"policy_holder\": \"Customer B\", \"diagnosis\": \"...\" }",
    "           ↑ not your data. Same login. One number changed.",
  ]);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-[#0a0f1c] border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              VAPT · Penetration testing · ISO 27001 · SOC 2 · DPDP
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.12] tracking-tight">
              Attackers don&apos;t check your ISO certificate.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-red-400">
                They check your API.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              We break into your web apps, APIs, mobile apps and cloud the way a real attacker would. Then we show you exactly how, sit with your developers until it&apos;s fixed, retest it, and hand you evidence your ISO 27001, SOC 2, CERT-In or DPDP auditor will accept.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/get-a-quote/"
                className="bg-orange-600 hover:bg-orange-500 text-white font-semibold text-center px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-orange-600/25 active:scale-95"
              >
                Get a scoped quote in 24 hours
              </Link>
              <Link
                href="#sample-report"
                className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium px-5 py-3.5 rounded-lg transition-colors"
              >
                See a real (redacted) report
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Micro-proof Line */}
            <p className="text-xs text-slate-400 pt-2 flex items-center flex-wrap gap-x-3 gap-y-1 font-mono">
              <span>✓ Manual testing, not a scanner export</span>
              <span className="text-slate-600">•</span>
              <span>✓ Fix support included</span>
              <span className="text-slate-600">•</span>
              <span>✓ Free retest</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">OSCP / CEH / ISO 27001 LA</span>
            </p>
          </div>

          {/* Right Column: Format A - Live Attack Object */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-800 bg-[#060a12] shadow-2xl overflow-hidden font-mono text-xs sm:text-[13px] leading-relaxed">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[11px] text-slate-400 font-sans tracking-wide">bash: live-attack-preview</span>
                <span className="text-xs text-red-400 font-semibold">BOLA / IDOR</span>
              </div>

              {/* Terminal Code Display */}
              <div className="p-5 space-y-1.5 min-h-[200px] text-slate-300 select-all overflow-x-auto" suppressHydrationWarning>
                {typedLines.map((line, idx) => {
                  if (line.startsWith("$")) {
                    return (
                      <div key={idx} className="text-blue-400 font-bold">
                        {line}
                      </div>
                    );
                  }
                  if (line.includes("not your data")) {
                    return (
                      <div key={idx} className="text-red-400 font-semibold bg-red-950/40 px-2 py-0.5 rounded border-l-2 border-red-500 my-1">
                        {line}
                      </div>
                    );
                  }
                  if (line.includes("200 OK")) {
                    return (
                      <div key={idx} className="text-emerald-400">
                        {line}
                      </div>
                    );
                  }
                  return <div key={idx} className="text-slate-500">{line}</div>;
                })}
                <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-0.5 align-middle" />
              </div>
            </div>

            {/* Caption under the card (HTML text) */}
            <blockquote className="mt-3.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 leading-normal">
              <strong className="text-slate-200">Illustrative.</strong> Changing one number in a URL and getting someone else&apos;s record is called Broken Object Level Authorization (BOLA). It sits at #1 on the OWASP API Security Top 10, and automated scanners routinely miss it. We find it by hand.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
