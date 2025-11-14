import { useContext, useState, createContext } from "react";

const ProfileContext = createContext({});

export const useProfile = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("useProfile must be used within a ProfileContextProvider");
  }

  return context;
};

export const ProfileContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [picture, setPicture] = useState("");
  const [bio, setBio] = useState("");
  const [links, setLinks] = useState([]);
  const [githubUser, setGithubUser] = useState({
    username: "",
    followers: {
      total: 0,
      enable: true,
    },
    repositories: {
      total: 0,
      enable: true,
    },
  });

  return (
    <ProfileContext
      value={{
        name,
        setName,
        role,
        setRole,
        picture,
        setPicture,
        bio,
        setBio,
        links,
        setLinks,
        githubUser,
        setGithubUser,
      }}
    >
      {children}
    </ProfileContext>
  );
};
