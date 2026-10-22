import PricingPreviewSection from "@/components/PricingPreviewSection";
import Link from "next/link";

export const metadata = {
  title: "VAPT & Penetration Testing Cost Guide 2026 | Zenforce",
  description: "Transparent cybersecurity and compliance pricing. Starting rates for web, API, and compliance readiness.",
};

export default function PricingPage() {
  return (
    <div className="py-12 bg-[#0a0f1c] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center mb-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Transparent Security &amp; Compliance Pricing
        </h1>
        <p className="text-slate-400 mt-3 text-base max-w-2xl mx-auto">
          We publish our starting baselines because security shouldn&apos;t be an opaque bidding war. Scoped in 24 hours, priced upfront.
        </p>
      </div>
      <PricingPreviewSection />
      <div className="text-center py-12">
        <Link
          href="/get-a-quote/"
          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg shadow-orange-600/20"
        >
          Request Custom Scoping Quote →
        </Link>
      </div>
    </div>
  );
}
