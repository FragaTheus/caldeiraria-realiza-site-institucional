export interface EngWhyCardProps {
  Icon: React.ElementType;
  title: string;
  desc: string;
}

const EngWhyCard = ({ Icon, title, desc }: EngWhyCardProps) => {
  return (
    <div className="w-full p-4 lg:p-8">
      <Icon className="size-5 lg:size-6 text-primary" />
      <h3 className="font-semibold mt-4 lg:mt-8 whitespace-pre-line">
        {title}
      </h3>
      <p className="text-muted-light font-light mt-4 lg:mt-8 whitespace-pre-line lg:whitespace-normal">
        {desc}
      </p>
    </div>
  );
};

export default EngWhyCard;
