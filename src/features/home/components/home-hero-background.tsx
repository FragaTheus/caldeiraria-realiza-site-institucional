import heroBg from "@/shared/assets/hero-bg-img.jpg";
import Image from "next/image";

const HomeHeroBackground = () => {
  return (
    <div className="h-svh w-full -z-50 absolute top-0 left-0">
      <div className="absolute inset-0 z-10 bg-linear-170 from-black via-muted/50 to-transparent" />
      <Image
        src={heroBg}
        alt="Imagem de soldador"
        fill
        className="object-cover object-[68%_50%]"
      />
    </div>
  );
};

export default HomeHeroBackground;
