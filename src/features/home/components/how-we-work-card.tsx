import { CtaButton } from "@/shared/components/ui/app-button";

export interface MainCardProps {
  title: string;
  description: string;
}

const MainCard = ({ title, description }: MainCardProps) => {
  return (
    <article className="bg-muted rounded-sm p-4 lg:p-6 w-full text-white min-h-44 lg:h-full flex flex-col gap-2 justify-between">
      <div className="flex flex-col items-start">
        <p className="font-bold mt-2">{title}</p>

        <small className="mt-10 lg:mt-20">{description}</small>
      </div>
      <div className="w-full h-px bg-primary" />
      <div className="flex flex-col items-start justify-between gap-4 lg:gap-11">
        <p>CTATitle</p>
        <small>CTADEscription</small>
        <CtaButton className="bg-primary hover:bg-primary/90">
          Fale com a Realiza
        </CtaButton>
      </div>
    </article>
  );
};

export interface MiniCardProps {
  title: string;
  description: string;
}

const MiniCard = ({ title, description }: MiniCardProps) => {
  return (
    <article className="bg-surface p-4 flex flex-col min-h-44 lg:min-h-62">
      <p className="font-bold mt-2 text-primary">{title}</p>
      <small className="text-muted-light mt-10 lg:mt-20">{description}</small>
    </article>
  );
};

export { MainCard, MiniCard };
