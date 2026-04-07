import Image, { StaticImageData } from "next/image";
import { ContainerLayout, SectionLayout } from "./section-layout";
import Line from "../components/line";
import { AppH1 } from "../components/ui/app-h1";
import { AppP } from "../components/ui/app-p";
import { AppSmall } from "../components/ui/app-small";
import {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "../components/animate";

interface IntroLayoutProps {
  id: string;
  small: string;
  title: string;
  description: string;
  imgSrc: StaticImageData;
  imgClassname?: string;
}

const IntroLayout = ({
  id,
  small,
  title,
  description,
  imgSrc,
  imgClassname,
}: IntroLayoutProps) => {
  return (
    <SectionLayout
      id={id}
      className="w-full flex items-center justify-center relative h-svh "
    >
      <FadeIn>
        <div className="absolute bottom-0 left-0 bg-primary/10 z-10 h-full w-full max-h-1/6" />
      </FadeIn>
      <FadeIn>
        <Image
          src={imgSrc}
          alt={title}
          className={`bottom-0 left-0 absolute object-cover max-h-1/6 bg-primary -z-10 ${imgClassname}`}
          sizes="100vw"
          quality={70}
        />
      </FadeIn>
      <ContainerLayout>
        <div className="flex flex-col items-start">
          <FadeInDown>
            <AppSmall className="font-bold text-primary">{small}</AppSmall>
          </FadeInDown>
          <FadeInLeft delay={0.2}>
            <AppH1 className="mt-4">{title}</AppH1>
          </FadeInLeft>
          <FadeInLeft delay={0.3}>
            <Line className="max-w-1/3 lg:max-w-1/6 my-4" />
          </FadeInLeft>
          <FadeInUp delay={0.4}>
            <AppP className="font-light lg:whitespace-pre-line text-muted-light max-w-3/4 text-sm lg:text-base">
              {description}
            </AppP>
          </FadeInUp>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
};

export default IntroLayout;
