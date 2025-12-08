import { InputWithLabel } from "../Common/InputWithLabel";
import { useProfile } from "../../hooks/useProfile";

export const LinksFields = () => {
  const { links, setLinks } = useProfile();

  const handleAddLink = () => {
    const newLink = {
      id: "link-" + (links.length + 1),
      url: "",
      label: "",
    };

    setLinks([...links, newLink]);
  };

  const handleChangeLink = (id, field, value) => {
    const updatedLinks = links.map((link) => {
      if (link.id === id) {
        return { ...link, [field]: value };
      }

      return link;
    });

    setLinks(updatedLinks);
  };

  return (
    <div>
      {links.map((link) => {
        return (
          <div className="grid grid-cols-2 gap-4 mb-4" key={link.id}>
            <InputWithLabel
              labelName="Título do Link:"
              name="link-label"
              id="link-label"
              placeholder="Ex: Meu Site"
              value={link.label}
              onChange={(event) =>
                handleChangeLink(link.id, "label", event.target.value)
              }
            />
            <InputWithLabel
              type="url"
              labelName="URL:"
              name="link-url"
              id="link-url"
              placeholder="Ex: www.meusite.com"
              value={link.url}
              onChange={(event) =>
                handleChangeLink(link.id, "url", event.target.value)
              }
            />
          </div>
        );
      })}

      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer hover:bg-blue-600"
        onClick={handleAddLink}
      >
        Adicionar link
      </button>
    </div>
  );
};
