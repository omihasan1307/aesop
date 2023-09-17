import React from "react";
import Button from "../shared/Button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { store1, store2, store3 } from "../constant/ImageImport";

const StoreSection = () => {
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
          <p className="w-[28rem] lg:w-[30rem] pb-8 text-3xl ">Store locator</p>
          <p className=" lg:w-4/5 text-justify  pb-8">
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
          </p>
          <Button btntext="Find a nearby store " />
        </div>
        <div className="x-5 lg:px-0 col-span-3 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            scrollbar={true}
            navigation={true}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="text-center">
                <img src={store1} alt="" />
              </div>
              <p className="py-8 text-slate-400">Aesop Fashion Walk</p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img src={store2} alt="" />
              </div>
              <p className="py-5 text-slate-400">Aesop MOKO</p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img src={store3} alt="" />
              </div>
              <p className="py-5 text-slate-400">Aesop ifc mall </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
