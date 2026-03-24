import Line from "@/shared/components/line";
import { CtaButton } from "@/shared/components/ui/app-button";
import {
  AnimateCta,
  AnimateHeadline,
  AnimateTitle,
} from "../animate/home-hero-animate";
import { FaPaperPlane } from "react-icons/fa6";

interface HeroContentProps {
  headline: string;
  title: string;
  ctaText: string;
}

const HeroContent = ({ headline, title, ctaText }: HeroContentProps) => {
  return (
    <div className="w-full mt-20">
      <AnimateHeadline>
        <small className="text-primary bg-surface p-2 rounded-sm">
          {headline}
        </small>
      </AnimateHeadline>
      <AnimateTitle>
        <h2 className="mt-6 lg:mt-12 lg:text-h1 lg:max-w-1/2">{title}</h2>
      </AnimateTitle>
      <AnimateCta>
        <CtaButton className="max-w-1/2 w-full mt-6 lg:mt-12 bg-primary hover:bg-primary/90">
          <FaPaperPlane className="mr-2" />
          {ctaText}
        </CtaButton>
      </AnimateCta>
    </div>
  );
};

export default HeroContent;
