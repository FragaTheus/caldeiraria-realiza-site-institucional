import { AnimateTitle } from "../../features/home/animate/home-hero-animate";
import AppForm from "@/shared/components/global/app-form";

export interface CtaFormProps {
  title: string;
  ctaText: string;
  className?: string;
}

const CtaForm = ({ title, ctaText, className }: CtaFormProps) => {
  return (
    <article
      className={`w-full text-white flex flex-col items-center justify-center  border border-white p-4 lg:p-8 rounded-sm text-center gap-8 ${className}`}
    >
      <AnimateTitle>
        <h1 className="whitespace-pre-line text-h2 lg:text-h1 tracking-tighter">
          {title}
        </h1>
      </AnimateTitle>
      <AppForm ctaText={ctaText} />
    </article>
  );
};

export default CtaForm;
