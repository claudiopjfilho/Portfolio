import { useState } from "react";
import { List, X } from "phosphor-react";
import Logo from "../../public/Images/logo.svg";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="`  py-2   ${visible ? 'top-0' : ''} `">
        <div className="fixed bg-slate-900 -mt-2 h-16  z-50 flex items-center justify-between xl:max-w-full xl:mx-auto max-w-full px-[8%] flex-wrap w-full border-b border-gray-800">
          <img src={Logo} alt="logo" className="w-40 animate-pulse" />

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
            } w-full lg:flex lg:items-center lg:w-auto `}
          >
            <ul className=" mt-6  lg:mt-0 text-base text-gray-400 flex lg:flex-row flex-col gap-2 lg:justify-between ">
              <li>
                <a
                  href="https://wa.me/5585998208571"
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
