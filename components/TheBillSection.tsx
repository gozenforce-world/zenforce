import Link from "next/link";

export default function TheBillSection() {
  const lineItems = [
    {
      item: "Average cost of one data breach in India, 2025",
      amount: "₹22 crore (up 13% in a year)",
      source: "IBM Cost of a Data Breach 2025",
      href: "https://www.ibm.com",
    },
    {
      item: "Time Indian companies took to find and contain a breach",
      amount: "263 days",
      source: "IBM, 2025",
      href: "https://www.ibm.com",
    },
    {
      item: "Marks & Spencer: hit to operating profit after April 2025 attack",
      amount: "~£300 million, online orders stopped ~6 weeks",
      source: "M&S results, May & Nov 2025",
      href: "https://www.theregister.com",
    },
    {
      item: "Jaguar Land Rover, September 2025",
      amount: "Car production halted for about a month",
      source: "Reuters / AFP reporting",
      href: "https://www.reuters.com",
    },
    {
      item: "Star Health, 2024",
      amount: "Data of ~31 million customers offered on Telegram bots",
      source: "Reuters reporting",
      href: "https://www.reuters.com",
    },
    {
      item: "DPDP Act maximum penalty, per breach",
      amount: "₹250 crore",
      source: "DPDP Act 2023, Schedule",
      href: "https://www.meity.gov.in",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0a0f1c] border-b border-slate-800 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
            Format D · The Reality Check
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            Cybersecurity and compliance services cost less than the invoice below
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Nobody budgets for a breach. Here&apos;s what it has cost others, in rupees and pounds.
          </p>
        </div>

        {/* Receipt Container */}
        <div className="bg-[#0f172a] rounded-xl border border-slate-800 shadow-2xl p-6 sm:p-8 font-mono">
          <div className="border-b border-dashed border-slate-700 pb-4 mb-6 flex justify-between items-center text-xs text-slate-400">
            <span>INVOICE: #BREACH-INCIDENT-LEDGER</span>
            <span>STATUS: UNPLANNED DISASTER</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-sans uppercase tracking-wider text-[11px]">
                  <th className="py-3 pr-4">Line Item</th>
                  <th className="py-3 px-4 text-red-400">Amount / Impact</th>
                  <th className="py-3 pl-4 text-slate-400">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {lineItems.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 pr-4 text-slate-300 font-sans text-sm font-medium">{row.item}</td>
                    <td className="py-3.5 px-4 font-bold text-red-300">{row.amount}</td>
                    <td className="py-3.5 pl-4 text-xs text-slate-400 font-sans">
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-200 transition-colors"
                      >
                        {row.source}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-dashed border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-bold text-white font-sans">
              A scoped VAPT costs a tiny fraction of the first line.{" "}
              <span className="text-emerald-400 font-mono">(Packages starting from ₹45,000)</span>
            </p>
            <Link
              href="/pricing/"
              className="text-xs font-mono uppercase bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded border border-slate-700 transition-colors"
            >
              Compare package pricing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
