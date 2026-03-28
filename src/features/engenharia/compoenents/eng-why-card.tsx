export interface EngWhyCardProps {
  Icon: React.ElementType;
  title: string;
  desc: string;
}

const EngWhyCard = ({ Icon, title, desc }: EngWhyCardProps) => {
  return (
    <div className="w-full p-4 lg:p-8">
      <Icon className="size-8 text-primary" />
      <h3 className="font-semibold mt-4 lg:mt-8 whitespace-pre-line text-2xl">
        {title}
      </h3>
      <p className="font-light mt-4 lg:mt-8 whitespace-pre-line lg:whitespace-normal text-base">
        {desc}
      </p>
    </div>
  );
};

export default EngWhyCard;
