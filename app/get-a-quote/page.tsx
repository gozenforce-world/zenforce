import WhereWeWorkCTASection from "@/components/WhereWeWorkCTASection";

export const metadata = {
  title: "Get a Scoped Quote in 24 Hours | Zenforce",
  description: "Request a fixed-price quotation for VAPT, web app penetration testing, API pentest, or compliance readiness.",
};

export default function GetAQuotePage() {
  return (
    <div className="py-12 bg-[#0a0f1c] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Request a Scoped Quote
        </h1>
        <p className="text-slate-400 mt-2 text-sm sm:text-base">
          Fixed prices. Firm delivery timelines. Zero sales fluff.
        </p>
      </div>
      <WhereWeWorkCTASection />
    </div>
  );
}
