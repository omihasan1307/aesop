import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Scrollbar, Keyboard, Pagination, Navigation } from "swiper/modules";
import { warm1, warm2, warm3 } from "../constant/ImageImport";

const WarmSection = () => {
  return (
    <div className="py-32 bg-bgWhite">
      <div className="lg:hidden mb-20">
        <div className="px-10  ">
          <h1 className="font-semibold mb-3">For warm climates</h1>
          <p className="text-3xl mb-5">Adjusting to seasonal change</p>
          <p className="w-full mb-7 ">
            In the warmer months, high temperatures and humidity can lead to
            increased sebum production for normal, combination, and oily skins.
            Accordingly, the use of slightly lighter formulations is
            recommended.
          </p>
        </div>
      </div>
      <div>
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          showsPagination={false}
          spaceBetween={30}
          freeMode={true}
          scrollbar={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="lg:flex hidden">
            <div className="px-14">
              <h1 className="font-semibold mb-3">For warm climates</h1>
              <p className="text-3xl mb-5">Adjusting to seasonal change</p>
              <p className="w-full mb-7 ">
                In the warmer months, high temperatures and humidity can lead to
                increased sebum production for normal, combination, and oily
                skins. Accordingly, the use of slightly lighter formulations is
                recommended.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center mb-10">
              <img src={warm1} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Immediate Moisture Facial Hydrosol
              </p>
              <p>A refreshing mist hyrator </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <div>
                <img className="h-96 mx-auto" src={warm2} alt="" />
              </div>
              <p className="hover:underline font-semibold mb-3">
                Purifying Facial Exfoliant Paste
              </p>
              <p>A deep cleansing exfliotion crea,</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={warm3} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Purifying Facial Exfoliant Paste
              </p>
              <p>A deep cleansing exfliotion crea,</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={warm3} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Ouranon Eau de Parfum
              </p>
              <p>Woody, spaicy, resinous </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={warm3} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Ouranon Eau de Parfum
              </p>
              <p>Woody, spaicy, resinous </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={warm3} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Ouranon Eau de Parfum
              </p>
              <p>Woody, spaicy, resinous </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WarmSection;
