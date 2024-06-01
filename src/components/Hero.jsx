import React from "react";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div name='HOME' className="w-full h-screen">
      <div className="image   w-full h-full bg-cover md:bg-center  bg-[url('../images/home-img.png')]">
        <div className="text w-full flex flex-col md:gap-6 gap-10 h-screen px-12 pt-20 bg-black/70">
          <div className="heading w-full md:w-[55vw] ">
            <h1 className="  md:text-6xl text-3xl text-white md:leading-[5.5vw] text-center md:text-start md:pt-20 pt-[27vw] md:px-6 tracking-tight font-bold ">
              FRESH
              <span className="text-yellow-500"> FOOD IN THE </span>
              MORNING
            </h1>
          </div>

          <p className=" md:w-[50vw] w-full text-lg font-mono md:px-8 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            nemo omnis necessitatibus incidunt amet dicta.
          </p>
          <div className="btn md:px-8 md:w-[25vw]">
            <Btn title="get yours now" className="px-6 py-3 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
