import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <FaFacebook />,
    },
    {
      id: 2,
      icon: <FaTwitter />,
    },
    {
      id: 3,
      icon: <FaInstagram />,
    },
    {
      id: 4,
      icon: <FaLinkedin />,
    },
    {
      id: 5,
      icon: <FaPinterest />,
    },
  ];
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
      link: "CONTACT",
    },
    {
      id: 7,
      link: "BLOGS",
    },
  ];
  return (
    <div className="footer w-full h-fit bg-black text-white px-3 py-12">
      <div className="inner w-full h-full flex flex-col items-center justify-center py-12 gap-10">
        <div className="icons flex items-center justify-center gap-4">
          {icons.map(({ id, icon }) => (
            <p
              className="text-2xl cursor-pointer hover:bg-green-600 ease-in duration-300 rounded-full border border-green-600 px-3 py-3"
              key={id}
            >
              {icon}
            </p>
          ))}
        </div>
        <div className="navbar grid grid-cols-3 md:flex items-center justify-center gap-4">
          {/* className={`text-lg font-light ${index === 4 && "ml-[4vw] "}`} */}
          {links.map(({ id, link }) => (
            <h1
              key={id}
              className={`px-4 py-2 flex items-center justify-center border-green-400 hover:bg-orange-500 ease-in duration-300 border rounded-full cursor-pointer hover:border-none`}
            >
              <Link to={link} smooth duration={300} offset={-15}>
                {link}
              </Link>
            </h1>
          ))}
        </div>
        <div className="last">
          <p className="md:text-xl text-2xl px-3 font-mono font-extralight">
            Made with <span className="animate-pulse">❤️</span> By
            <span className="text-orange-300 font-bold font-mono">
              {" "}
                Shrikant Uphade!
            </span>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
