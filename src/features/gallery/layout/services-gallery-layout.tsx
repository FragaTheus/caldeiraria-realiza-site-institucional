import { AppH2 } from "@/shared/components/ui/app-h2";
import ServiceCard, { ServiceCardProps } from "../component/service-card";

export interface ServiceGalleryLayoutProps {
  title: string;
  galleryItems: ServiceCardProps[];
}

const ServiceGalleryLayout = ({
  title,
  galleryItems,
}: ServiceGalleryLayoutProps) => {
  return (
    <>
      <AppH2 className="mb-4">{title}</AppH2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {galleryItems.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default ServiceGalleryLayout;
