import { useState } from "react";
import { ProfileContext } from "./ContextList";

export const ProfileContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [picture, setPicture] = useState("");
  const [bio, setBio] = useState("");

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
      }}
    >
      {children}
    </ProfileContext>
  );
};
