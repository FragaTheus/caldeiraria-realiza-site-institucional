import { MdDeveloperBoard } from "react-icons/md";
import { AppH1 } from "./ui/app-h1";
import { AppP } from "./ui/app-p";
import { AppCard } from "./ui/app-card";

const Dev = () => {
  return (
    <main className="w-full h-svh flex items-center justify-center">
      <div className="w-full max-w-2xl p-4 m-auto">
        <AppCard className="w-full flex flex-col rounded-sm items-center justify-center shadow-md gap-4 text-center">
          <MdDeveloperBoard className="text-primary size-20" />
          <AppH1>Em desenvolvimento</AppH1>
          <AppP className="text-muted-light">
            Continue acessando para mais informações
          </AppP>
        </AppCard>
      </div>
    </main>
  );
};

export default Dev;
