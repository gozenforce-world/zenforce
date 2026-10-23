import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAPT, Pentesting & Compliance Services in India | Zenforce",
  description:
    "We break into your apps, APIs and cloud before attackers do, fix it with you, and turn the proof into ISO 27001, SOC 2 and DPDP evidence. Get a scoped quote.",
  metadataBase: new URL("https://www.zenforce.com"),
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      "en-IN": "/in/",
      "en-US": "/us/",
      "en-GB": "/uk/",
      "en-AE": "/ae/",
    },
  },
  openGraph: {
    title: "VAPT, Pentesting & Compliance Services in India | Zenforce",
    description:
      "We break into your apps, APIs and cloud before attackers do, fix it with you, and turn the proof into ISO 27001, SOC 2 and DPDP evidence.",
    url: "https://www.zenforce.com",
    siteName: "Zenforce",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.zenforce.com/#org",
      name: "Zenforce",
      url: "https://www.zenforce.com/",
      logo: "https://www.zenforce.com/logo.png",
      description:
        "Cybersecurity and compliance services company offering VAPT, penetration testing and compliance readiness.",
      knowsAbout: [
        "VAPT",
        "Penetration testing",
        "API security",
        "ISO 27001",
        "SOC 2",
        "PCI DSS",
        "DPDP Act",
        "CERT-In",
        "SEBI CSCRF",
      ],
      areaServed: ["IN", "US", "GB", "AE", "SG", "AU", "CA"],
      sameAs: [
        "https://www.linkedin.com/company/zenforce",
        "https://clutch.co/profile/zenforce",
        "https://www.crunchbase.com/organization/zenforce",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@zenforce.com",
        telephone: "+91-9876543210",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.zenforce.com/#website",
      url: "https://www.zenforce.com/",
      name: "Zenforce",
      publisher: { "@id": "https://www.zenforce.com/#org" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0a0f1c] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
