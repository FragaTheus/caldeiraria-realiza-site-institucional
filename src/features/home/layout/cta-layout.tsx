import Image, { StaticImageData } from "next/image";
import HomeCtaContent, {
  HomeCtaContentProps,
} from "../components/home-cta-card";

interface CtaLayoutProps {
  imgSrc: StaticImageData;
  cardContent: HomeCtaContentProps;
}

const CtaLayout = ({ imgSrc, cardContent }: CtaLayoutProps) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-surface p-4 rounded-sm">
        <Image
          src={imgSrc}
          alt="Imagem do trabalho da empresa"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <HomeCtaContent {...cardContent} />
    </div>
  );
};

export default CtaLayout;
