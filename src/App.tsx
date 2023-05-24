import Cursos from "./components/Cursos";
import { Footer } from "./components/Footer";
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
        <Tabs />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
