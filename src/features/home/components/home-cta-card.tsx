import { AnimateTitle } from "../animate/home-hero-animate";
import AppForm from "@/shared/components/global/app-form";

export interface HomeCtaCardProps {
  title: string;
}

const HomeCtaCard = ({ title }: HomeCtaCardProps) => {
  return (
    <article className="w-full text-white flex flex-col items-center justify-center  border border-white p-4 lg:p-8 rounded-sm text-center gap-8">
      <AnimateTitle>
        <h1 className="whitespace-pre-line text-h2 lg:text-h1">{title}</h1>
      </AnimateTitle>
      <AppForm />
    </article>
  );
};

export default HomeCtaCard;
