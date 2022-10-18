import "./Global.css";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="bg-gray-900 w-full h-100% bg-cover">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
