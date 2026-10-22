"use client";

import { useState } from "react";
import { homeFaqs } from "@/lib/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-[#0d1424] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            AEO Knowledge Block
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            Questions people ask before their first pentest
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Direct, plain-language answers to common technical and commercial queries.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-[#0a0f1c] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-heading font-semibold text-white text-base sm:text-lg hover:text-blue-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="text-slate-500 font-mono text-xl shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
