import {
  AnimateCta,
  AnimateHeadline,
  FadeInAnimate,
  AnimateTitle,
} from "@/features/home/animate/home-hero-animate";
import { CtaButton } from "@/shared/components/ui/app-button";
import { FaPhone } from "react-icons/fa6";

interface AppHeroCardProps {
  headline: string;
  title: string;
  videoSrc: string;
  ctaText: string;
}

const AppHeroCard = ({
  headline,
  title,
  videoSrc,
  ctaText,
}: AppHeroCardProps) => {
  return (
    <article className="w-full rounded-md grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 bg-surface gap-4">
      <div className="flex flex-col lg:mr-20 order-last lg:order-first">
        <AnimateHeadline>
          <small className="text-primary">{headline}</small>
        </AnimateHeadline>
        <div className="flex flex-col flex-1 items-center justify-evenly">
          <AnimateTitle>
            <h2 className="mt-4 md:mt-8 lg:text-h1">{title}</h2>
          </AnimateTitle>
        </div>
        <AnimateCta>
          <CtaButton className="bg-primary lg:w-1/2 hover:bg-primary/80 mt-4 lg:mt-8">
            <FaPhone className="size-4 lg:size-6" />
            <span>{ctaText}</span>
          </CtaButton>
        </AnimateCta>
      </div>

      <FadeInAnimate>
        <div className="flex flex-col order-first lg:order-last">
          <video
            className="object-cover w-full max-h-45 lg:max-h-90"
            autoPlay
            muted
            poster="logo-c-fundo.jpg"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </FadeInAnimate>
    </article>
  );
};

export default AppHeroCard;
