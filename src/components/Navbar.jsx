import React, { useState } from "react";
import Logo from "../images/logo.png";
import {
  FaSearch,
  FaShoppingCart,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import Btn from "./Btn";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const links = [
    {
      id: 1,
      link: "HOME",
    },
    {
      id: 2,
      link: "ABOUT",
    },
    {
      id: 3,
      link: "MENU",
    },
    {
      id: 4,
      link: "PRODUCTS",
    },
    {
      id: 5,
      link: "REVIEW",
    },
    {
      id: 6,
      link: "BLOGS",
    },
    {
      id: 7,
      link: "CONTACT",
    },
  ];
  const cart = [
    {
      id: 1,
      img: "../images/cart-item-1.png",
      title: "Cart Item 1",
      price: "$15.99/-",
    },
    {
      id: 2,
      img: "../images/cart-item-2.png",
      title: "Cart Item 1",
      price: "$15.99/-",
    },
    {
      id: 3,
      img: "../images/cart-item-3.png",
      title: "Cart Item 1",
      price: "$15.99/-",
    },
    {
      id: 4,
      img: "../images/cart-item-4.png",
      title: "Cart Item 4",
      price: "$15.99/-",
    },
  ];
  const icons = [
    {
      id: 1,
      icon: <FaInstagram />,
      classname: "shadow-red-600 bg-red-400",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      classname: "shadow-blue-600 bg-blue-400",
    },
    {
      id: 3,
      icon: <FaFacebook />,
      classname: "shadow-green-600 bg-green-400",
    },
    {
      id: 4,
      icon: <FaTelegramPlane />,
      classname: "shadow-orange-600 bg-orange-400",
    },
  ];
  return (
    <div className="w-screen  h-20 z-20 bg-black fixed ">
      {/* -------------------navbar part ------------------- */}
      <div className="desktop-mode  w-full h-full px-9 text-white flex items-center justify-between border-b-2 border-red-600 ">
        <div className=" max-w-20 flex items-center">
          <img src={Logo} alt="" />
        </div>

        <ul className="hidden md:flex items-center justify-between gap-4 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="  hover:text-yellow-300 hover:border-b-[0.1rem] border-yellow-500  text-sm cursor-pointer "
            >
              <Link to={link} smooth duration={500} offset={-75} >
              
              {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="icons flex justify-between ml-14 gap-6 ">
          <FaSearch
            onClick={() => setSearchBar(true)}
            className=" cursor-pointer hover:text-green-400 scale-150"
          />
          <FaShoppingCart
            onClick={() => setOpenCart(true)}
            className="cursor-pointer hover:text-green-400 scale-150"
          />
          {/* ------------------mobile menu -------------------- */}
          <div onClick={() => setMobileMenu(true)} className="menu md:hidden ml-2 scale-150 ">
            <LuMenu className="scale-150" />
          </div>
        </div>
      </div>

      {/* --------------SearchBar-------------- */}
      <div
        className={
          searchBar
            ? " border-none  rounded-sm   fixed right-10 flex items-center  md:gap-3 gap-3 bg-white overflow-hidden md:w-[25vw] md:h-[8vh]"
            : "hidden"
        }
      >
        <input
          className="rounded-sm outline-none bg-white text-gray-900 p-5 w-[85%] h-full"
          type="text"
          placeholder="Drop Some Text..."
        />

        <div onClick={() => setSearchBar(false)} className="paragraph">
          <p className="text-black hover:text-red-500 cursor-pointer font-bold  text-2xl text-center ">
            <RxCross1 />
          </p>
        </div>
      </div>
      {/*------------------ cart open part------------------- */}
      <div
        className={
          openCart
            ? "cart-part w-full h-full fixed ease-in duration-300 right-0 top-0 bg-gray-900/70 "
            : ""
        }
      >
        <div
          className={
            openCart
              ? "innercart md:w-[25%] w-3/2 h-full p-2 py-6 fixed right-0 top-20 ease-in duration-300 bg-white"
              : "fixed top-20 right-[-100%] h-full p-2  duration-300"
          }
        >
          <div className="w-full  grid gap-4">
            {cart.map(({ id, img, title, price }) => (
              <div key={id} className="inner flex justify-evenly gap-4">
                <div className="img w-24 h-14">
                  <img src={img} alt="" />
                </div>
                <div className="text">
                  <p className="text-xl font-bold">{title}</p>
                  <p className="text-red-300">{price}</p>
                </div>
                <div className="icon">
                  <p className=" hover:text-red-600 cursor-pointer font-bold scale-150">
                    x
                  </p>
                </div>
              </div>
            ))}
            <div className="btn mt-8">
              <Btn title="Cheackout now" className="bg-green-300 px-6 py-3" />
            </div>
            <div onClick={() => setOpenCart(false)} className="closeCartBtn">
              <Btn
                title="close cart"
                className="hover:shadow-blue-400 bg-red-400 px-4 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* --------------mobile menu part --------------------- */}
      <div
        className={
          mobileMenu
            ? "mobileMenu md:hidden w-full h-screen fixed top-0 right-0 ease-in duration-300 text-black bg-slate-900/70 backdrop-blur "
            : ""
        }
      >
        <div
          className={
            mobileMenu
              ? "mobileInner  fixed right-0 top-0 ease-in duration-300 bg-white w-3/4  h-screen"
              : " fixed h-screen top-0 right-[-100%] ease-in duration-300 "
          }
        >
          <div className="main flex flex-col items-center">
            <div
              onClick={() => setMobileMenu(false)}
              className="logo w-full h-14  flex justify-end p-4 "
            >
              <p className=" text-3xl hover:text-red-400 p-2 ">
                {" "}
                <RxCross1 />{" "}
              </p>
            </div>
            <div className="links pt-[10vw]">
              <ul className="grid gap-3">
                {links.map(({ id, link }) => (
                  <li
                    className="text-2xl tracking-widest font-bold hover:border-b hover:overflow-hidden hover:text-orange-500 hover:border-red-300"
                    key={id}
                  >
                    <Link to={link} smooth duration={500} offset={-75} >
                    
                    {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="icons w-full  h-60 ">
              <div className="iconsinner p-4 pt-[20vw] ">
                <ul className="grid grid-cols-2 gap-6">
                  {icons.map(({ id, icon, classname }) => (
                    <li
                      className={
                        "px-12 py-4 text-xl text-center rounded-md shadow-md " +
                        "" +
                        classname
                      }
                      key={id}
                    >
                      {icon}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
