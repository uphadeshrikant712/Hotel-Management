import React from "react";
import Btn from "./Btn";

const About = () => {
  return (
    <div name='ABOUT' className="w-full h-screen bg-black px-4 md:py-20 ">
      <div className="innner w-full h-full flex flex-col  justify-evenly items-center">
        <div className="heading">
          <h1 className=" text-3xl md:text-4xl text-white uppercase font-bold">
            <span className="text-yellow-400">about </span>
            us
          </h1>
        </div>
        <div className="card md:flex gap-4 md:p-12">
          <div className="card-img w-full object-cover ">
            <img src="../images/about-img.png" alt="" />
          </div>
          <div className="card-info w-full text-white md:h-full bg-gray-900">
            <div className="inner p-8 px-6 flex flex-col gap-4">
              <div className="heading">
                <h3 className=" md:text-3xl text-xl font-bold">
                  What Makes Our Food Special?
                </h3>
              </div>
              <div className="para-1">
                <p className="md:text-lg font-[Gilroy] text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem perferendis cum reiciendis id eveniet necessitatibus
                  minus tenetur alias amet ad?
                </p>
              </div>
              <div className="para-2">
                <p
                  className="md:text-lg font-[Gilroy] text-base"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur architecto porro eveniet suscipit impedit sapiente
                  modi amet quo delectus est.
                </p>
              </div>
              <div className="btn md:w-1/2 pt-4">
                <Btn title="learn more" className="px-8 py-2 bg-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
