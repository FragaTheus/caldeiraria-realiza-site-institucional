import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export interface ServicesCardProps {
  isTitleCard?: boolean;
  title?: string;
  headerTitle?: string;
  HeaderIcon?: React.ElementType;
  subtitle?: string;
  description?: string;
}

const ServicesCard = ({
  isTitleCard,
  title,
  headerTitle,
  HeaderIcon,
  subtitle,
  description,
}: ServicesCardProps) => {
  return (
    <Link href={"/servicos"}>
      <article
        className={`min-h-60 bg-surface p-4 md:p-6 flex flex-col hover:scale-101 active:scale-99 transition-transform ${isTitleCard ? "border border-primary" : ""}`}
      >
        {isTitleCard ? (
          <div className="flex-1 flex items-center justify-between text-primary">
            <h1 className=" font-bold whitespace-pre-line my-auto">{title}</h1>
            <BiChevronRight className="size-20 animate-pulse inline md:hidden" />
          </div>
        ) : (
          <>
            <div className="flex w-full items-center justify-between">
              {headerTitle && <p className="font-semibold">{headerTitle}</p>}
              {HeaderIcon && <HeaderIcon className="size-6" />}
            </div>
            <div className="flex-col flex mt-20 text-muted-light gap-2">
              {subtitle && <p>{subtitle}</p>}
              <div className="h-px w-full bg-muted-light/10" />
              {description && <p>{description}</p>}
            </div>
          </>
        )}
      </article>
    </Link>
  );
};

export { ServicesCard };
