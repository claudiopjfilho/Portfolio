import "./assets/styles/Global.css";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { Projects } from "./Components/Projects";
import { Repo } from "./Components/Repo";

function App() {
  return (
    <div>
      <Nav />
      <Home />

      <Projects />
    </div>
  );
}

export default App;
