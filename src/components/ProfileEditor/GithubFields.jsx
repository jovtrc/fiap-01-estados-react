import { useEffect } from "react";
import { InputWithLabel } from "../Common/InputWithLabel";
import { fetchGitHubUser } from "../../services/GitHubUserApi";
import { useProfile } from "../../hooks/useProfile";

export const GithubFields = () => {
  const { setName, setRole, setPicture, githubUser, setGithubUser } =
    useProfile();

  useEffect(() => {
    async function fetchGithubData() {
      if (githubUser.username.trim() === "") return;

      try {
        const data = await fetchGitHubUser(githubUser.username);

        if (data) {
          setName(data.name || "");
          setRole(data.bio || "");
          setPicture(data.avatar_url || "");
          setGithubUser((prev) => ({
            ...prev,
            followers: {
              ...prev.followers,
              total: data.followers || 0,
            },
            repositories: {
              ...prev.repositories,
              total: data.public_repos || 0,
            },
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    }

    fetchGithubData();
  }, [githubUser, setName, setRole, setPicture, setGithubUser]);

  return (
    <div className="pb-8">
      <InputWithLabel
        labelName="Seu usuário do Github:"
        name="githubUser"
        id="githubUser"
        placeholder="Ex: jovtrc"
        value={githubUser.username}
        onChange={(event) =>
          setGithubUser((prev) => ({
            ...prev,
            username: event.target.value,
          }))
        }
      />

      <div className="flex gap-2 border-neutral-300 justify-between">
        <label htmlFor="showUserFollowers">
          <input
            type="checkbox"
            id="showUserFollowers"
            name="showUserFollowers"
            className="mr-1"
            checked={githubUser.followers.enable}
            onChange={(event) =>
              setGithubUser((prev) => ({
                ...prev,
                followers: {
                  ...prev.followers,
                  enable: event.target.checked,
                },
              }))
            }
          />
          Mostrar seguidores
        </label>

        <label htmlFor="showUserRepositories">
          <input
            type="checkbox"
            id="showUserRepositories"
            name="showUserRepositories"
            className="mr-1"
            checked={githubUser.repositories.enable}
            onChange={(event) =>
              setGithubUser((prev) => ({
                ...prev,
                repositories: {
                  ...prev.repositories,
                  enable: event.target.checked,
                },
              }))
            }
          />
          Mostrar repositórios
        </label>
      </div>
    </div>
  );
};
