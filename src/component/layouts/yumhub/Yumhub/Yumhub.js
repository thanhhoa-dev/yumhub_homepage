import React from "react";
import { Link } from "react-router-dom";
import styles from "./Yumhub.module.scss";
import banner from "../../../../assets/images/1.png"; // Replace with your own path
import image1 from "../../../../assets/images/a.png";
import image2 from "../../../../assets/images/sumenh.png";
import image3 from "../../../../assets/images/features.png";
import image4 from "../../../../assets/images/4.png";

const YumHub = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={banner} alt="Banner" className={styles.imgbanner} />
      </div>
      <section className={styles.intro}>
        <h2>YumHub là gì?</h2>
        <img src={image1} alt="Intro" className={styles.image} />
        <div className={styles.divider}><p>YumHub là ứng dụng giao đồ ăn và thức uống hàng đầu, kết nối khách hàng với hàng nghìn nhà hàng và quán ăn trên toàn quốc. Chúng tôi mang đến trải nghiệm ẩm thực đa dạng, tiện lợi và nhanh chóng ngay tại nhà bạn.</p></div>
        
        <br />
        <h2>Sứ mệnh của chúng tôi</h2>
        <img src={image2} alt="Intro2" className={styles.image} />
        <div className={styles.divider}><p>Chúng tôi mong muốn mang lại sự tiện ích và niềm vui trong từng bữa ăn của bạn, giúp bạn dễ dàng thưởng thức các món ăn ngon từ khắp nơi chỉ với vài thao tác đơn giản.</p></div>
        
        
      </section>
      <section className={styles.features}>
        <h2>Tính Năng Nổi Bật</h2>
        <img src={image3} alt="Features" className={styles.imageFeatures} />
      </section>
      <section className={styles.partnership}>
        <h2>Cơ Hội Hợp Tác</h2>
        <div className={styles.partnershipDetails}>
          <div className={styles.partner}>
            <div className={styles.regester}><Link  to="/merchant"><p>Trở thành đối tác nhà hàng</p></Link></div>
            <img src="https://marketplace.canva.com/EAGI3jBjMWg/3/0/1600w/canva-wOIaqGYrTzY.jpg" alt="Partner" className={styles.imageSub} />
            <div className={styles.divider}><p>Gia tăng doanh số và tiếp cận thêm nhiều khách hàng mới thông qua nền tảng của YumHub. Đội ngũ của chúng tôi sẽ hỗ trợ bạn trong việc quảng bá và cung cấp dịch vụ tốt nhất đến khách hàng.</p></div>
            
          </div>
          <div className={styles.shipper}>
            <div className={styles.regester}><Link  to="/shipper"><p>Trở thành shipper</p></Link></div>        
            <img src="https://marketplace.canva.com/EAGI3jBjMWg/3/0/1600w/canva-wOIaqGYrTzY.jpg" alt="Shipper" className={styles.imageSub} />
            <div className={styles.divider}> <p>Tăng thu nhập và chủ động về thời gian làm việc với công việc giao hàng của YumHub. Chúng tôi cung cấp các công cụ và hỗ trợ cần thiết để bạn có thể làm việc hiệu quả và an toàn.</p></div>
           
          </div>
        </div>
      </section>
      <section className={styles.moreInfo}>
        <h2>Thông Tin Thêm</h2>
        <div className={styles.divider}><p><strong>YumHub</strong> cam kết mang đến trải nghiệm tốt nhất cho khách hàng và đối tác của chúng tôi. Chúng tôi liên tục cải thiện và phát triển ứng dụng để đáp ứng nhu cầu ngày càng cao của thị trường.</p>
        <p>Chúng tôi tin rằng sự thành công của <strong>YumHub</strong> không chỉ dựa trên công nghệ tiên tiến mà còn dựa vào đội ngũ nhân viên và đối tác tận tâm. Chúng tôi luôn lắng nghe và phản hồi nhanh chóng các góp ý từ khách hàng để hoàn thiện dịch vụ hơn nữa.</p>
        <p>Hãy tham gia cùng chúng tôi để cùng nhau xây dựng một cộng đồng ẩm thực phong phú và tiện lợi nhất!</p></div>
        
        <img src={image4} alt="More Info" className={styles.image} />
      </section>
    </div>
  );
};

export default YumHub;
