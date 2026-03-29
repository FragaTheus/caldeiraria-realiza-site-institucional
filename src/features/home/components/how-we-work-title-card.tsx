import Line from "@/shared/components/line";
import { AppH2 } from "@/shared/components/ui/app-h2";
import { FadeIn } from "@/shared/components/animate";

const HowWeWorkTitleCard = ({ title }: { title: string }) => {
  return (
    <FadeIn>
      <div className="w-full max-w-7xl m-auto flex items-center justify-center relative py-4 lg:py-8">
        <AppH2 className="text-white absolute bg-muted px-2 lg:px-4 text-3xl">
          {title}
        </AppH2>
        <Line />
      </div>
    </FadeIn>
  );
};

export default HowWeWorkTitleCard;
