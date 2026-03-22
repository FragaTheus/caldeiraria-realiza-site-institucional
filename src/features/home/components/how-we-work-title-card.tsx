import Line from "@/shared/components/line";
import { FadeInAnimate } from "../animate/home-hero-animate";

const HowWeWorkTitleCard = ({ title }: { title: string }) => {
  return (
    <FadeInAnimate>
      <div className="w-full max-w-7xl m-auto flex items-center justify-center relative py-4 lg:py-8">
        <h1 className="text-white absolute bg-muted px-2 lg:px-4 lg:text-h1">
          {title}
        </h1>
        <Line />
      </div>
    </FadeInAnimate>
  );
};

export default HowWeWorkTitleCard;
