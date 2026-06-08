import ServicesCtaWrapper from "@/features/gallery/wrapper/services-cta-wrapper";
import ServicesGalleryWrapper from "@/features/gallery/wrapper/services-gallery-wrapper";
import ServicesIntroWrapper from "@/features/gallery/wrapper/services-intro-wrapper";

export default function Servicos() {
  return (
    <main>
      <ServicesIntroWrapper />
      <ServicesGalleryWrapper />
      <ServicesCtaWrapper />
    </main>
  );
}
