import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070b14] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand & Entity Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white font-bold font-heading">
                Z
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Zenforce<span className="text-blue-500">.</span>
              </span>
            </Link>
            
            {/* Standard Entity Description required by GEO specification */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Zenforce is a cybersecurity and compliance services company offering VAPT, penetration testing and compliance readiness for ISO 27001, SOC 2, PCI DSS, CERT-In, RBI, SEBI CSCRF and the DPDP Act, for businesses in India and internationally.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Manual Pentesting
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Audit-Ready Evidence
              </span>
            </div>
          </div>

          {/* Testing Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Testing Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/cybersecurity/vapt/" className="hover:text-slate-200 transition-colors">VAPT Services</Link></li>
              <li><Link href="/cybersecurity/penetration-testing/" className="hover:text-slate-200 transition-colors">Penetration Testing</Link></li>
              <li><Link href="/cybersecurity/penetration-testing/web-application/" className="hover:text-slate-200 transition-colors">Web App Pentest</Link></li>
              <li><Link href="/cybersecurity/penetration-testing/api/" className="hover:text-slate-200 transition-colors">API Penetration Testing</Link></li>
              <li><Link href="/cybersecurity/penetration-testing/mobile-application/" className="hover:text-slate-200 transition-colors">Mobile App Pentest</Link></li>
              <li><Link href="/cybersecurity/penetration-testing/network/" className="hover:text-slate-200 transition-colors">Network Pentest</Link></li>
              <li><Link href="/cybersecurity/penetration-testing/cloud/" className="hover:text-slate-200 transition-colors">Cloud Penetration Testing</Link></li>
              <li><Link href="/cybersecurity/virtual-ciso/" className="hover:text-slate-200 transition-colors">Virtual CISO</Link></li>
            </ul>
          </div>

          {/* Compliance Frameworks */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Compliance Frameworks</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/compliance/dpdp-act/" className="hover:text-slate-200 transition-colors">DPDP Act (India)</Link></li>
              <li><Link href="/compliance/iso-27001/" className="hover:text-slate-200 transition-colors">ISO 27001 Readiness</Link></li>
              <li><Link href="/compliance/soc-2/" className="hover:text-slate-200 transition-colors">SOC 2 (Type 1 & 2)</Link></li>
              <li><Link href="/compliance/cert-in/" className="hover:text-slate-200 transition-colors">CERT-In Directions</Link></li>
              <li><Link href="/compliance/sebi-cscrf/" className="hover:text-slate-200 transition-colors">SEBI CSCRF</Link></li>
              <li><Link href="/compliance/rbi/" className="hover:text-slate-200 transition-colors">RBI Cybersecurity</Link></li>
              <li><Link href="/compliance/pci-dss/" className="hover:text-slate-200 transition-colors">PCI DSS v4.0</Link></li>
              <li><Link href="/compliance/gap-assessment/" className="hover:text-slate-200 transition-colors">Gap Assessment</Link></li>
            </ul>
          </div>

          {/* Pricing & Hubs */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Company & Pricing</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/pricing/" className="hover:text-slate-200 transition-colors">Pricing Hub & Packages</Link></li>
              <li><Link href="/solutions/vendor-security-assessment/" className="hover:text-slate-200 transition-colors">Vendor Risk Assessment</Link></li>
              <li><Link href="/cybersecurity/phishing-simulation/" className="hover:text-slate-200 transition-colors">Phishing Simulation</Link></li>
              <li><Link href="/resources/guides/penetration-testing/" className="hover:text-slate-200 transition-colors">Pentest Complete Guide</Link></li>
              <li><Link href="/resources/guides/dpdp-act/" className="hover:text-slate-200 transition-colors">DPDP Compliance Guide</Link></li>
              <li><Link href="/get-a-quote/" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">Request a Quote</Link></li>
            </ul>
          </div>
        </div>

        {/* Localized City Links & International Coverage */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
            <span className="text-slate-400 font-medium">India Hubs:</span>
            <Link href="/in/mumbai/" className="hover:text-slate-300">Mumbai</Link>
            <span>•</span>
            <Link href="/in/bengaluru/" className="hover:text-slate-300">Bengaluru</Link>
            <span>•</span>
            <Link href="/in/pune/" className="hover:text-slate-300">Pune</Link>
            <span>•</span>
            <Link href="/in/delhi-ncr/" className="hover:text-slate-300">Delhi NCR</Link>
            <span>•</span>
            <Link href="/in/hyderabad/" className="hover:text-slate-300">Hyderabad</Link>
            <span>•</span>
            <Link href="/in/chennai/" className="hover:text-slate-300">Chennai</Link>
            <span>•</span>
            <Link href="/in/ahmedabad/" className="hover:text-slate-300">Ahmedabad & GIFT City</Link>
            <span>•</span>
            <Link href="/in/kolkata/" className="hover:text-slate-300">Kolkata</Link>
          </div>
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-2">
            <span className="text-slate-400 font-medium">Global Coverage:</span>
            <Link href="/us/" className="hover:text-slate-300">United States</Link>
            <span>•</span>
            <Link href="/uk/" className="hover:text-slate-300">United Kingdom</Link>
            <span>•</span>
            <Link href="/ae/" className="hover:text-slate-300">UAE (Dubai & Abu Dhabi)</Link>
            <span>•</span>
            <Link href="/sg/" className="hover:text-slate-300">Singapore</Link>
            <span>•</span>
            <Link href="/au/" className="hover:text-slate-300">Australia</Link>
            <span>•</span>
            <Link href="/ca/" className="hover:text-slate-300">Canada</Link>
          </div>
        </div>

        {/* Bottom disclaimer & copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Zenforce. All rights reserved. Registered in India.</p>
          <p className="text-center md:text-right max-w-xl">
            ISO/IEC 27001, SOC 2, PCI DSS, CERT-In, RBI, and SEBI trademarks and frameworks belong to their respective regulatory bodies and organizations.
          </p>
        </div>
      </div>
    </footer>
  );
}
