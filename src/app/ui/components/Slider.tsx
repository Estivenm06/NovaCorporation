import type { SliderProps } from "../lib/definitions";

const Slider = ({ greeting, nameUser }: SliderProps) => {
  return (
    <div className="slider text-5xl bg-[url('/img/Banner.webp')] bg-cover bg-center bg-no-repeat h-[600px] flex items-center justify-center">
      <h1 className="text-[#facc15] text-center sm:text-6xl md:text-8xl duration-250 sm:mx-10 cursor-default font-light antialised flex justify-center items-center gap-5">
        {greeting}
      <span className="text-white cursor-default text-4xl md:text-6xl shadow-2xl drop-shadow-2xl">
        {nameUser}
      </span>
      </h1>
    </div>
  );
};

export default Slider;
