import React from "react";
import Btn from "./Btn";

const Blogs = () => {
  const cards = [
    {
      id: 1,
      title: "Tasty And Refreshing Spices",
      p1: "By Admin / 21st May, 2021",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente hic laborum",
      img: "../images/blog-1.jpeg",
    },
    {
      id: 2,
      title: "Tasty And Refreshing Spices",
      p1: "By Admin / 21st May, 2021",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente hic laborum",
      img: "../images/blog-2.jpeg",
    },
    {
      id: 3,
      title: "Tasty And Refreshing Spices",
      p1: "By Admin / 21st May, 2021",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente hic laborum",
      img: "../images/blog-3.jpeg",
    },
  ];
  return (
    <div name="BLOGS" className="main w-full h-fit bg-black text-white ">
      <div className="inner max-w-screen-xl h-fit flex flex-col gap-6">
        <div className="heading flex items-center justify-center  py-8">
          <h1 className="text-4xl font-bold tracking-tight">
            OUR
            <span className="text-green-400 "> BLOGS</span>
          </h1>
        </div>
        <div className="secondDiv grid md:grid-cols-3 gap-4 px-6 md:px-[10vw] py-2">
          {cards.map(({ id, p1, para, title, img }) => (
            <div
              key={id}
              className="card border-2 flex flex-col justify-evenly "
            >
              <div className="image hover:scale-105 ease-in duration-300">
                <img src={img} alt="" />
              </div>
              <div className="text px-4  py-6 flex flex-col gap-2">
                <div className="heading">
                  <h1 className="text-3xl font-semibold">{title}</h1>
                </div>
                <div className="p1">
                  <p className="text-xl font-lg">{p1}</p>
                </div>
                <div className="p2 pt-2">
                  <p className="text-md">{para}</p>
                </div>
                <div className="Btn md:w-1/2 mt-4">
                  <Btn title="read more" className="px-4 py-2 bg-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
