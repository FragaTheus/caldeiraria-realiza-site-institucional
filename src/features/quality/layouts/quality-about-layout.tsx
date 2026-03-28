import AppGrid, {
  AboutGridContentProps,
} from "@/shared/components/grid-content";

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
      <h2 className="text-4xl font-bold tracking-tighter mb-4 whitespace-pre-line">
        {title}
      </h2>
      <AppGrid gridContents={gridContents} />
    </div>
  );
};

export default QualityAboutLayout;
