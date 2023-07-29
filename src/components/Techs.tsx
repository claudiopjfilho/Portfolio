import { Minus } from "phosphor-react";

export default function Techs() {
  return (
    <div className=" font-mono md:mx-auto mx-10 flex flex-col items-center px-2">
      <div className=" mx-auto flex flex-col justify-center items-center w-full mb-10">
        <h1 className="flex items-center text-center text-lg md:text-4xl gap-2 text-indigo-600 mx-auto ">
          <Minus size={32} color="#bebebe" /> Tecnologias front-end
        </h1>
        <ul className="grid grid-cols-4 2xl:flex 2xl:flex-row mt-8 md:mt-12 gap-6 xl:gap-x-20">
          <li className="">
            <img
              className="w-32 hover:animate-spin"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
          </li>
          <li>
            <img
              className="w-32 hover:animate-ping "
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            />
          </li>
          <li>
            <img
              className="w-32 hover:animate-pulse"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            />
          </li>

          <li>
            <img
              className="w-32 hover:animate-pulse"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            />
          </li>
          <li>
            <img
              className="w-32 hover:animate-pulse"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            />
          </li>
          <li>
            <img
              className="w-32 hover:animate-pulse"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
          </li>
          <li>
            <img
              className="w-32 hover:animate-pulse"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
          </li>
          <li>
            <img
              className="w-32 hover:animate-pulse"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            />
          </li>
        </ul>
        <div className="flex flex-col md:flex-row mt-4 md:mt-16 mx-auto gap-2 xl:gap-20">
          <img
            className="h-48 xl:h-64"
            src="https://github-readme-stats.vercel.app/api?username=claudiopjfilho&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          />
          <img
            className="h-48 xl:h-64"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=claudiopjfilho&layout=compact&langs_count=7&theme=dracula"
          />
        </div>
      </div>
    </div>
  );
}
