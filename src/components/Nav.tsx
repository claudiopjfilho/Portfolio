import { useState } from "react";
import { List, X } from "phosphor-react";
import Logo from "../assets/images/logo.svg";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header id="home" className="`  py-2   ${visible ? 'top-0 ' : ''} `">
        <div className="fixed   z-50 -mt-2 h-16  flex items-center justify-between xl:max-w-full xl:mx-auto max-w-full px-[8%] flex-wrap w-full bg-slate-900  ">
          <div
            className={`${open ? "fixed " : ""}flex justify-between z-40
            w-80
            `}
          >
            <img src={Logo} alt="logo" className="w-40 animate-pulse" />

            <List
              color="white "
              width={30}
              height={30}
              className="lg:hidden block  h-6  w-6 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <nav
            className={`${
              open ? " flex   " : "hidden"
            } bg-slate-900 p-3 rounded-lg  z-0 ml-64  lg:flex lg:items-center lg:w-auto `}
          >
            <ul className=" mt-12  lg:mt-0 text-base text-gray-300 flex lg:flex-row flex-col gap-2 lg:justify-between ">
              <li>
                <a
                  href="#home"
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-200 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-200 font-semibold"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-200 font-semibold"
                >
                  Projetos
                </a>
              </li>

              <li>
                <a
                  href="#footer"
                  className="lg:px-5 py-2 transition-all duration-700 hover:text-gray-200 font-semibold"
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
