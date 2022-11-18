import Cursos from "./components/Cursos";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import Tabs from "./components/Tabs";
import Techs from "./components/Techs";

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
