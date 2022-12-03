import React, { useState } from "react";
import Cursos from "./Cursos";
import Techs from "./Techs";

export default function Tabs() {
  const [cursos, techs] = useState(false);
  return (
    <div className="" id="cursos">
      <div className="flex flex-col mx-auto  items-center justify-center w-full">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <button
                className={`${
                  cursos
                    ? " text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                    : ""
                } inline-flex p-4  rounded-t-lg border-b-2 group`}
                onClick={() => techs(!cursos)}
              >
                Cursos
              </button>
            </li>
            <li className="mr-2">
              <button
                className={`${
                  cursos
                    ? ""
                    : " text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                } inline-flex p-4  rounded-t-lg border-b-2 group`}
                onClick={() => techs(!techs)}
              >
                Techs
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <div className={`${cursos ? "show" : "hidden"}`}>
            <Cursos />
          </div>
          <div className={`${cursos ? "hidden" : "show"}`}>
            <Techs />
          </div>
        </div>
      </div>
    </div>
  );
}
