import {
  AnimateDescription,
  AnimateIcon,
  AnimateTitle,
} from "../animate/home-about-animate";

export interface AboutGridContentProps {
  label: string;
  text: string;
  Icon: React.ElementType;
  isMuted?: boolean;
}

const AboutGridContent = ({
  label,
  text,
  Icon,
  isMuted,
}: AboutGridContentProps) => {
  return (
    <div
      className={`flex flex-col p-4 lg:p-8 gap-4 ${isMuted ? "bg-muted text-white" : ""}`}
    >
      <AnimateIcon>
        <Icon className="text-primary size-6" />
      </AnimateIcon>
      <AnimateTitle>
        <h1 className="whitespace-pre-line">{label}</h1>
      </AnimateTitle>
      <AnimateDescription>
        <p className="mt-4">{text}</p>
      </AnimateDescription>
    </div>
  );
};

interface AboutContentProps {
  gridContents: AboutGridContentProps[];
}

const AboutContent = ({ gridContents }: AboutContentProps) => {
  return (
    <div className="w-full border border-muted grid grid-cols-1 lg:grid-cols-3">
      {gridContents.map((content, index) => (
        <AboutGridContent key={index} {...content} />
      ))}
    </div>
  );
};

export default AboutContent;
