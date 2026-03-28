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
        <h2 className="whitespace-pre-line tracking-tighter text-2xl lg:text-4xl font-black">
          {title}
        </h2>
      </AnimateTitle>
      <AppForm ctaText={ctaText} />
    </article>
  );
};

export default CtaForm;
