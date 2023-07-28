import { useEffect, useState } from "react";

import { Minus } from "phosphor-react";
import repoEcommerce from "../assets/images/repositories/Images/repoEcommerce.png";
import repoIgniteLab from "../assets/images/repositories/Images/repoIgniteLab.png";
import repoEsports from "../assets/images/repositories/Images/repoEsportsIgnite.png";
import repoDoctorCare from "../assets/images/repositories/Images/repoDoctorCare.png";

export function Projects() {
  return (
    <div
      id="projects"
      className=" mx-auto flex flex-col items-center my-20 bg-gray-900 pb-10"
    >
      <div className="mt-4 mx-auto flex  justify-center items-center w-full">
        <h2 className="flex items-center text-lg gap-2 text-zinc-300">
          <Minus size={32} color="#bebebe" /> Projetos
        </h2>
      </div>
      <div className="grid grid-cols-2 justify-evenly  sm:gap-6 px-8   2xl:grid-cols-4 xl:gap-20    mt-16">
        <a
          target={"_blank"}
          href="https://github.com/claudiopjfilho/EventPlatform"
          className="relative  rounded-lg overflow-hidden w-72 h-32 mx-auto sm:w-60 sm:h-32 lg:w-80 lg:h-44 xl:w-96 xl:h-60 hover:shadow-md hover:scale-110  transition ease-in-out delay-150  hover:-translate-y-1  duration-300"
        >
          <img
            src={repoIgniteLab}
            alt=""
            className="object-cover w-full h-full "
          />
          <div className="w-full bg-gradient-to-t from-black  pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-lg text-white  block">
              Ignite Lab | ReactJS
            </strong>

            <a className="text-zinc-300 text-sm block mt-1">
              Link do repositório
            </a>
          </div>
        </a>
        <a
          target={"_blank"}
          href="https://loja-construcao.vercel.app"
          className="relative rounded-lg overflow-hidden w-72 h-32 mx-auto sm:w-60 sm:h-32 lg:w-80 lg:h-44 xl:w-96 xl:h-60 hover:shadow-md hover:scale-110  transition ease-in-out delay-150  hover:-translate-y-1  duration-300"
        >
          <img
            src={repoEcommerce}
            alt=""
            className=" object-cover w-full h-full "
          />

          <div className="w-full bg-gradient-to-t from-black  pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">E-commerce</strong>

            <a
              href="https://github.com/claudiopjfilho/LojaConstrucao"
              target={"_blank"}
            >
              <span className="text-zinc-300 text-sm block mt-1">
                Link do repositório
              </span>
            </a>
          </div>
        </a>
        <a
          target={"_blank"}
          href="https://github.com/claudiopjfilho/NLW-E-Sports-Ignite"
          className="relative  rounded-lg overflow-hidden w-72 h-32 mx-auto sm:w-60 sm:h-32 lg:w-80 lg:h-44 xl:w-96 xl:h-60 hover:shadow-md hover:scale-110  transition ease-in-out delay-150  hover:-translate-y-1  duration-300"
        >
          <img
            src={repoEsports}
            alt=""
            className="object-cover w-full h-full "
          />
          <div className="w-full bg-gradient-to-t from-black  pt-16 pb-4 px-4  absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              NLW- E-Sports
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">
              Link do repositório
            </span>
          </div>
        </a>
        <a
          target={"_blank"}
          href="https://github.com/claudiopjfilho/doctorCare"
          className="relative rounded-lg overflow-hidden w-72 h-32 mx-auto sm:w-60 sm:h-32 lg:w-80 lg:h-44 xl:w-96 xl:h-60 hover:shadow-md hover:scale-110  transition ease-in-out delay-150  hover:-translate-y-1  duration-300"
        >
          <img
            src={repoDoctorCare}
            alt=""
            className="object-cover w-full h-full "
          />
          <div className="w-full bg-gradient-to-t from-black  pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">DoctorCare</strong>

            <span className="text-zinc-300 text-sm block mt-1">
              Link do repositório
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
