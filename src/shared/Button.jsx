import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({ btntext }) => {
  return (
    <div className="flex items-center justify-between w-full lg:w-[300px] h-[60px] border text-start px-5 hover:bg-black hover:text-white duration-300 hover:duration-15 ">
      <button className=" 0">{btntext} </button>
      <FontAwesomeIcon
        className="ms-5 font-thin text-sm "
        icon={faArrowRight}
      />
    </div>
  );
};

export default Button;
