import { ContainerLayout, SectionLayout } from "../layouts/section-layout";

const AppSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SectionLayout>
      <ContainerLayout>{children}</ContainerLayout>
    </SectionLayout>
  );
};

export default AppSectionWrapper;
