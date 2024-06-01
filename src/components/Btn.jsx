import React from "react";

const Btn = ({ title,className }) => {
  return (
    <div
      className={" bg-green-300 capitalize text-center cursor-pointer hover:tracking-widest ease-out duration-300  hover:shadow-md hover:shadow-red-500 " + "" + className}>
      {title}
    </div>
  );
};

export default Btn;
