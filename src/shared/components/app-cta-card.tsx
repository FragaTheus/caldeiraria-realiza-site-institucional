import dynamic from "next/dynamic";
import { FadeInDown } from "./animate";
import { AppH2 } from "@/shared/components/ui/app-h2";
import { AppCard } from "@/shared/components/ui/app-card";

const AppForm = dynamic(() => import("@/shared/components/global/app-form"));

export interface CtaFormProps {
  title: string;
  ctaText: string;
  className?: string;
}

const CtaForm = ({ title, ctaText, className }: CtaFormProps) => {
  return (
    <AppCard
      variant="outlined"
      className={`w-full text-white flex flex-col items-center justify-center border-white rounded-sm text-center gap-8 ${className}`}
    >
      <FadeInDown>
        <AppH2 className="text-2xl">{title}</AppH2>
      </FadeInDown>
      <AppForm ctaText={ctaText} />
    </AppCard>
  );
};

export default CtaForm;
