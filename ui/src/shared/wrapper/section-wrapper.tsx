import { ContainerLayout, SectionLayout } from "../layouts/section-layout";

interface AppSectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

const AppSectionWrapper = ({ id, children }: AppSectionWrapperProps) => {
  return (
    <SectionLayout id={id}>
      <ContainerLayout>{children}</ContainerLayout>
    </SectionLayout>
  );
};

export default AppSectionWrapper;
