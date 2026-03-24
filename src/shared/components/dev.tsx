import { MdAddCard, MdDeveloperBoard, MdLocalDining } from "react-icons/md";

const Dev = () => {
  return (
    <main className="w-full h-svh flex items-center justify-center">
      <div className="w-full max-w-2xl p-4 m-auto">
        <article className="bg-surface p-4 w-full flex flex-col rounded-sm items-center justify-center shadow-md gap-4 text-center">
          <MdDeveloperBoard className="text-primary size-20" />
          <h1>Em desenvolvimento</h1>
          <p className="text-muted-light">
            Continue acessando para mais informações
          </p>
        </article>
      </div>
    </main>
  );
};

export default Dev;
