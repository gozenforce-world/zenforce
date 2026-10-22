import Link from "next/link";

export default function ThreeDoorsSection() {
  const doors = [
    {
      percentage: "18%",
      title: "Phishing",
      scenario: "Finance gets a 'vendor bank change' mail that looks completely genuine and bypasses basic spam filters.",
      serviceName: "Phishing Simulation & Awareness",
      href: "/cybersecurity/phishing-simulation/",
      doorColor: "border-amber-500/50 bg-amber-950/20",
      tagColor: "text-amber-400 bg-amber-950/60 border-amber-800",
    },
    {
      percentage: "17%",
      title: "A Third Party or Supplier",
      scenario: "Your payroll or CRM vendor's compromised login credentials are reused to pivot straight into internal HR and employee data.",
      serviceName: "Vendor Security Assessment",
      href: "/solutions/vendor-security-assessment/",
      doorColor: "border-red-500/50 bg-red-950/20",
      tagColor: "text-red-400 bg-red-950/60 border-red-800",
    },
    {
      percentage: "13%",
      title: "An Unpatched or Known Bug",
      scenario: "A neglected staging server or exposed test API with an unpatched plugin, completely forgotten since 2022.",
      serviceName: "Manual VAPT & Retesting",
      href: "/cybersecurity/vapt/",
      doorColor: "border-blue-500/50 bg-blue-950/20",
      tagColor: "text-blue-400 bg-blue-950/60 border-blue-800",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Attack Vectors · IBM Security 2025
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            How attackers actually got in, and the service that shuts each door
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            IBM&apos;s 2025 data for India shows the top three entry points. None of them needed an exotic zero-day exploit.
          </p>
        </div>

        {/* 3 Doors Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doors.map((door, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all hover:scale-[1.01] ${door.doorColor}`}
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white">
                    {door.percentage}
                  </span>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded border uppercase tracking-wide ${door.tagColor}`}>
                    Door #{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{door.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {door.scenario}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Service that closes it:</span>
                <Link
                  href={door.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  {door.serviceName} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note under the doors */}
        <p className="mt-8 text-xs sm:text-sm text-slate-400 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <strong className="text-slate-200">Real-world note:</strong> Marks &amp; Spencer publicly confirmed its massive breach came down to human error, and initial access reportedly slipped in through a third-party supplier. That&apos;s two of these exact three doors at one of Britain&apos;s biggest retailers.
        </p>
      </div>
    </section>
  );
}
