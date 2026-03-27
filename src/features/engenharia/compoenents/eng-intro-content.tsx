import Image, { StaticImageData } from "next/image";

const ImgGrid = ({ hrefImg1 }: { hrefImg1: StaticImageData }) => {
  return (
    <div className="order-first lg:order-last flex">
      <Image src={hrefImg1} alt="Eng Intro" className="w-2/3 m-auto" priority />
    </div>
  );
};

interface ContentGridProps {
  eyebrow?: string;
  title: string;
  description: string;
}

const ContentGrid = ({ eyebrow, title, description }: ContentGridProps) => {
  return (
    <div className="order-last lg:order-first flex flex-col m-auto">
      <small className="text-primary font-semibold">{eyebrow}</small>
      <h1 className="text-3xl lg:text-7xl font-black tracking-tighter lg:whitespace-pre-line mt-2 lg:mt-4">
        {title}
      </h1>
      <p className="mt-4 lg:whitespace-pre-line">{description}</p>
    </div>
  );
};

interface EngIntroContentProps {
  img1: StaticImageData;
  eyebrow: string;
  title: string;
  description: string;
}

const EngIntroContent = ({
  img1,
  eyebrow,
  title,
  description,
}: EngIntroContentProps) => {
  return (
    <article className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20 rounded-sm border border-muted/20 p-4 lg:p-8">
      <ImgGrid hrefImg1={img1} />
      <ContentGrid eyebrow={eyebrow} title={title} description={description} />
    </article>
  );
};

export default EngIntroContent;
