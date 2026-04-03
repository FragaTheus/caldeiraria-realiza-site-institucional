import { AppH3 } from "@/shared/components/ui/app-h3";
import { AppP } from "@/shared/components/ui/app-p";
import { AppCard } from "@/shared/components/ui/app-card";
import Link from "next/link";
import { FaTools } from "react-icons/fa";

export interface ServicesCardProps {
  isTitleCard?: boolean;
  title?: string;
  headerTitle?: string;
  HeaderIcon?: React.ElementType;
  description?: string;
  isLastCard?: boolean;
}

const ServicesCard = ({
  isTitleCard,
  title,
  headerTitle,
  HeaderIcon,
  description,
}: ServicesCardProps) => {
  return (
    <Link href={"/servicos"}>
      <AppCard
        variant={isTitleCard ? "outlined" : "default"}
        className={`relative min-h-70 lg:min-h-90 flex flex-col hover:scale-101 active:scale-99 transition-transform`}
      >
        {isTitleCard ? (
          <div className="flex-1 flex items-start relative">
            <FaTools className="text-primary absolute top-4 right-4 size-8" />
            <AppH3 className="font-bold">{title}</AppH3>
          </div>
        ) : (
          <>
            <div className="flex w-full items-center justify-between">
              {headerTitle && (
                <AppP className="font-semibold">{headerTitle}</AppP>
              )}
              {HeaderIcon && <HeaderIcon className="size-4" />}
            </div>
            <div className="h-px w-full bg-muted-light/10 mt-2" />
            {description && (
              <AppP className="mt-8 text-muted-light font-light">
                {description}
              </AppP>
            )}
          </>
        )}
      </AppCard>
    </Link>
  );
};

export { ServicesCard };
