import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import HowWeWorkCard, {
  GridContentProps,
} from "../../components/how-we-work-card";
import textContent from "@/features/home/text-content/howWorkTextContent.json";
import HowWeWorkTitleCard from "../../components/how-we-work-title-card";

const HowWeWorkWrapper = () => {
  return (
    <SectionLayout className="bg-muted">
      <ContainerLayout className="flex flex-col gap-4">
        <HowWeWorkTitleCard title={textContent.process_section.section_title} />
        <HowWeWorkCard grids={grids} />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default HowWeWorkWrapper;

const grids = [
  {
    step: textContent.process_section.step_1.step,
    title: textContent.process_section.step_1.title,
    description: textContent.process_section.step_1.description,
  },
  {
    step: textContent.process_section.step_2.step,
    title: textContent.process_section.step_2.title,
    description: textContent.process_section.step_2.description,
  },
  {
    step: textContent.process_section.step_3.step,
    title: textContent.process_section.step_3.title,
    description: textContent.process_section.step_3.description,
  },
  {
    step: textContent.process_section.step_4.step,
    title: textContent.process_section.step_4.title,
    description: textContent.process_section.step_4.description,
  },
] satisfies GridContentProps[];
