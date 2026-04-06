import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import ServicesGalleryLayout from "../layout/services-gallery-layout";
import { galleryItems } from "../constants/services-gallery-impl";

const ServicesGalleryWrapper = () => {
  return (
    <AppSectionWrapper id="gallery-gallery">
      <ServicesGalleryLayout
        title="Galeria de Serviços"
        galleryItems={galleryItems}
      />
    </AppSectionWrapper>
  );
};

export default ServicesGalleryWrapper;
