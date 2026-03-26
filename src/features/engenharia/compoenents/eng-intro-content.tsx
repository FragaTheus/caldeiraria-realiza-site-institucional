import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
  ctaLabel: string;
  ctaHref: string;
}

const ContentGrid = ({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: ContentGridProps) => {
  return (
    <div className="order-last lg:order-first flex flex-col m-auto">
      <small className="text-primary font-semibold">{eyebrow}</small>
      <h1 className="text-3xl lg:text-7xl font-black tracking-tighter lg:whitespace-pre-line mt-2 lg:mt-4">
        {title}
      </h1>
      <p className="mt-4 lg:whitespace-pre-line">{description}</p>
      <Link href={ctaHref} className="mt-4 lg:mt-8 lg:max-w-2/3">
        <button className=" border w-full bg-primary/5 text-primary hover:bg-primary/10 p-2 rounded-sm gap-2 cursor-pointer">
          <span>{ctaLabel}</span>
        </button>
      </Link>
    </div>
  );
};

interface EngIntroContentProps {
  img1: StaticImageData;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

const EngIntroContent = ({
  img1,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: EngIntroContentProps) => {
  return (
    <article className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20 bg-surface rounded-sm p-4 border border-muted/20">
      <ImgGrid hrefImg1={img1} />
      <ContentGrid
        eyebrow={eyebrow}
        title={title}
        description={description}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />
    </article>
  );
};

export default EngIntroContent;
