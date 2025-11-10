import { useContext, useEffect, useState } from "react";
import { InputWithLabel } from "../Common/InputWithLabel";
import { fetchGitHubUser } from "../../services/GitHubUserApi";
import { ProfileContext } from "../../contexts/ContextList";

export const GithubFields = () => {
  const [githubUser, setGithubUser] = useState("");
  const [showUserFollowers, setShowUserFollowers] = useState(true);
  const [showUserRepositories, setShowUserRepositories] = useState(true);

  const { setName, setRole, setPicture } = useContext(ProfileContext);

  useEffect(() => {
    async function fetchGithubData() {
      if (githubUser.trim() === "") return;

      try {
        const data = await fetchGitHubUser(githubUser);

        if (data) {
          setName(data.name || "");
          setRole(data.bio || "");
          setPicture(data.avatar_url || "");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    }

    fetchGithubData();
  }, [githubUser, setName, setRole, setPicture]);

  return (
    <>
      <InputWithLabel
        labelName="Seu usuário do Github:"
        name="githubUser"
        id="githubUser"
        placeholder="Ex: jovtrc"
        value={githubUser}
        onChange={(event) => setGithubUser(event.target.value)}
      />

      <div className="flex gap-2 mb-2 border-b border-neutral-300 pb-4 justify-between">
        <label htmlFor="showUserFollowers">
          <input
            type="checkbox"
            id="showUserFollowers"
            name="showUserFollowers"
            className="mr-1"
          />
          Mostrar seguidores
        </label>

        <label htmlFor="showUserRepositories">
          <input
            type="checkbox"
            id="showUserRepositories"
            name="showUserRepositories"
            className="mr-1"
          />
          Mostrar repositórios
        </label>
      </div>
    </>
  );
};
