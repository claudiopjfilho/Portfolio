import { useState } from "react";
import { List } from "phosphor-react";
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="border-b border-gray-800 bg-slate-900 py-2">
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          <img
            src="https://github.com/claudiopjfilho.png"
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <List
            color="white "
            width={30}
            height={30}
            className="lg:hidden block  h-6  w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="gap-8  text-base text-gray-400 lg:flex block justify-between ">
              <li>
                <a
                  href=""
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-300 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-300 font-semibold"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-300 font-semibold"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-300 font-semibold"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
