import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import {
  QualityDataBookCard,
  QualityDataBookCardProps,
  QualityDataBookDescriptionCard,
  QualityDataBookTitleCard,
} from "../components/quality-databook-card";

interface QualityDataBookItem {
  id: string;
  title: string;
  description: string;
  cards: QualityDataBookCardProps[];
}

const QualityDataBookLayout = ({
  id,
  title,
  description,
  cards,
}: QualityDataBookItem) => {
  return (
    <SectionLayout
      id={id}
      className="overflow-x-auto [scrollbar-width:none] bg-muted"
    >
      <ContainerLayout className="min-w-max lg:min-w-auto lg:max-w-7xl grid grid-cols-8 lg:grid-cols-4 gap-4 justify-items-start">
        <QualityDataBookTitleCard title={title} index={0} />
        {cards.map((card, index) => (
          <QualityDataBookCard key={index} {...card} index={index + 1} />
        ))}
        <QualityDataBookDescriptionCard
          description={description}
          index={cards.length + 1}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default QualityDataBookLayout;
