import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import Repositories from "./components/Repositories";

function App() {
  return (
    <div className="App ">
      <div>
        <Nav />
        <Home />
        <Projects />
      </div>
    </div>
  );
}

export default App;
