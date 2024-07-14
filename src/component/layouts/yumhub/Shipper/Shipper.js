import React from "react";
import classNames from "classnames/bind";
import styles from "./Shipper.module.scss";
import Modal from "react-modal"; // Import thư viện Modal
import bannershipper from "../../../../assets/images/bannershipper.png";
import demoshipper from "../../../../assets/images/demoshipper.png";
import workinghour from "../../../../assets/images/working-hours.png";
import gain from "../../../../assets/images/gain.png";
import experience from "../../../../assets/images/experience.png";
import scooter from "../../../../assets/images/scooter.png";
import licensing from "../../../../assets/images/licensing.png";
import smartphone from "../../../../assets/images/smartphone.png";
import list from "../../../../assets/images/to-do-list.png";
import benefits from "../../../../assets/images/benefits.png";

function Shipper() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={bannershipper} alt="Banner" className={styles.imgbanner} />
      </div>
      <div className={styles.sectionPartner}>
        <img src={demoshipper} className={styles.imgPartner} />
        <div className={styles.partner}>
          <div className={styles.titleMerchant}>
            <h2>Khám phá cơ hội tăng thu nhập</h2>
          </div>
          <div className={styles.contentMerchant}>
            <p>Hãy kết nối cùng chúng tôi, ứng dụng đang kết nối hơn hàng triệu người dùng, đối tác nhà hàng và tài xế. Hãy cùng YumHub biến thời gian và đoạn đường bạn đi trở thành thu nhập trong tầm tay!</p>
          </div>
          <div className={styles.divBtnMerchant}>
            <button className={styles.buttonMerchant}>Đăng ký</button>
          </div>
        </div>
      </div>
      <h1>Tại sao nên chọn YumHub?</h1>
      <div className={styles.sectionWhy}>
        <div className={styles.reason}>
          <img src={workinghour} />
          <h3>Linh hoạt hơn</h3>
          <p>Tự do quyết định thời gian làm việc và nghỉ ngơi</p>
        </div>
        <div className={styles.reason}>
          <img src={gain} />
          <h3>Thu nhập tốt hơn</h3>
          <p>Thu nhập đều đặn và dễ dàng rút tiền bất cứ khi nào</p>
        </div>
        <div className={styles.reason}>
          <img src={experience} />
          <h3>Trải nghiệm tốt hơn</h3>
          <p>Chúng tôi sẽ luôn hỗ trợ nhu cầu của bạn cũng như<br />cộng đồng các anh em đối tác tài xế khác</p>
        </div>
      </div>
      
       <div className={styles.benefitsSection}>
        <div className={styles.benefitsCard}>
          <div className={styles.icon}>
            <img src={benefits} alt="Star Icon" />
          </div>
          <div className={styles.content}>
            <h2>Phúc lợi hấp dẫn</h2>
            <ul>
              <li>Doanh thu lên đến:    <span className={styles.highlight}>15.000.000đ/tháng</span></li>
              <li>Rút doanh thu về tay nhanh chóng</li>
              <li>Tham gia chương trình GoCaptain nhận phúc lợi mỗi tháng</li>
              <li>Cộng đồng Gojek phủ sóng mọi nơi và luôn sẵn sàng hỗ trợ</li>
              <li>Tự chủ thời gian làm việc</li>
            </ul>
          </div>
        </div>

        <div className={styles.requirementsCard}>
          <div className={styles.icon}>
            <img src={list} alt="Helmet Icon" />
          </div>
          <div className={styles.content}>
            <h2>Yêu cầu tối thiểu</h2>
            <ul>
              <li>Quốc tịch: Việt Nam</li>
              <li>Độ tuổi: 18-70 tuổi</li>
            </ul>
          </div>
        </div>

        <div className={styles.equipmentCard}>
          <div className={styles.icon}>
            <img src={smartphone} alt="Phone Icon" />
          </div>
          <div className={styles.content}>
            <h2>Thiết bị di động</h2>
            <ul>
              <li>Hệ điều hành Android từ 6.0 trở lên</li>
              <li>Sử dụng được camera trước và sau</li>
              <li>Kết nối được mạng/internet (3G/4G/5G)</li>
            </ul>
          </div>
        </div>

        <div className={styles.equipmentDocument}>
          <div className={styles.icon}>
            <img src={licensing} alt="Phone Icon" />
          </div>
          <div className={styles.content}>
            <h2>Giấy tờ cần thiết</h2>
            <ul>
              <li>CMND/CCCD/Hộ chiếu</li>
              <li>Bằng lái xe</li>
              <li>Giấy đăng ký xe</li>
              <li>Bảo hiểm dân sự xe máy bắt buộc </li>
            </ul>
          </div>
        </div>

        <div className={styles.equipmentMotorBike}>
          <div className={styles.icon}>
            <img src={scooter} alt="Phone Icon" />
          </div>
          <div className={styles.content}>
            <h2>Phương tiện</h2>
            <ul>
              <li>Xe hoạt động tốt</li>
              <li>Không tháo bửng/yếm xe</li>
              <li>Không quá cũ</li>
              <li>Không bị thay đổi kết cấu ban đầu</li>
              <li>Dung tích xi lanh: Từ 90cc trở lên</li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Shipper;
