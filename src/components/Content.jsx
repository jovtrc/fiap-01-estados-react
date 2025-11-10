import { useContext } from "react";
import html2canvas from "html2canvas";
import { ProfileContext } from "../contexts/ContextList";
import { useRef } from "react";

export const Content = () => {
  const personCard = useRef();
  const { name, role, picture, bio } = useContext(ProfileContext);

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
        className="w-3xl bg-[#fafafa] h-84 p-4 flex items-center gap-6 rounded shadow-lg"
      >
        <img
          src={personPicture}
          alt={`Foto de ${personName}`}
          className="size-40 rounded-full border-5 border-[#f5f5f5] shrink-0 grow text-transparent"
        />

        <div className="w-10/12">
          <h2 className="font-black text-3xl mt-4 ml-6">{personName}</h2>
          <h3 className="font-semibold text-xl mt-2 ml-6">{personRole}</h3>
          <p className="font-normal text-base mt-4 ml-6 mr-4">{personBio}</p>
        </div>
      </div>
    </main>
  );
};
