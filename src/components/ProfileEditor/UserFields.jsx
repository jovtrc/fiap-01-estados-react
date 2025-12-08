import { InputWithLabel } from "../Common/InputWithLabel";
import { useProfile } from "../../hooks/useProfile";

export const UserFields = () => {
  const { name, setName, role, setRole, picture, setPicture, bio, setBio } =
    useProfile();

  return (
    <div className="pb-8">
      <InputWithLabel
        labelName="Seu nome:"
        name="name"
        id="name"
        placeholder="Ex: José da Silva"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <InputWithLabel
        labelName="Seu cargo:"
        name="role"
        id="role"
        placeholder="Ex: Engenheiro de Software"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />

      <InputWithLabel
        labelName="URL da sua foto:"
        name="image"
        id="image"
        placeholder="Ex: www.urldaminhafoto.com"
        value={picture}
        onChange={(event) => setPicture(event.target.value)}
      />

      <div className="flex flex-col gap-1">
        <label htmlFor="bio" className="cursor-pointer font-bold">
          Resumo:
        </label>
        <textarea
          name="bio"
          id="bio"
          placeholder="Ex: Trabalho como desenvolvedor há 10 anos..."
          className="border border-neutral-400 py-2 px-3 rounded h-40"
          maxLength="200"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
      </div>
    </div>
  );
};
