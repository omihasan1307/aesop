import React from "react";
import { header } from "../constant/ImageImport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/header.avif";

const Header = () => {
  return (
    <div
      className="text-white"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="relative">
        <div className="h-72 lg:h-full">
          <img className="w-full h-full object-fill" src={img} alt="" />
        </div>
        <div className="lg:absolute top-32 left-16 bg-[#5B3E45] lg:bg-transparent lg:py-0 py-16">
          <div className="flex space-x-10 ">
            <h1 className="text-4xl lg:block hidden">Aesop</h1>
            <div className="space-y-5">
              <h1 className="font-bold">Doorways to the undiscovered</h1>
              <p className="text-3xl">
                Othertopias: a collection of <br /> unorthodox fragrances
              </p>
              <p>
                Step inside six fragrant worlds that transcend our immediate{" "}
                <br />
                perception—vivid and distinctive.
              </p>
              <div className="flex items-center justify-between w-full lg:w-[300px] h-[60px] border text-start px-5 hover:bg-white hover:text-black duration-300 hover:duration-15 ">
                <button className=" 0">Discover the fragrances </button>
                <FontAwesomeIcon
                  className="ms-5 font-thin text-sm "
                  icon={faArrowRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bgImg flex items-center  space-x-28 text-white px-20 lg:h-[40rem]">
        <div className="flex space-x-10 ">
          <h1 className="text-4xl">Aesop</h1>
          <div className="space-y-5">
            <h1 className="font-bold">Doorways to the undiscovered</h1>
            <p className="text-3xl">
              Othertopias: a collection of <br /> unorthodox fragrances
            </p>
            <p>
              Step inside six fragrant worlds that transcend our immediate{" "}
              <br />
              perception—vivid and distinctive.
            </p>
            <div className="flex items-center justify-between w-full lg:w-[300px] h-[60px] border text-start px-5 hover:bg-white hover:text-black duration-300 hover:duration-15 ">
              <button className=" 0">Discover the fragrances </button>
              <FontAwesomeIcon
                className="ms-5 font-thin text-sm "
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bgImg flex items-center space-x-28 text-white px-20 lg:h-[40rem]">
        <div className="lg:flex space-x-10 hidden">
          <h1 className="text-4xl">Aesop</h1>
          <div className="space-y-5">
            <h1 className="font-bold">Doorways to the undiscovered</h1>
            <p className="text-3xl">
              Othertopias: a collection of <br /> unorthodox fragrances
            </p>
            <p>
              Step inside six fragrant worlds that transcend our immediate{" "}
              <br />
              perception—vivid and distinctive.
            </p>
            <div className="flex items-center justify-between w-full lg:w-[300px] h-[60px] border text-start px-5 hover:bg-white hover:text-black duration-300 hover:duration-15 ">
              <button className=" 0">Discover the fragrances </button>
              <FontAwesomeIcon
                className="ms-5 font-thin text-sm "
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
