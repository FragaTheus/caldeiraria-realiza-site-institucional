import { AppSmall } from "@/shared/components/ui/app-small";

export interface BadgesProps {
  item: string;
  Icon: React.ElementType;
}

const Badges = ({ item, Icon }: BadgesProps) => {
  return (
    <div className="flex gap-2 items-center mt-2">
      <Icon className="text-primary size-4" />
      <AppSmall className="text-muted-light font-light">{item}</AppSmall>
    </div>
  );
};

export default Badges;
