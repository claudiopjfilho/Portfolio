import {
  Minus,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  InstagramLogo,
  RedditLogo,
  WhatsappLogo,
} from "phosphor-react";

export function Home() {
  return (
    <div className="font-mono  w-full">
      <div className="mx-auto">
        <section className="mt-16 xl:mt-20 mx-auto flex flex-col md:flex-row items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          <div className="">
            <h2 className="mb-3 flex items-center text-base gap-2 text-gray-400">
              <Minus size={32} color="#dddddd" />
              Olá, meu nome é:
            </h2>
            <h1 className="font-extrabold xl:text-4xl text-2xl text-gray-300">
              Cláudio <span className="text-indigo-600"> Joventino.</span>
            </h1>
            <p className=" mt-3 text-md lg:w-96 w-80 text-gray-400 font-normal">
              Sou analista de sistemas e Desenvolvedor Front-end, proficiência
              em React, TailwindCSS, CSS, JavaScript e ReactNative.
            </p>
            <div className="mt-3 flex items-center gap-4  w-60">
              <a
                href="https://www.linkedin.com/in/claudiopjfilho/"
                target={"_blank"}
              >
                <LinkedinLogo
                  size={32}
                  className=" text-gray-300 hover:text-blue-500 hover:animate-pulse duration-1000"
                />
              </a>
              <a
                href="https://www.github.com/claudiopjfilho/"
                target={"_blank"}
              >
                <GithubLogo
                  size={32}
                  className=" text-gray-300 hover:text-violet-600 hover:animate-pulse duration-1000"
                />
              </a>
              <a href="https://twitter.com/claudiopjfilho" target={"_blank"}>
                <TwitterLogo
                  size={32}
                  className=" text-gray-300 hover:text-cyan-500 hover:animate-pulse duration-1000"
                />
              </a>
              <a href="https://www.reddit.com/user/Kr4WD" target={"_blank"}>
                <RedditLogo
                  size={32}
                  className=" text-gray-300 hover:text-orange-500 hover:animate-pulse duration-1000"
                />
              </a>
              <a href="https://wa.me/5585998208571" target={"_blank"}>
                <WhatsappLogo
                  size={32}
                  className=" text-gray-300 hover:text-green-500 hover:animate-pulse duration-1000"
                />
              </a>
            </div>
          </div>
          <img
            src="https://github.com/claudiopjfilho.png"
            alt=""
            className="rounded-lg w-80 xl:mt-0 mt-9 mb-4 flex"
          />
        </section>
      </div>
    </div>
  );
}
