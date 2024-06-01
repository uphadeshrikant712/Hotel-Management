import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
  const cards = [
    {
      id: 1,
      p: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      perspiciatis laudantium laborum ea cupiditate ipsum et beatae
      nobis iste molestias.perspiciatis laudantium laborum ea
      cupiditate ipsum et beatae nobis iste molestias.`,
      img: "../images/pic-1.png",
      quote: "../images/quotes.png",
      name: "Ram Patil",
    },
    {
      id: 2,
      p: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      perspiciatis laudantium laborum ea cupiditate ipsum et beatae
      nobis iste molestias.perspiciatis laudantium laborum ea
      cupiditate ipsum et beatae nobis iste molestias.`,
      img: "../images/pic-1.png",
      quote: "../images/quotes.png",
      name: "Shyam Bharti",
    },
    {
      id: 3,
      p: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      perspiciatis laudantium laborum ea cupiditate ipsum et beatae
      nobis iste molestias.perspiciatis laudantium laborum ea
      cupiditate ipsum et beatae nobis iste molestias.`,
      img: "../images/pic-1.png",
      quote: "../images/quotes.png",
      name: "Vikas Deokar",
    },
  ];

  return (
    <div name="REVIEW" className="main w-full h-fit bg-black text-white">
      <div className="inner flex flex-col gap-6  max-w-screen-2xl h-fit px-2">
        <div className="heading flex items-center justify-center px-4 py-4">
          <h1 className="md:text-4xl text-2xl pt-4 font-bold tracking-tighter">
            CUSTOMER'S <span className="text-green-400"> REVIEW</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:px-20 py-2">
          {cards.map(({ id, name, img, quote, p }) => (
            <div className=" flex flex-col items-center gap-4 px-4 py-10 border-2 ">
              <div className="heading-quote">
                <img src={quote} alt="" />
              </div>
              <div className="paragraph md:px-2 md:py-2">
                <p className=" text-sm md:text-md leading-6 text-center">{p}</p>
              </div>
              <div className="bottom flex items-center justify-center gap-4 flex-col">
                <div className="img h-12 w-16 ">
                  <img className="object-cover rounded-full" src={img} alt="" />
                </div>
                <div className="name">
                  <h1 className="text-xl font-bold">{name}</h1>
                </div>
                <div className="rating flex">
                  <p className="text-orange-400">
                    <FaStar />
                  </p>{" "}
                  <p className="text-orange-400">
                    <FaStar />
                  </p>{" "}
                  <p className="text-orange-400">
                    <FaStar />
                  </p>{" "}
                  <p className="text-orange-400">
                    <FaStar />
                  </p>
                  <p className="text-orange-400">
                    <FaStarHalfAlt />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
