import Link from "next/link";
import EngGalleryCards, {
  EngGalleryCardsProps,
} from "../compoenents/eng-gallery-cards";

interface EngGalleryLayoutProps {
  title: string;
  description: string;
  cards: EngGalleryCardsProps[];
}

const EngGalleryLayout = ({
  title,
  description,
  cards,
}: EngGalleryLayoutProps) => {
  return (
    <div className="w-full min-h-10 grid grid-cols-1 lg:grid-cols-2 relative">
      <div className="mb-4">
        <h1 className="font-black tracking-tighter whitespace-pre-line">
          {title}
        </h1>
        <h2 className="font-light text-muted-light hidden lg:block whitespace-pre-line mt-8 max-w-3/4">
          {description}
        </h2>
        <Link href={"#eng-cta"} className="hidden lg:block mt-8 w-1/2">
          <button className="bg-primary/10 border border-primary p-2 rounded-sm text-primary w-full cursor-pointer hover:bg-primary/20 transition-colors">
            Fazer orçamento
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center">
        {cards.map((card, index) => (
          <EngGalleryCards
            key={index}
            imageUrl={card.imageUrl}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EngGalleryLayout;
