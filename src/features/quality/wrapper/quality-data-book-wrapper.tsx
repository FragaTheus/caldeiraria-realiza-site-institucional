import { QualityDataBookCardProps } from "../components/quality-databook-card";
import QualityDataBookLayout from "../layouts/quality-databook-layout";
import textContent from "@/features/quality/text-content/qualityDatabookTextContent.json";
import {
  TbAtom,
  TbClipboardList,
  TbDroplet,
  TbEye,
  TbRulerMeasure,
  TbUserCheck,
} from "react-icons/tb";

const QualityDataBookWrapper = () => {
  return (
    <QualityDataBookLayout
      id="quality-databook"
      title={textContent.databook_section.headline}
      description={textContent.databook_section.description}
      cards={cards}
    />
  );
};

const cards = [
  {
    index: 0,
    Icon: TbEye,
    description: textContent.databook_section.items.item_1,
  },
  {
    index: 1,
    Icon: TbDroplet,
    description: textContent.databook_section.items.item_2,
  },
  {
    index: 2,
    Icon: TbUserCheck,
    description: textContent.databook_section.items.item_3,
  },
  {
    index: 3,
    Icon: TbClipboardList,
    description: textContent.databook_section.items.item_4,
  },
  {
    index: 4,
    Icon: TbRulerMeasure,
    description: textContent.databook_section.items.item_5,
  },
  {
    index: 5,
    Icon: TbAtom,
    description: textContent.databook_section.items.item_6,
  },
] satisfies QualityDataBookCardProps[];

export default QualityDataBookWrapper;
