import Image, { StaticImageData } from "next/image";
import { ContainerLayout, SectionLayout } from "./section-layout";
import Line from "../components/line";

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
      className="w-full flex items-center justify-center relative h-svh lg:max-h-[80svh]"
    >
      <div className="absolute bottom-0 left-0 bg-primary/10 z-10 h-full w-full max-h-1/6" />
      <Image
        src={imgSrc}
        alt={title}
        className={`bottom-0 left-0 absolute object-cover max-h-1/6 bg-primary -z-10 ${imgClassname}`}
      />
      <ContainerLayout>
        <div className="flex flex-col items-start">
          <small className="text-sm font-bold text-primary">{small}</small>
          <h1 className="font-black tracking-tighter whitespace-pre-line text-5xl lg:text-7xl mt-4">
            {title}
          </h1>
          <Line className="max-w-1/3 lg:max-w-1/6 my-4" />
          <p className="font-light lg:whitespace-pre-line text-muted-light max-w-3/4 text-sm lg:text-base">
            {description}
          </p>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
};

export default IntroLayout;
