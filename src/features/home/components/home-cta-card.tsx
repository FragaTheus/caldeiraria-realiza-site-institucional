import { CtaButton } from "@/shared/components/ui/app-button";
import {
  AnimateCta,
  AnimateDescription,
  AnimateTitle,
} from "../animate/home-hero-animate";

export interface HomeCtaCardProps {
  title: string;
  description: string;
  ctaText: string;
}

const HomeCtaCard = ({ title, description, ctaText }: HomeCtaCardProps) => {
  return (
    <article className="w-full text-white flex flex-col items-center justify-center  border border-white p-4 lg:p-8 rounded-sm text-center gap-8">
      <AnimateTitle>
        <h1 className="whitespace-pre-line">{title}</h1>
      </AnimateTitle>
      <AnimateDescription>
        <p className="whitespace-pre-line">{description}</p>
      </AnimateDescription>
      <AnimateCta>
        <CtaButton className="bg-primary hover:bg-primary/80">
          {ctaText}
        </CtaButton>
      </AnimateCta>
    </article>
  );
};

export default HomeCtaCard;
