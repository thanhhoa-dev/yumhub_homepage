import React from "react";
import bannermerchant from "../../../../assets/images/bannermerchant.png";
import demomerchant from "../../../../assets/images/demomerchant.png";
import bingeeating from "../../../../assets/images/binge-eating.png";
import money from "../../../../assets/images/money.png";
import suport247 from "../../../../assets/images/24-hours-support.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import licensing from "../../../../assets/images/licensing.png";
import styles from "./Merchant.module.scss";

function Merchant() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={bannermerchant} alt="Banner" className={styles.imgbanner} />
      </div>
      <div className={styles.sectionPartner}>
        <img src={demomerchant} className={styles.imgPartner} />
        <div className={styles.partner}>
          <div className={styles.titleMerchant}>
            <h2>Khám phá cơ hội tăng trưởng doanh thu</h2>
          </div>
          <div className={styles.contentMerchant}>
            <p>Thành công chỉ cách bạn một cú chạm thôi!</p>
          </div>
          <div className={styles.divBtnMerchant}>
            <button className={styles.buttonMerchant}>Đăng ký</button>
          </div>
        </div>
      </div>
      <h1>Tại sao nên chọn YumHub?</h1>
      <div className={styles.sectionWhy}>
        <div className={styles.reason}>
          <img src={bingeeating} />
          <h3>Tiếp cận nhiều người dùng hơn</h3>
          <p>Mang thương hiệu của bạn đến với nhiều người dùng hơn mỗi ngày.</p>
        </div>
        <div className={styles.reason}>
          <img src={suport247} />
          <h3>Giao hàng 24/7</h3>
          <p>Đội ngũ đối tác tài xế luôn sẵn sàng để giao món ngon trong một nốt nhạc.</p>
        </div>
        <div className={styles.reason}>
          <img src={money} />
          <h3>Tăng doanh thu hiệu quả</h3>
          <p>Nhiều người vào app hơn, nhiều khách hàng tiềm năng hơn.</p>
        </div>
      </div>

      <div className={styles.benefitsSection}>
        <div className={styles.equipmentDocument}>
          <div className={styles.icon}>
            <img src={licensing} alt="Star Icon" />
          </div>
          <div className={styles.content}>
            <h2>Thông tin cần thiết</h2>
            <ul>
              <li><span className={styles.highlight}>Email và số điện thoại</span> của chủ nhà hàng.</li>
              <li><span className={styles.highlight}>Giấy tờ tuỳ thân (CMND hoặc CCCD)</span> của chủ nhà hàng.</li>
              <li><span className={styles.highlight}>Hộ chiếu</span>  của chủ nhà hàng (dành cho công dân nước ngoài).</li>
              <li><span className={styles.highlight}>Thông tin tài khoản ngân hàng</span>  để thanh toán các khoản phải trả được ghi nhận trong Ví Nhà Hàng.</li>
              <li><span className={styles.highlight}>Địa chỉ & số điện thoại liên lạc</span>  của cửa hàng.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merchant;
