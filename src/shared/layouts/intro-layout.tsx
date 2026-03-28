import Image, { StaticImageData } from "next/image";
import { ContainerLayout, SectionLayout } from "./section-layout";
import Line from "../components/line";

interface IntroLayoutProps {
  id: string;
  title: string;
  description: string;
  imgSrc: StaticImageData;
}

const IntroLayout = ({ id, title, description, imgSrc }: IntroLayoutProps) => {
  return (
    <SectionLayout
      id={id}
      className="w-full flex items-center justify-center relative h-svh lg:max-h-[80svh]"
    >
      <Image
        src={imgSrc}
        alt={title}
        className="bottom-0 left-0 absolute object-cover max-h-1/6"
      />
      <ContainerLayout>
        <div className="flex flex-col items-start">
          <h1 className="font-black tracking-tighter whitespace-pre-line text-5xl lg:text-7xl">
            {title}
          </h1>
          <Line className="max-w-1/3 lg:max-w-1/6 my-4" />
          <p className="font-light whitespace-pre-line text-muted-light max-w-3/4">
            {description}
          </p>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
};

export default IntroLayout;
