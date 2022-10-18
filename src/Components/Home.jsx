export function Home() {
  return (
    <div className="font-mono  bg-gray-900 w-full h-96">
      <div classname="mx-auto">
        <section className="mt-8 mx-auto flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          <div className="">
            <h2 className=" text-base text-gray-400">
              <span className="font-bold text-gray-200"> - </span> Me chamo:
            </h2>
            <h1 className="font-extrabold text-4xl text-gray-300">
              Cláudio <span className="text-violet-600"> Joventino.</span>
            </h1>
          </div>
          <img
            src="https://github.com/claudiopjfilho.png"
            alt=""
            className="rounded-lg w-80"
          />
        </section>
      </div>
    </div>
  );
}
