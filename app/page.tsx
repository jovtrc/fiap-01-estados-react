"use client";

import { Content } from "@/src/components/Content";
import { Sidebar } from "@/src/components/Sidebar";
import { ProfileContextProvider } from "@/src/contexts/ProfileContext";
import { ui } from "@/src/config/firebase";
import { FirebaseUIProvider } from "@firebase-oss/ui-react";

export default function Home() {
  return (
    <FirebaseUIProvider ui={ui}>
      <ProfileContextProvider>
        <div className="flex divide-x divide-neutral-300">
          <Sidebar />
          <Content />
        </div>
      </ProfileContextProvider>
    </FirebaseUIProvider>
  );
}
