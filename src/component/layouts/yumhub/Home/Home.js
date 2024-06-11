
import React, { useEffect, useState  } from 'react';
import styles from "./Home.module.scss"
import SimpleSlider from './Slider';
import banner from '../../../../assets/images/banner.png';
function Home() {
  return (
    
    <div style={{width:"100%"}}>
      <div className={styles.banner}>
        <img src={banner} alt="Banner" className={styles.imgbanner} />
      </div>
      <div className={styles.sectionAboutCompany}>
        <div className={styles.titleAboutCompany}>
          <h2>Về<br />YumHub</h2>
        </div>
        <div className={styles.contentAboutCompany}>
          <p>YumHub là nền tảng hàng đầu về thực phẩm và dịch vụ giao hàng, giúp người dùng dễ dàng khám phá và đặt món từ hàng trăm nhà hàng địa phương. Với giao diện thân thiện và hệ thống đặt hàng nhanh chóng, YumHub mang đến trải nghiệm ẩm thực tuyệt vời, tiết kiệm thời gian và công sức. Dịch vụ giao hàng chuyên nghiệp đảm bảo món ăn được giao nhanh chóng và nóng hổi. YumHub - bạn đồng hành đáng tin cậy cho mọi bữa ăn.</p>
        </div>
      </div>
      <div className={[styles.sectionPartner, styles.borderShipper].join(' ')}>
        <div className={styles.partner}>
          <div className={styles.titleShipper}>
            <h2>Trở thành tài xế yumhub</h2>
          </div>
          <div className={styles.contentShipper}>
            <p>YumHub mang lại nhiều lợi ích cho shipper với hệ thống quản lý đơn hàng thông minh và lịch trình giao hàng tối ưu, giúp tiết kiệm thời gian và tăng hiệu quả. Shipper được hưởng thu nhập hấp dẫn, linh hoạt thời gian làm việc và hỗ trợ đảm bảo quyền lợi, tạo môi trường làm việc an toàn và chuyên nghiệp. Hợp tác với YumHub, shipper có cơ hội nâng cao thu nhập và phát triển bền vững.</p>
          </div>
          <div className={styles.divBtnShipper}>
            <button className={styles.buttonShipper}>Đăng ký</button>
          </div>
        </div>
        <img src="https://cdn1.123job.vn/123job/uploads/2020/05/30/2020_05_30______1ded054626776dc1abe89843594bb39d.png" className={styles.imgPartner} />
      </div>
      <div className={[styles.sectionPartner, styles.borderMerchant].join(' ')}>
        <img src="https://media.dolenglish.vn/PUBLIC/MEDIA/7ed115ae-0e5f-49e1-bcc6-c574b14fc8fe.jpg" className={styles.imgPartner} />
        <div className={styles.partner}>
          <div className={styles.titleMerchant}>
            <h2>Bán hàng cùng YumHub</h2>
          </div>
          <div className={styles.contentMerchant}>
            <p>YumHub mang lại nhiều lợi ích cho các merchant với hệ thống quản lý đơn hàng tiên tiến và quy trình vận hành hiệu quả, giúp tối ưu hóa hoạt động kinh doanh và tăng doanh thu. Merchant được hỗ trợ toàn diện, từ quảng bá sản phẩm đến quản lý giao hàng, đảm bảo mọi khâu đều diễn ra suôn sẻ. YumHub cung cấp các công cụ phân tích và báo cáo chi tiết, giúp merchant nắm bắt tình hình kinh doanh và đưa ra chiến lược phát triển phù hợp. Hợp tác với YumHub, merchant có cơ hội mở rộng thị trường và phát triển bền vững.</p>
          </div>
          <div className={styles.divBtnMerchant}>
            <button className={styles.buttonMerchant}>Đăng ký</button>
          </div>
        </div>
      </div>
      <h1>Nhận xét về YumHub</h1>
      <div className={styles.sectionSlider}>
        <SimpleSlider/>
      </div>
    </div>
  );
}

export default Home;
