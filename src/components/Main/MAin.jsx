import React from "react";

import "./Main.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import img1 from "../../assets/imgs/img1.png";
import img2 from "../../assets/imgs/img2.png";

const MAin = () => {
  return (
    <>
      <div className="container">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="wrapper_div">
            <div className="text">
                <h1>
                  Bizdan xarid qiling <span>
                    50% 
                  </span>{" "}
                  Chegirmaga ega bo'ling{" "}
                </h1>
              </div>
              <div className="img">
                <img src={img1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="wrapper_div">
            <div className="text">
                <h1>
                  Bizdan xarid qiling <span>
                    50% 
                  </span>{" "}
                  Chegirmaga ega bo'ling{" "}
                </h1>
              </div>
              <div className="img">
                <img className="img_two" src={img2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>  <div className="wrapper_div">
            <div className="text">
                <h1>
                  Bizdan xarid qiling <span>
                    50% 
                  </span>{" "}
                  Chegirmaga ega bo'ling{" "}
                </h1>
              </div>
              <div className="img">
                <img src={img1} alt="" />
              </div>
            </div></SwiperSlide>
          <SwiperSlide>
          <div className="wrapper_div">
            <div className="text">
                <h1>
                  Bizdan xarid qiling <span>
                    50% 
                  </span>{" "}
                  Chegirmaga ega bo'ling{" "}
                </h1>
              </div>
              <div className="img">
                <img className="img_two" src={img2} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MAin;
