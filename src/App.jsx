import { useState } from "react";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [picture, setPicture] = useState();
  const [bio, setBio] = useState();

  return (
    <div className="flex divide-x divide-neutral-300">
      <Sidebar
        name={{ name, setName }}
        role={{ role, setRole }}
        picture={{ picture, setPicture }}
        bio={{ bio, setBio }}
      />
      <Content
        name={{ name, setName }}
        role={{ role, setRole }}
        picture={{ picture, setPicture }}
        bio={{ bio, setBio }}
      />
    </div>
  );
}

export default App;
