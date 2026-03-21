import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import AboutContent, {
  AboutGridContentProps,
} from "../components/about-content";
import textContent from "@/features/home/text-content/aboutTextContent.json";
import { FaIndustry } from "react-icons/fa";
import { BsAward, BsPatchCheck } from "react-icons/bs";

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
    Icon: BsAward,
    isMuted: false,
  },
  {
    label: textContent.about_section.grid_3.label,
    text: textContent.about_section.grid_3.text,
    Icon: BsPatchCheck,
    isMuted: false,
  },
] satisfies AboutGridContentProps[];

const HomeAboutWrapper = () => {
  return (
    <AppSectionWrapper>
      <AboutContent gridContents={aboutGridContents} />
    </AppSectionWrapper>
  );
};

export default HomeAboutWrapper;
