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
      className={`flex flex-col p-4 lg:p-12 gap-4 ${isMuted ? "bg-muted text-white" : ""}`}
    >
      <Icon className="text-primary size-6" />
      <h1 className="whitespace-pre-line">{label}</h1>
      <p>{text}</p>
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
