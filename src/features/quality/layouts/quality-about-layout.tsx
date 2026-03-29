import { FadeInDown } from "@/shared/components/animate";
import AppGrid, {
  AboutGridContentProps,
} from "@/shared/components/grid-content";
import { AppH2 } from "@/shared/components/ui/app-h2";

interface QualityAboutLayoutProps {
  title: string;
  gridContents: AboutGridContentProps[];
}

const QualityAboutLayout = ({
  title,
  gridContents,
}: QualityAboutLayoutProps) => {
  return (
    <div className="w-full">
      <FadeInDown>
        <AppH2 className="font-bold mb-4">{title}</AppH2>
      </FadeInDown>
      <AppGrid gridContents={gridContents} />
    </div>
  );
};

export default QualityAboutLayout;
