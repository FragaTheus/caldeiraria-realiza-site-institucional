import { AppH3 } from "./ui/app-h3";
import { AppP } from "./ui/app-p";
import { FadeInUp } from "./animate";

export interface AboutGridContentProps {
  label: string;
  text: string;
  Icon: React.ElementType;
  isMuted?: boolean;
}

const AppGridContent = ({
  label,
  text,
  Icon,
  isMuted,
  index = 0,
}: AboutGridContentProps & { index?: number }) => {
  return (
    <FadeInUp delay={0.1 * index}>
      <div
        className={`flex flex-col p-4 lg:p-8 gap-4 ${isMuted ? "bg-muted text-white" : ""}`}
      >
        <div>
          <Icon className="text-primary size-8" />
        </div>
        <div>
          <AppH3 className="text-3xl">{label}</AppH3>
        </div>
        <div>
          <AppP className="mt-4">{text}</AppP>
        </div>
      </div>
    </FadeInUp>
  );
};

interface AboutContentProps {
  gridContents: AboutGridContentProps[];
}

const AppGrid = ({ gridContents }: AboutContentProps) => {
  return (
    <div className="w-full border border-muted grid grid-cols-1 lg:grid-cols-3">
      {gridContents.map((content, index) => (
        <AppGridContent key={index} {...content} index={index} />
      ))}
    </div>
  );
};

export default AppGrid;
