import HeroSection from "@/components/HeroSection";
import AnswerBlock from "@/components/AnswerBlock";
import TheBillSection from "@/components/TheBillSection";
import ThreeDoorsSection from "@/components/ThreeDoorsSection";
import MemeBreakSection from "@/components/MemeBreakSection";
import ImageStoryStripSection from "@/components/ImageStoryStripSection";
import StartWithProblemSection from "@/components/StartWithProblemSection";
import ProcedureSection from "@/components/ProcedureSection";
import FindingCardSection from "@/components/FindingCardSection";
import FrameworksDecodedSection from "@/components/FrameworksDecodedSection";
import ProofSection from "@/components/ProofSection";
import PricingPreviewSection from "@/components/PricingPreviewSection";
import FAQSection, { homeFaqs } from "@/components/FAQSection";
import WhereWeWorkCTASection from "@/components/WhereWeWorkCTASection";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Section 1: Hero (Format A - Live Attack Object) */}
      <HeroSection />

      {/* Section 2: Answer Block (AEO) */}
      <AnswerBlock />

      {/* Section 3: The Bill (Format D - Data Table) */}
      <TheBillSection />

      {/* Section 4: The Three Doors (Format D - Attack Vectors) */}
      <ThreeDoorsSection />

      {/* Section 5: Meme Break (Format B - Audit Disconnect) */}
      <MemeBreakSection />

      {/* Section 6: Image Story Strip (Format C - BOLA cascade) */}
      <ImageStoryStripSection />

      {/* Section 7: Start with Your Problem (Services Grid) */}
      <StartWithProblemSection />

      {/* Section 8: The Procedure in Pictures (7-Step Timeline) */}
      <ProcedureSection />

      {/* Section 9: What a Finding Looks Like (Format A Variant) */}
      <FindingCardSection />

      {/* Section 10: Frameworks Decoded (Table Format D) */}
      <FrameworksDecodedSection />

      {/* Section 11: Proof Without Fake Logos (Team, Standards, Results) */}
      <ProofSection />

      {/* Section 12: Pricing Preview (3 Price Cards) */}
      <PricingPreviewSection />

      {/* Section 14: Questions People Ask (AEO Accordions) */}
      <FAQSection />

      {/* Section 13: Where We Work + Final 24h Scoping CTA */}
      <WhereWeWorkCTASection />
    </>
  );
}
