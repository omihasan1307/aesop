import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
// import "./styles.css";

import { Scrollbar, Keyboard, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { scents } from "../constant/ImageImport";
const FragranceSection = () => {
  return (
    <div
      className="py-32 bg-bgWhite"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="lg:hidden mb-20">
        <div className="px-10  ">
          <h1 className="font-semibold mb-3">Fragrance</h1>
          <p className="text-3xl mb-5">Our personal scents</p>
          <p className="w-full mb-7 ">
            Unorthodox, evocative, and refined, Aesop fragrances are sensory
            bridges to memory and connection points to those around us.
          </p>
          <p>
            See all Fragrance <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
      </div>
      <div>
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 4, // 4 slides on desktop
            },
            0: {
              slidesPerView: 1, // 1 slide on mobile
            },
          }}
          spaceBetween={30}
          freeMode={true}
          showsPagination={false}
          scrollbar={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="lg:flex hidden">
            <div className="ps-20 pe-10 ">
              <h1 className="font-semibold mb-3">Fragrance</h1>
              <p className="text-3xl mb-5">Our personal scents</p>
              <p className="w-full mb-7 ">
                Unorthodox, evocative, and refined, Aesop fragrances are sensory
                bridges to memory and connection points to those around us.
              </p>
              <p>
                See all Fragrance <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center mb-10">
              <img src={scents} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Ouranon Eau de Parfum
              </p>
              <p>Woody, spaicy, resinous </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={scents} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Ouranon Eau de Parfum
              </p>
              <p>Woody, spaicy, resinous </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={scents} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Ouranon Eau de Parfum
              </p>
              <p>Woody, spaicy, resinous </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={scents} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Ouranon Eau de Parfum
              </p>
              <p>Woody, spaicy, resinous </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={scents} alt="" />
              <p className="hover:underline font-semibold mb-3">
                Ouranon Eau de Parfum
              </p>
              <p>Woody, spaicy, resinous </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src={scents} alt="" />
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

export default FragranceSection;
