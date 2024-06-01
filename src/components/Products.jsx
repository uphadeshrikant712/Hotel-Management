import React from "react";
import { FaHeart, FaShoppingCart, FaEye,FaStar,FaStarHalfAlt } from "react-icons/fa";

const Products = () => {
  const cards = [
    {
      id: 1,
      title: "Fresh Coffee",
      price1: "$15.99/",
      price2: "$20.99",
      img: "../images/product-1.png",
      icon1: <FaShoppingCart />,
      icon2: <FaHeart />,
      icon3: <FaEye />,
    },
    {
      id: 2,
      title: "Fresh Coffee",
      price1: "$15.99/",
      price2: "$20.99",
      img: "../images/product-3.png",
      icon1: <FaShoppingCart />,
      icon2: <FaHeart />,
      icon3: <FaEye />,
    },
    {
      id: 3,
      title: "Fresh Coffee",
      price1: "$15.99/",
      price2: "$20.99",
      img: "../images/product-3.png",
      icon1: <FaShoppingCart />,
      icon2: <FaHeart />,
      icon3: <FaEye />,
    },
  ];
  return (
    <div name='PRODUCTS' className="w-full h-fit bg-black">
      <div className=" max-w-screen-xl text-white h-full px-4 py-6 flex flex-col items-center gap-[3vw]">
        <div className="heading  text-4xl pt-2 font-bold uppercase">
          <h1>
            our
            <span className="text-red-500 tracking-tight  "> products</span>
          </h1>
        </div>

        <div className="grid  md:grid-cols-3 gap-12">
          {cards.map(
            ({ id, img, title, price1, price2, icon1, icon2, icon3 }) => (
              <div key={id} className="div px-4 py-2 border-2 border-red-500">
                <div className="upperIcons flex items-center justify-center gap-4 px-2 py-4">
                  <div className="icon1 border hover:bg-orange-500 border-green-400 px-4 py-4">
                    <h1 className="text-xl">{icon1}</h1>
                  </div>
                  <div className="icon1 hover:bg-orange-500 border border-orange-600 px-4 py-4">
                    <h1 className="text-xl">{icon2}</h1>
                  </div>
                  <div className="icon1 hover:bg-orange-500 border border-blue-500 px-4 py-4">
                    <h1 className="text-xl">{icon3}</h1>
                  </div>
                </div>
                <div className="img flex items-center justify-center w-full md:h-[20vw]">
                  <img className="object-cover  h-full" src={img} alt="" />
                </div>
                <div className="bottomDiv flex flex-col items-center gap-2">
                  <div className="heading">
                    <h1 className="text-2xl font-bold">{title}</h1>
                  </div>
                  <div className="feedback flex">
                    <p className="text-red-400">
                      <FaStar/>
                    </p>
                    <p className="text-red-400">
                      <FaStar/>
                    </p><p className="text-red-400">
                      <FaStar/>
                    </p><p className="text-red-400">
                      <FaStar/>
                    </p><p className="text-red-400">
                      <FaStarHalfAlt />
                    </p>
                  </div>
                  <div className="price">
                    <h1 className="text-xl font-semibold">
                      {price1}
                      <span className="line-through text-sm">{price2}</span>
                    </h1>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
