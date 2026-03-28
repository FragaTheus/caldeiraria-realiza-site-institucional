import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import QualityIntroLayout from "../layouts/quality-intro-layout";

const QualityIntroWrapper = () => {
  return (
    <SectionLayout id="quality-intro" className="h-svh">
      <ContainerLayout>
        <QualityIntroLayout />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default QualityIntroWrapper;
