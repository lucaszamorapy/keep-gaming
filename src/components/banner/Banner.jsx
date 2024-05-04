import bannerData from "../../config/destaques.json";
import "swiper/css";
import "./banner.css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const { pathname } = useLocation();
  const filteredBanners = bannerData.filter((item) => item.status === pathname);

  const path = pathname === "/developers" ? "/developers/" : "/destaques/";

  const swiperSettings = {
    pagination: { clickable: true },
    loop: true,
    navigation: false,
    slidesPerView: 1,
    centerInsufficientSlides: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    autoHeight: true,
    speed: 2500,
    modules: [Pagination, Autoplay],
    className: "mySwiper",
  };

  return (
    <section id="home">
      <Swiper
        {...swiperSettings}
        className="shadow-lg xl:mt-[90px] md:mt-[72px] mt-[92px]"
      >
        {filteredBanners.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative after:absolute after:w-full after:h-full after:bg-dark after:top-0 after:left-0 after:z-10"
          >
            <img
              src={`${path}${index}/desktop.png`}
              alt=""
              className="hidden blur-sm lg:block xl:w-full lg:w-[1920px] lg:h-[650px] w-full object-cover"
            />
            <img
              src={`${path}${index}/tablet.png`}
              alt=""
              className="hidden blur-sm md:block lg:hidden w-full object-cover"
            />
            <img
              src={`${path}${index}/mobile.png`}
              alt=""
              className="block blur-sm md:hidden  w-full object-cover"
            />
            <div className="container flex justify-center">
              <div className="absolute block z-30 p-6 max-w-[700px] h-[325px] fade-in lg:p-0 top-1/4 sm:h-[260px] ">
                <h1 className="font-normal uppercase text-5xl lg:text-7xl">
                  {item.titulo}
                </h1>
                <p className="text-2xl mt-3">{item.descricao}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
