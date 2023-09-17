import React from "react";
import Button from "../shared/Button";
import { facial } from "../constant/ImageImport";

const FacialSection = () => {
  return (
    <div
      className="py-36 bg-bgWhite"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10  ">
        <div className="pe-10 lg:ps-0  col-span-3 ">
          <img src={facial} alt="" />
        </div>

        <div className="col-span-2 px-5 lg:ps-10 ">
          <h1 className="pb-5 font-semibold">Facial Appointments</h1>
          <p className=" pb-8 text-2xl lg:text-3xl ">
            Composure for the skin and senses
          </p>
          <p className=" lg:w-4/5 text-justify  pb-8">
            For a well-rounded skin care regimen, Aesop Facial Appointments
            offer a series of treatments tailored to balance, stimulate and
            intensely nourish the skin.
          </p>
          <Button btntext="Read More" />
        </div>
      </div>
    </div>
  );
};

export default FacialSection;
