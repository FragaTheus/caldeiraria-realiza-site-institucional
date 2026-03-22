import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import { MiniCardProps } from "../../components/how-we-work-card";
import HowWeWorkLayout from "../../layouts/how-work-layout";
import textContent from "@/features/home/text-content/howWorkTextContent.json";

const HowWeWorkMobileWrapper = () => {
  return (
    <AppSectionWrapper>
      <HowWeWorkLayout
        miniCards={MOBILE_PROCESS_STEPS}
        mainCard={mainCardImpl}
      />
    </AppSectionWrapper>
  );
};

const MOBILE_PROCESS_STEPS = [
  {
    title: textContent.process_section.mobile.step_1.title,
    description: textContent.process_section.mobile.step_1.description,
  },
  {
    title: textContent.process_section.mobile.step_2.title,
    description: textContent.process_section.mobile.step_2.description,
  },
  {
    title: textContent.process_section.mobile.step_3.title,
    description: textContent.process_section.mobile.step_3.description,
  },
  {
    title: textContent.process_section.mobile.step_4.title,
    description: textContent.process_section.mobile.step_4.description,
  },
] satisfies MiniCardProps[];

const mainCardImpl = {
  title: "Title",
  description: "Description",
};

export default HowWeWorkMobileWrapper;
