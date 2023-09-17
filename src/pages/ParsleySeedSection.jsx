import React from "react";
import { parsley } from "../constant/ImageImport";
import Button from "../shared/Button";

const ParsleySeedSection = () => {
  return (
    <div
      className="py-36 bg-bgWhite"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10  ">
        <div className="col-span-2 px-5 lg:ps-20 ">
          <h1 className="pb-5 font-semibold">Parsley Seed Skin Care</h1>
          <p className="w-[28rem] lg:w-[30rem] pb-8 text-3xl ">
            In warm or humid urban settings, skin is vulnerable to a range of
            environmental factors.
          </p>
          <p className=" lg:w-4/5 text-justify  pb-8">
            Pollution, air-conditioning and the stresses of city life can
            heighten skin’s susceptibility to free radical damage and
            dehydration. Anti-oxidant rich Parsley Seed formulations help to
            support skin against these effects.
          </p>
          <Button btntext="Regimens for warm climates" />
        </div>
        <div className="ps-10 lg:ps-0  col-span-3 ">
          <img src={parsley} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ParsleySeedSection;
