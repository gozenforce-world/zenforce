import Link from "next/link";
import StartWithProblemSection from "@/components/StartWithProblemSection";

export const metadata = {
  title: "Cybersecurity Services in India: VAPT, Pentesting | Zenforce",
  description: "Manual VAPT, web app penetration testing, API security, mobile pentesting, and cloud security assessments.",
};

export default function CybersecurityHubPage() {
  return (
    <div className="py-12 bg-[#0a0f1c] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
          Hub H1 · Offensive Security Services
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
          Manual VAPT &amp; Penetration Testing Services
        </h1>
        <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          We test web applications, APIs, mobile apps, networks, and cloud environments against real-world attack chains, and provide developer-ready remediation.
        </p>
      </div>

      <StartWithProblemSection />

      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <Link
          href="/get-a-quote/"
          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Scope your assessment in 24 hours →
        </Link>
      </div>
    </div>
  );
}
