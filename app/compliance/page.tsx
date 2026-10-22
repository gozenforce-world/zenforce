import FrameworksDecodedSection from "@/components/FrameworksDecodedSection";
import Link from "next/link";

export const metadata = {
  title: "Compliance Readiness & Audit Support | ISO 27001, SOC 2, DPDP | Zenforce",
  description: "Compliance gap assessments, policies, and evidence preparation for ISO 27001, SOC 2, DPDP Act, and CERT-In.",
};

export default function ComplianceHubPage() {
  return (
    <div className="py-12 bg-[#0a0f1c] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
          Hub H2 · Regulatory Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
          Compliance Frameworks Decoded &amp; Delivered
        </h1>
        <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          From the DPDP Act 2027 enforcement to SOC 2 and ISO 27001, we close your control gaps and prepare evidence your auditor will accept.
        </p>
      </div>

      <FrameworksDecodedSection />

      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <Link
          href="/compliance/dpdp-act/"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Explore DPDP Act Readiness →
        </Link>
      </div>
    </div>
  );
}
