import { useState } from "react";
import { ProfileContext } from "../hooks/useProfile";

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
