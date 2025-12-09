"use client";

import { useProfile } from "@/src/hooks/useProfile";
import { SignUpAuthScreen, SignInAuthScreen } from "@firebase-oss/ui-react";
import { User } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const { authenticatedUser, setAuthenticatedUser } = useProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignIn = (user: User) => {
    setAuthenticatedUser(user);
    setIsModalOpen(false);
  };

  return (
    <>
      {authenticatedUser ? (
        <div className="">Bem-vindo, {authenticatedUser.email}</div>
      ) : (
        <div
          className="bg-blue-500 text-white p-2 rounded text-center cursor-pointer hover:bg-blue-600"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Fazer login
        </div>
      )}

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 bg-opacity-50 flex items-center justify-center">
          <div
            className="bg-gray-900 text-white p-2 rounded-full size-10 text-center cursor-pointer hover:bg-gray-950 absolute top-4 right-4"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            x
          </div>
          <SignInAuthScreen
            onSignIn={(user) => {
              handleSignIn(user);
            }}
          />
        </div>
      )}
    </>
  );
};
