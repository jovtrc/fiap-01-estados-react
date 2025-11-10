import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { ProfileContextProvider } from "./contexts/ProfileContext";

function App() {
  return (
    <ProfileContextProvider>
      <div className="flex divide-x divide-neutral-300">
        <Sidebar />
        <Content />
      </div>
    </ProfileContextProvider>
  );
}

export default App;
