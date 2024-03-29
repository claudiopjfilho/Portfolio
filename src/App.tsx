import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import Tabs from "./components/Tabs";
import GitHubRepos from "./components/Repositories";

function App() {
  return (
    <div className="App  ">
      <div>
        <Nav />
        <Home />
        <Projects />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
