
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
      content: '"YumHub đã trở thành lựa chọn số một của tôi mỗi khi muốn đặt đồ ăn. Thời gian giao hàng nhanh và món ăn luôn tươi ngon!',
      img: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/438260809_2407518359444088_3798971936847354816_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEHAnofWEPN30IzFZGGS35RvPI-TuCklkK88j5O4KSWQgV4wjaZEEcIWGa8Ak7MFKDTIt9pC2biVuhGEeO-vRoy&_nc_ohc=ptl1N3MDF5AQ7kNvgG-6kBs&_nc_zt=23&_nc_ht=scontent.fsgn4-1.fna&oh=00_AYAZ0Cs57iVWStC4rI6WdnAzwCmIaqPvtz22hBkxqT_7bw&oe=66BFE750'
    },
    {
      id: 'slide2',
      name: 'Nguyễn Bá Sơn',
      content: '"Dịch vụ của YumHub thật tuyệt vời! Tôi rất ấn tượng với sự chuyên nghiệp của các shipper và chất lượng món ăn.',
      img: 'https://e0.pxfuel.com/wallpapers/487/198/desktop-wallpaper-handsome-man-handsome-men.jpg'
    },
    {
      id: 'slide3',
      name: 'Lê Văn Hoàng',
      content: '"Tôi yêu cách mà YumHub cung cấp nhiều lựa chọn nhà hàng đa dạng, phù hợp với mọi khẩu vị. Chắc chắn sẽ tiếp tục ủng hộ!',
      img: 'https://www.shutterstock.com/shutterstock/videos/1104036177/thumb/11.jpg?ip=x480'
    },
    {
      id: 'slide4',
      name: 'Trương Minh Thi',
      content: '"Đặt đồ ăn qua YumHub chưa bao giờ dễ dàng đến thế. Giao diện thân thiện, quy trình đặt đơn giản và giao hàng đúng giờ.',
      img: 'https://www.shutterstock.com/image-photo/young-african-man-walking-forward-260nw-1865440885.jpg'
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
