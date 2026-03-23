import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import AboutContent, {
  AboutGridContentProps,
} from "../components/about-content";
import textContent from "@/features/home/text-content/aboutTextContent.json";
import { FaIndustry } from "react-icons/fa";
import { FaAward, FaCheck } from "react-icons/fa6";

const aboutGridContents = [
  {
    label: textContent.about_section.grid_1.label,
    text: textContent.about_section.grid_1.text,
    Icon: FaIndustry,
    isMuted: true,
  },
  {
    label: textContent.about_section.grid_2.label,
    text: textContent.about_section.grid_2.text,
    Icon: FaAward,
    isMuted: false,
  },
  {
    label: textContent.about_section.grid_3.label,
    text: textContent.about_section.grid_3.text,
    Icon: FaCheck,
    isMuted: false,
  },
] satisfies AboutGridContentProps[];

const HomeAboutWrapper = () => {
  return (
    <AppSectionWrapper id="sobre">
      <AboutContent gridContents={aboutGridContents} />
    </AppSectionWrapper>
  );
};

export default HomeAboutWrapper;
