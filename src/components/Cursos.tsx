import React from "react";

export default function Cursos() {
  return (
    <div id="cursos" className="w-full px-2">
      <div className="text-zinc-400 text-md md:text-xl flex flex-col ml-12  md:flex-row  justify-around ">
        <div id="exp" className="">
          <ul className="mb-6">
            <h2 className="mb-4 text-3xl md:text-4xl text-indigo-600 font-extrabold font-mono">
              Experiência
            </h2>
            <div className="ml-4 md:ml-6">
              <li>
                <h1 className="text-2xl font-bold text-slate-50">
                  Estagiário - Analista de Sistemas
                </h1>
                <p>Início: setembro/2022 - Atualmente</p>
              </li>
            </div>
          </ul>
        </div>
        <div id="cursos">
          <ul>
            <h2 className="mb-4  text-3xl md:text-4xl text-indigo-600 font-extrabold font-mono">
              Cursos
            </h2>
            <div className="ml-4 md:ml-6 ">
              <li className="mb-8">
                <h1 className="text-2xl font-bold text-slate-50">Wyden</h1>
                <p>Análise e desenvolvimento de sistemas</p>
                <p>Início: agosto/2021 - Atualmente</p>
              </li>
              <li className="mb-8">
                <h1 className="text-2xl font-bold text-slate-50">
                  Universidade Federal do Ceará
                </h1>
                <p>Finanças</p>
                <p>01/2017 - 07/2020</p>
              </li>
              <li className="mb-8">
                <h1 className="text-2xl font-bold text-slate-50">Rocketseat</h1>
                <p>NLW</p>
                <p>IgniteLab</p>
                <p>Maratona Explorer</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
