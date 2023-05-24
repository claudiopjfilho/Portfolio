import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  WhatsappLogo,
  Envelope,
} from "phosphor-react";

export function Footer() {
  return (
    <div id="footer" className="  w-full p-1 bg-slate-900">
      <div className="mt-3  flex flex-col md:flex-row gap-2 justify-around mx-auto  m  w-full">
        <a
          className="flex flex-row  items-center gap-x-4 md:gap-x-2"
          href="https://www.linkedin.com/in/claudiopjfilho/"
          target={"_blank"}
        >
          <LinkedinLogo
            size={32}
            className=" text-gray-300 hover:text-blue-500 hover:animate-pulse duration-1000"
          />{" "}
          <h4 className="text-gray-300 text-sm font-normal">
            Cláudio Joventino
          </h4>
        </a>
        <a
          className="flex flex-row items-center gap-x-4 md:gap-x-2"
          href="https://www.github.com/claudiopjfilho/"
          target={"_blank"}
        >
          <GithubLogo
            size={32}
            className=" text-gray-300 hover:text-violet-600 hover:animate-pulse duration-1000"
          />
          <h4 className="text-gray-300 text-sm font-normal">@claudiopjfilho</h4>
        </a>

        <a
          className="flex flex-row items-center gap-x-4 md:gap-x-2"
          href="mailto:claudiopjfilhodev@gmail.com"
          target={"_blank"}
        >
          <Envelope
            size={32}
            className=" text-gray-300 hover:text-cyan-500 hover:animate-pulse duration-1000"
          />{" "}
          <h4 className="text-gray-300 text-sm font-normal">
            claudiopjfilhodev@gmail.com
          </h4>
        </a>
        <a
          className="flex flex-row items-center gap-x-4 md:gap-x-2"
          href="https://wa.me/5585998208571"
          target={"_blank"}
        >
          <WhatsappLogo
            size={32}
            className=" text-gray-300 hover:text-green-500 hover:animate-pulse duration-1000"
          />
          <h4 className="text-gray-300 text-sm font-normal">+5585998208571</h4>
        </a>
        <a
          className="flex flex-row items-center gap-x-4 md:gap-x-2"
          href="https://instagram.com/claudiopjfilho"
          target={"_blank"}
        >
          <InstagramLogo
            size={32}
            className=" text-gray-300 hover:text-red-500 hover:animate-pulse duration-1000"
          />{" "}
          <h4 className="text-gray-300 text-sm font-normal">@claudiopjfilho</h4>
        </a>
      </div>
      <div className="w-full h-4 "></div>
    </div>
  );
}
