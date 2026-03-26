import EngCapacityWrapper from "@/features/engenharia/wrapper/eng-capacity-wrapper";
import EngIntroWrapper from "@/features/engenharia/wrapper/eng-intro-wrapper";

export default function Engenharia() {
  return (
    <main>
      <EngIntroWrapper />
      <EngCapacityWrapper />
    </main>
  );
}
