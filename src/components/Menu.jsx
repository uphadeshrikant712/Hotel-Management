import React from "react";
import Btn from "./Btn";

const Menu = () => {
  const cards = [
    {
      id: 1,
      heading: "Tasty And Healty",
      className:"hover:bg-red-500  hover:bg-opacity-55 ease-in duration-300",
      price: "$15.99/",
      price2: "20.99",
      img: "../images/menu-1.png",
    },
    {
      id: 2,
      heading: "Tasty And Healty",
      className:
        "hover:bg-orange-500  hover:bg-opacity-55 ease-in duration-300",
      price: "$25.92/",
      price2: "10.91",
      img: "../images/menu-2.png",
    },
    {
      id: 3,
      heading: "Tasty And Healty",
      className:
        "hover:bg-green-500  hover:bg-opacity-55 ease-in duration-300",
      price: "$51.99/",
      price2: "11.99",
      img: "../images/menu-3.png",
    },
    {
      id: 4,
      heading: "Tasty And Healty",
      className:
        "hover:bg-blue-500  hover:bg-opacity-55 ease-in duration-300",
      price: "$35.99/",
      price2: "22.10",
      img: "../images/menu-4.png",
    },
    {
      id: 5,
      heading: "Tasty And Healty",
      className:
        "hover:bg-slate-300  hover:bg-opacity-55 ease-in duration-300",
      price: "$45.49/",
      price2: "40.29",
      img: "../images/menu-5.png",
    },
    {
      id: 6,
      heading: "Tasty And Healty",
      className:
        "hover:bg-yellow-400  hover:bg-opacity-55 ease-in duration-300",
      price: "$19.97/",
      price2: "10.33",
      img: "../images/menu-6.png",
    },
  ];
  return (
    <div name='MENU' className="w-full min-h-screen bg-black">
      <div className="  h-fit flex flex-col gap-2">
        <div className="heading  p-4 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white uppercase">
            our
            <span className="text-yellow-400"> menu</span>{" "}
          </h1>
        </div>
        <div className="cards  text-white max-w-screen-xl px-16 h-fit grid gap-3 md:grid-cols-3">
          {cards.map(({ id, heading, price, price2, img, className }) => (
            <div
              key={id}
              className={
                "card  border-2 border-cyan-500 px-4 py-4 bg-transparent " +
                "" +
                className
              }
            >
              <div className="cardInner flex gap-4 items-center py-10 flex-col">
                <div className="img h-20 ">
                  <img src={img} alt="" />
                </div>
                <div className="heading">
                  <h1 className="text-xl font-bold">{heading}</h1>
                </div>
                <div className="price">
                  <h1 className=" text-2xl font-semibold">
                    {price}
                    <span className=" line-through text-sm">{price2}</span>
                  </h1>
                </div>
                <div className="Butn md:w-1/2 pt-4">
                  <Btn
                    title="add to cart"
                    className="px-4 py-2 bg-green-500 hover:shadow-green-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
