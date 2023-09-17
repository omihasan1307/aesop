import React from "react";
import Button from "../shared/Button";
import athenaeum from "../assets/AesopVideo.mp4";

const AthenaeumSection = () => {
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
          <video
            src={athenaeum}
            width="900"
            height="500"
            muted
            autoPlay
            loop
            controls
          ></video>
        </div>

        <div className="col-span-2 px-5 lg:ps-10 ">
          <h1 className="pb-5 font-semibold">The Athenaeum</h1>
          <p className=" pb-8 text-3xl ">Decoding fragrance</p>
          <p className=" lg:w-4/5 text-justify  pb-8">
            The language of notes, sillage and aromatic profiles allows us to
            describe perfume. Discover our guide to selecting a signature
            fragrance.
          </p>
          <Button btntext="Read More" />
        </div>
      </div>
    </div>
  );
};

export default AthenaeumSection;
