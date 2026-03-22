import { BiChevronRight } from "react-icons/bi";

const MainCard = () => {
  return (
    <article className="bg-muted rounded-sm p-4 w-full text-white min-h-40 lg:h-full">
      Teste
    </article>
  );
};

export interface MiniCardProps {
  step: string;
  title: string;
  description: string;
}

const MiniCard = ({ step, title, description }: MiniCardProps) => {
  return (
    <article className="bg-surface p-4 flex flex-col min-h-40 lg:min-h-62">
      <p className="text-primary">{step}</p>
      <p className="text-muted font-bold mt-2">{title}</p>

      <small className="text-muted-light mt-8 lg:mt-16">{description}</small>
    </article>
  );
};

export { MainCard, MiniCard };
