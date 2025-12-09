import { Auth } from "@/src/components/Auth/Auth";
import { GithubFields } from "./ProfileEditor/GithubFields";
import { LinksFields } from "./ProfileEditor/LinksFields";
import { UserFields } from "./ProfileEditor/UserFields";

export const Sidebar = () => {
  return (
    <aside className="w-3/12 p-8 min-h-screen">
      <Auth />
      <h1 className="font-black text-2xl mb-6">Personalize seu cartão</h1>

      <form className="flex flex-col gap-8 divide-y divide-neutral-300">
        <GithubFields />
        <UserFields />
        <LinksFields />
      </form>
    </aside>
  );
};
