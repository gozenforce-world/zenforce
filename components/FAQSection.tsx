"use client";

import { useState } from "react";

export const homeFaqs = [
  {
    q: "What is the difference between VAPT and penetration testing?",
    a: "VAPT combines a vulnerability assessment (finding weaknesses, mostly with tools) and a penetration test (a person proving which weaknesses can actually be exploited). In India 'VAPT' is the common term in RFPs and regulator circulars; in the US and UK the same work is usually called a penetration test. We deliver both together.",
  },
  {
    q: "How much does a penetration test cost in India?",
    a: "A single web application or API test starts at ₹45,000 and depends on the number of user roles, endpoints and environments. Larger scopes are quoted after a 30-minute scoping call, at a fixed price. See our pricing guide for what changes the number.",
  },
  {
    q: "How long does a penetration test take?",
    a: "Testing for one web application usually takes 5 to 7 working days, plus 2 days for the comprehensive report. Critical vulnerabilities are reported to you the same day we find them, so your developers can begin remediation before the final PDF arrives.",
  },
  {
    q: "Does a penetration test make us ISO 27001 or SOC 2 compliant?",
    a: "No. A pentest is one piece of evidence those frameworks expect, not the whole thing. ISO 27001 and SOC 2 also need policies, risk management, access reviews and other operational controls, which is what our readiness service covers.",
  },
  {
    q: "Is VAPT mandatory in India?",
    a: "For many regulated businesses, yes. SEBI's cyber framework, RBI guidance and CERT-In's audit requirements expect periodic VAPT, and the DPDP Act requires reasonable security safeguards for personal data. For others it is usually required by customers in enterprise contracts and security questionnaires.",
  },
  {
    q: "Do you need access to our source code?",
    a: "Not for a standard black-box or grey-box test. We need test accounts for each user role and an agreed testing window. Source code access is optional and makes the review deeper (white-box / secure code review).",
  },
  {
    q: "Will testing take our website down?",
    a: "It shouldn't. We agree testing windows, avoid destructive payloads on production environments, and can test on staging instances. If anything unusual happens, we halt testing immediately and call your emergency contact.",
  },
  {
    q: "Do you work with companies outside India?",
    a: "Yes. We test remotely for clients in the US, UK, UAE, Singapore, Australia and Canada, report in your local time zone, and map findings directly to your local frameworks such as SOC 2, Cyber Essentials or MAS TRM.",
  },
];

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
