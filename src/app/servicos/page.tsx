import ServicesCaldeirariaWrapper from "@/features/services/wrapper/services-caldeiraria-wrapper";
import ServicesCtaWrapper from "@/features/services/wrapper/services-cta-wrapper";
import ServicesIntroWrapper from "@/features/services/wrapper/services-intro-wrapper";
import ServicesSerralheriaWrapper from "@/features/services/wrapper/services-serralheria-wrapper";
import ServicesSoldagemWrapper from "@/features/services/wrapper/services-soldagem-wrapper";
import ServicesUsinagemWrapper from "@/features/services/wrapper/services-usinagem-wrapper";

export default function Servicos() {
  return (
    <main>
      <ServicesIntroWrapper />
      <ServicesUsinagemWrapper />
      <ServicesCaldeirariaWrapper />
      <ServicesSerralheriaWrapper />
      <ServicesSoldagemWrapper />
      <ServicesCtaWrapper />
    </main>
  );
}
