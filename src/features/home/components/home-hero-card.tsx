import { CtaButton } from "@/shared/components/ui/app-button";
import {
  AnimateCta,
  AnimateHeadline,
  AnimateTitle,
} from "../animate/home-hero-animate";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import Line from "@/shared/components/line";

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
    <div className="w-full">
      <AnimateHeadline>
        <small className="text-white font-black">{headline}</small>
      </AnimateHeadline>
      <AnimateTitle>
        <h1 className="mt-6 lg:mt-12 text-3xl lg:text-7xl font-black tracking-tighter md:whitespace-pre-line">
          {title}
        </h1>
      </AnimateTitle>
      <AnimateCta>
        <Link href={"#cta"}>
          <button className="lg:max-w-1/2 w-full mt-6 lg:mt-12 group flex items-center justify-center gap-2 bg-primary text-white p-2 rounded-sm hover:bg-primary/90 cursor-pointer">
            <FaPaperPlane className="text-white" />
            <p className="text-white font-semibold">{ctaText}</p>
          </button>
        </Link>
      </AnimateCta>
      <AnimateCta>
        <CtaButton className="w-full border border-white text-white rounded-sm mt-2 p-2 bg-surface/30 font-semibold flex items-center justify-center lg:max-w-1/2 cursor-pointer hover:bg-surface/20 hover:text-white active:text-white">
          <FaWhatsapp className="size-5 lg:size-6" />
          <span className="ml-2">{whatsappText}</span>
        </CtaButton>
      </AnimateCta>
    </div>
  );
};

export default HeroContent;
