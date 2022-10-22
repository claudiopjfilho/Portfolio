import { Minus } from "phosphor-react";
import repoEcommerce from "../../public/Images/repoEcommerce.png";
import repoIgniteLab from "../../public/Images/repoIgniteLab.png";
import repoEsports from "../../public/Images/repoEsportsIgnite.png";
import repoDoctorCare from "../../public/Images/repoDoctorCare.png";

export function Projects() {
  return (
    <div className=" mx-auto flex flex-col items-center my-20">
      <div className="mt-4 mx-auto flex  justify-center items-center w-full">
        <h2 className="flex items-center text-lg gap-2 text-gray-500">
          <Minus size={32} color="#bebebe" /> Projetos
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 px-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 md:gap-12 xl:gap-20    mt-16">
        <a
          href=""
          className="relative rounded-lg overflow-hidden w-72 h-32 mx-auto sm:w-60 sm:h-32 lg:w-80 lg:h-44 xl:w-96 xl:h-60 hover:shadow-md hover:scale-110  transition ease-in-out delay-150  hover:-translate-y-1  duration-300"
        >
          <img
            src={repoIgniteLab}
            alt=""
            className="object-cover w-full h-full "
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-lg text-white  block">
              Ignite Lab | ReactJS
            </strong>

            <a className="text-zinc-300 text-sm block mt-1">
              Link do repositório
            </a>
          </div>
        </a>
        <a
          href=""
          className="relative rounded-lg overflow-hidden w-72 h-32 mx-auto sm:w-60 sm:h-32 lg:w-80 lg:h-44 xl:w-96 xl:h-60 hover:shadow-md hover:scale-110  transition ease-in-out delay-150  hover:-translate-y-1  duration-300"
        >
          <img
            src={repoEcommerce}
            alt=""
            className="object-cover w-full h-full "
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a
          href=""
          className="relative rounded-lg overflow-hidden w-72 h-32 mx-auto sm:w-60 sm:h-32 lg:w-80 lg:h-44 xl:w-96 xl:h-60 hover:shadow-md hover:scale-110  transition ease-in-out delay-150  hover:-translate-y-1  duration-300"
        >
          <img
            src={repoEsports}
            alt=""
            className="object-cover w-full h-max "
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a
          href=""
          className="relative rounded-lg overflow-hidden w-72 h-32 mx-auto sm:w-60 sm:h-32 lg:w-80 lg:h-44 xl:w-96 xl:h-60 hover:shadow-md hover:scale-110  transition ease-in-out delay-150  hover:-translate-y-1  duration-300"
        >
          <img
            src={repoDoctorCare}
            alt=""
            className="object-cover w-full h-full "
          />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
            <strong className="font-bold text-white block">
              League Of Legends
            </strong>

            <span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
          </div>
        </a>
      </div>
    </div>
  );
}
