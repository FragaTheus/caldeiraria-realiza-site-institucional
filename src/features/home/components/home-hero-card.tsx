import { CtaButton } from "@/shared/components/ui/app-button";
import {
  AnimateCta,
  AnimateHeadline,
  AnimateTitle,
} from "../animate/home-hero-animate";
import { FaPaperPlane } from "react-icons/fa6";

type TitleType = {
  p1: string;
  span1: string;
  p2: string;
  span2: string;
};

interface HeroContentProps {
  headline: string;
  title: TitleType;
  ctaText: string;
}

const HeroContent = ({ headline, title, ctaText }: HeroContentProps) => {
  return (
    <div className="w-full mt-20">
      <AnimateHeadline>
        <small className="text-muted bg-surface p-2 rounded-sm font-semibold">
          {headline}
        </small>
      </AnimateHeadline>
      <AnimateTitle>
        <h2 className="mt-6 lg:mt-12 lg:text-h1 lg:max-w-1/2 font-black">
          {title.p1}
          <span className="text-primary">{title.span1}</span>
          {title.p2}
          <span className="text-primary">{title.span2}</span>
        </h2>
      </AnimateTitle>
      <AnimateCta>
        <CtaButton className="max-w-2/3 lg:max-w-1/2 w-full mt-6 lg:mt-12 group">
          <FaPaperPlane className="text-muted group-hover:text-primary" />
          <p className="text-muted-light font-semibold">{ctaText}</p>
        </CtaButton>
      </AnimateCta>
    </div>
  );
};

export default HeroContent;
