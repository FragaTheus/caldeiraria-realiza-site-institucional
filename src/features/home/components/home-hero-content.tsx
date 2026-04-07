import { CtaButton } from "@/shared/components/ui/app-button";
import { FadeInDown, FadeInUp } from "@/shared/components/animate";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { AppH1 } from "@/shared/components/ui/app-h1";
import { AppP } from "@/shared/components/ui/app-p";
import { AppSmall } from "@/shared/components/ui/app-small";

interface HeroContentProps {
  headline: string;
  title: string;
  ctaText: string;
  whatsappText: string;
}

const HeroContent = ({
  headline,
  title,
  ctaText,
  whatsappText,
}: HeroContentProps) => {
  return (
    <div className="w-full mt-20">
      <FadeInDown delay={0}>
        <AppSmall className="text-white font-black text-base">
          {headline}
        </AppSmall>
      </FadeInDown>
      <FadeInUp delay={0.2}>
        <AppH1 className="mt-4 md:mt-6 lg:mt-8">{title}</AppH1>
      </FadeInUp>
      <FadeInUp delay={0.4}>
        <Link href={"#cta"}>
          <button className="md:max-w-2/3 lg:max-w-1/2 w-full mt-6 md:mt-8 lg:mt-10 group flex items-center justify-center gap-2 bg-primary text-white p-2 rounded-sm hover:bg-primary/90 cursor-pointer">
            <FaPaperPlane className="text-white" />
            <AppP className="text-white font-semibold">{ctaText}</AppP>
          </button>
        </Link>
      </FadeInUp>
      <FadeInUp delay={0.6}>
        <CtaButton className="w-full border border-white text-white rounded-sm mt-2 p-2 bg-surface/30 font-semibold flex items-center justify-center md:max-w-2/3 lg:max-w-1/2 cursor-pointer hover:bg-surface/20 hover:text-white active:text-white">
          <FaWhatsapp className="size-5 lg:size-6" />
          <span className="ml-2">{whatsappText}</span>
        </CtaButton>
      </FadeInUp>
    </div>
  );
};

export default HeroContent;
