"use client";

import Line from "@/shared/components/line";
import useIsMobile from "../hooks/useIsMobile";

const HowWeWorkTitleCard = ({ title }: { title: string }) => {
  const isMobile = useIsMobile();
  return (
    <article className="w-full max-w-7xl m-auto border border-white p-4 lg:p-8 flex items-center justify-start gap-10">
      <h1 className="text-white">{title}</h1>
      {!isMobile && <Line width={"65%"} />}
    </article>
  );
};

export default HowWeWorkTitleCard;
