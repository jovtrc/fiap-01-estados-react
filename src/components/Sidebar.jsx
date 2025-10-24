export const Sidebar = ({ name, role, picture, bio }) => {
  return (
    <aside className="w-3/12 p-8 min-h-screen">
      <h1 className="font-black text-2xl mb-6">Personalize seu cartão</h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="cursor-pointer font-bold">
            Seu nome:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ex: José da Silva"
            className="border border-neutral-400 py-2 px-3 rounded"
            value={name.name}
            onChange={(event) => name.setName(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="cursor-pointer font-bold">
            Seu cargo:
          </label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Ex: Engenheiro de Software"
            className="border border-neutral-400 py-2 px-3 rounded"
            value={role.role}
            onChange={(event) => role.setRole(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="cursor-pointer font-bold">
            URL da sua foto:
          </label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Ex: www.urldaminhafoto.com"
            className="border border-neutral-400 py-2 px-3 rounded"
            value={picture.picture}
            onChange={(event) => picture.setPicture(event.target.value)}
          />
        </div>

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
            value={bio.bio}
            onChange={(event) => bio.setBio(event.target.value)}
          />
        </div>
      </form>
    </aside>
  );
};
