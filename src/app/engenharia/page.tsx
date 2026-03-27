import EngCapacityWrapper from "@/features/engenharia/wrapper/eng-capacity-wrapper";
import EngIntroWrapper from "@/features/engenharia/wrapper/eng-intro-wrapper";
import EngWhyWrapper from "@/features/engenharia/wrapper/eng-why";
//import EngGalleryWrapper from "@/features/engenharia/wrapper/eng-gallery-wrapper";

export default function Engenharia() {
  return (
    <main>
      <EngIntroWrapper />
      <EngCapacityWrapper />
      {/* <EngGalleryWrapper /> */}
      <EngWhyWrapper />
    </main>
  );
}
