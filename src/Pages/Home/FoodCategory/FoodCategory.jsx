import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import category1 from "../../../assets/home/slide1.jpg";
import category2 from "../../../assets/home/slide2.jpg";
import category3 from "../../../assets/home/slide3.jpg";
import category4 from "../../../assets/home/slide4.jpg";
import category5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FoodCategory = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11.00 am to 10pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
          <img src={category1} alt="" />
          <p className="uppercase -mt-12 text-2xl text-white text-center">
            supe
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category2} alt="" />
          <p className="uppercase -mt-12 text-2xl text-white text-center">
            cake
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category3} alt="" />
          <p className="uppercase -mt-12 text-2xl text-white text-center">
            supe
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category4} alt="" />
          <p className="uppercase -mt-12 text-2xl text-white text-center">
            supe
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category5} alt="" />
          <p className="uppercase -mt-12 text-2xl text-white text-center">
            supe
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FoodCategory;
