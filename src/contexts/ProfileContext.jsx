import { useState } from "react";
import { ProfileContext } from "../hooks/useProfile";
import { User } from "firebase/auth";

export const ProfileContextProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
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
        authenticatedUser,
        setAuthenticatedUser,
      }}
    >
      {children}
    </ProfileContext>
  );
};
