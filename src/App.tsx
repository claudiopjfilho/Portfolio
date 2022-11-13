import { useState, useEffect } from "react";
import Cursos from "./components/Cursos";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import Repositories from "./components/Repositories";
import Techs from "./components/Techs";

function App() {
  return (
    <div className="App ">
      <div>
        <Nav />
        <Home />
        <Projects />
        <Techs />
      </div>
    </div>
  );
}

export default App;
