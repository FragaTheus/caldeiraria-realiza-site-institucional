import { AppH2 } from "@/shared/components/ui/app-h2";
import QualityCertificationCard, {
  QualityCertificationCardProps,
} from "../components/quality-certification-card";
import { FadeInDown, FadeInWithIndex } from "@/shared/components/animate";

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
      <FadeInDown>
        <AppH2 className="font-bold mb-4">{title}</AppH2>
      </FadeInDown>
      <div className="flex flex-col gap-4">
        {certifications.map((certification, index) => (
          <FadeInWithIndex key={index} index={index}>
            <QualityCertificationCard
              key={index}
              Icon={certification.Icon}
              title={certification.title}
              description={certification.description}
              imageSrc={certification.imageSrc}
            />
          </FadeInWithIndex>
        ))}
      </div>
    </div>
  );
};

export default QualityCertificationLayout;
