
import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./Slider.module.scss";
const SimpleSlider = () => {
  const slides = [
    {
      id: 'slide1',
      name: 'Đoàn Thanh Hòa',
      content: '"Cảm ơn Yumhub đã giúp em trên con đường để đi du học. Cảm ơn chị Diễm - cô giáo đáng yêu của em đã giúp em biết thêm được tiếng Hàn. Cảm ơn chị Lan Anh đã nhiệt tình tư vấn cho em. Cảm ơn anh Văn - giám đốc trung tâm đã đưa ra những lời khuyên bổ ích khi du học.',
      img: 'https://i.pinimg.com/564x/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg'
    },
    {
      id: 'slide2',
      name: 'Tạ Thị Kim Cúc',
      content: '"Cảm ơn Yumhub đã giúp em trên con đường để đi du học. Cảm ơn chị Diễm - cô giáo đáng yêu của em đã giúp em biết thêm được tiếng Hàn. Cảm ơn chị Lan Anh đã nhiệt tình tư vấn cho em. Cảm ơn anh Văn - giám đốc trung tâm đã đưa ra những lời khuyên bổ ích khi du học.',
      img: 'https://m.yodycdn.com/blog/avatar-dep-cho-nam-yody-vn.jpg'
    },
    {
      id: 'slide3',
      name: 'Tạ Văn Yasuo',
      content: '"Cảm ơn Yumhub đã giúp em trên con đường để đi du học. Cảm ơn chị Diễm - cô giáo đáng yêu của em đã giúp em biết thêm được tiếng Hàn. Cảm ơn chị Lan Anh đã nhiệt tình tư vấn cho em. Cảm ơn anh Văn - giám đốc trung tâm đã đưa ra những lời khuyên bổ ích khi du học.',
      img: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223'
    },
    {
      id: 'slide4',
      name: 'Trương Minh Thi',
      content: '"Cảm ơn Yumhub đã giúp em trên con đường để đi du học. Cảm ơn chị Diễm - cô giáo đáng yêu của em đã giúp em biết thêm được tiếng Hàn. Cảm ơn chị Lan Anh đã nhiệt tình tư vấn cho em. Cảm ơn anh Văn - giám đốc trung tâm đã đưa ra những lời khuyên bổ ích khi du học.',
      img: 'https://media.licdn.com/dms/image/D560BAQE96KctT7x-iw/company-logo_200_200/0/1666170056423?e=2147483647&v=beta&t=VWwOyGELKPqLpkj7dbxaCDtWbhWKvp3akvhvMdHivy4'
    },
  ];
  return (

    <Swiper
      spaceBetween={0}
      width={'100%'}
      slidesPerView="auto"
      scrollbar={{ draggable: false, el: '.swiper' }}
      onSlideChange={(key) => {

      }}
      onSwiper={(swiper) => console.log("swiper")}
      onReachEnd={(key) => {
        key.slideTo(slides.length - 1);
      }}

    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id} className={styles.slide}>
          <div className={styles.slideItem}>

            <div className={styles.slideContent}>
              <h2>{slide.name}</h2>
              <p className={styles.content}>{slide.content}</p>
            </div>
            <img src={slide.img} alt="Slide" className={styles.slideImg} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimpleSlider;
