import { GithubFields } from "./ProfileEditor/GithubFields";
import { UserFields } from "./ProfileEditor/UserFields";

export const Sidebar = () => {
  return (
    <aside className="w-3/12 p-8 min-h-screen">
      <h1 className="font-black text-2xl mb-6">Personalize seu cartão</h1>

      <form className="flex flex-col gap-4">
        <GithubFields />
        <UserFields />
      </form>
    </aside>
  );
};
