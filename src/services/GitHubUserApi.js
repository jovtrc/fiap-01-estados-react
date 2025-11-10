export const fetchGitHubUser = async (username) => {
  const gitHubUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(gitHubUrl);
    if (!response.ok) {
      throw new Error("Erro na consulta ao GitHub. Tente novamente.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar usuário do GitHub:", error);
  }
};
