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
      <article
        className={`relative min-h-60 lg:min-h-66 bg-surface p-4 lg:p-8 flex flex-col hover:scale-101 active:scale-99 transition-transform ${isTitleCard ? "border border-primary bg-transparent" : ""}`}
      >
        {isTitleCard ? (
          <div className="flex-1 flex items-start relative">
            <FaTools className="text-primary absolute top-4 right-4 size-12" />
            <h1 className="font-bold whitespace-pre-line">{title}</h1>
          </div>
        ) : (
          <>
            <div className="flex w-full items-center justify-between">
              {headerTitle && <p className="font-semibold">{headerTitle}</p>}
              {HeaderIcon && <HeaderIcon className="size-6" />}
            </div>
            <div className="h-px w-full bg-muted-light/10 mt-2" />
            {description && (
              <p className="mt-8 text-muted-light">{description}</p>
            )}
          </>
        )}
      </article>
    </Link>
  );
};

export { ServicesCard };
