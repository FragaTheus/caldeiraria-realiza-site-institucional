import QualityCertificationCard, {
  QualityCertificationCardProps,
} from "../components/quality-certification-card";

interface QualityCertificationLayoutProps {
  title: string;
  certifications: QualityCertificationCardProps[];
}

const QualityCertificationLayout = ({
  title,
  certifications,
}: QualityCertificationLayoutProps) => {
  return (
    <div className="w-full">
      <h3 className="text-4xl font-bold tracking-tighter whitespace-pre-line mb-4">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {certifications.map((certification, index) => (
          <QualityCertificationCard
            key={index}
            Icon={certification.Icon}
            title={certification.title}
            description={certification.description}
            imageSrc={certification.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default QualityCertificationLayout;
