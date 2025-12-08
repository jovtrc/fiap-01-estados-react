import html2canvas from "html2canvas";
import { Fragment, useRef } from "react";
import { useProfile } from "../hooks/useProfile";

export const Content = () => {
  const personCard = useRef();
  const { name, role, picture, bio, links, githubUser } = useProfile();

  const personName = name || "Nome da pessoa";
  const personRole = role || "Cargo da pessoa";
  const personPicture = picture || "https://thispersondoesnotexist.com";
  const personBio =
    bio ||
    "Resumo sobre a pessoa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const handleCapture = async () => {
    const canvas = await html2canvas(personCard.current);
    const dataURL = canvas.toDataURL("image/jpeg", 1.0);

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "screenshot.png";
    link.click();
  };

  return (
    <main className="w-9/12 p-8 flex justify-center items-center">
      <button
        className="bg-green-400 px-4 py-2 text-white rounded cursor-pointer fixed bottom-4 right-4 z-10"
        onClick={handleCapture}
      >
        Salvar cartão
      </button>

      <div
        ref={personCard}
        className="bg-[#fafafa] w-3xl rounded shadow-lg overflow-hidden"
      >
        <div className="px-4 py-8 flex items-center gap-6 ">
          <img
            src={personPicture}
            alt={`Foto de ${personName}`}
            className="size-40 rounded-full border-5 border-[#f5f5f5] shrink-0 grow text-transparent"
          />

          <div className="w-10/12">
            <h2 className="font-black text-3xl mt-4 ml-6">{personName}</h2>
            <h3 className="font-semibold text-xl mt-2 ml-6">{personRole}</h3>

            {!githubUser.followers.enable &&
            !githubUser.repositories.enable ? null : (
              <div className="flex gap-4 mt-4 ml-6">
                {githubUser.followers.enable && (
                  <p className="text-sm">
                    <span className="font-bold">Seguidores</span>{" "}
                    {githubUser.followers.total || 0}
                  </p>
                )}

                {githubUser.repositories.enable && (
                  <p className="text-sm">
                    <span className="font-bold">Repositórios</span>{" "}
                    {githubUser.repositories.total || 0}
                  </p>
                )}
              </div>
            )}
            <p className="font-normal text-base mt-4 ml-6 mr-4">{personBio}</p>
          </div>
        </div>

        <div className="border-t-2 px-4 py-8">
          <h2>Links</h2>
          {links.map((link) => (
            <Fragment key={link.id}>
              {link.url && (
                <a
                  href={link.url}
                  className="block text-blue-500 underline mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label || link.url}
                </a>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};
