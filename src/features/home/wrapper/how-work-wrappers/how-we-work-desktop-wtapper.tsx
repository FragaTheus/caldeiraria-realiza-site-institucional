import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import { MiniCardProps } from "../../components/how-we-work-card";
import HowWeWorkLayout from "../../layouts/how-work-layout";
import textContent from "@/features/home/text-content/howWorkTextContent.json";

const HowWeWorkDesktopWrapper = () => {
  return (
    <AppSectionWrapper>
      <HowWeWorkLayout miniCards={DESKTOP_PROCESS_STEPS} />
    </AppSectionWrapper>
  );
};

const DESKTOP_PROCESS_STEPS = [
  {
    step: textContent.process_section.desktop.step_1.step,
    title: textContent.process_section.desktop.step_1.title,
    description: textContent.process_section.desktop.step_1.description,
  },
  {
    step: textContent.process_section.desktop.step_2.step,
    title: textContent.process_section.desktop.step_2.title,
    description: textContent.process_section.desktop.step_2.description,
  },
  {
    step: textContent.process_section.desktop.step_3.step,
    title: textContent.process_section.desktop.step_3.title,
    description: textContent.process_section.desktop.step_3.description,
  },
  {
    step: textContent.process_section.desktop.step_4.step,
    title: textContent.process_section.desktop.step_4.title,
    description: textContent.process_section.desktop.step_4.description,
  },
] satisfies MiniCardProps[];

export default HowWeWorkDesktopWrapper;
