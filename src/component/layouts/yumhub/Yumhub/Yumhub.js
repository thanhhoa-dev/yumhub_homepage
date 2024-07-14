import React from 'react';
import styles from './Yumhub.module.scss';

const YumHub = () => {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <h1 className={styles.bannerText}>Từ những dịch vụ thiết yếu đến cơ hội gia tăng thu nhập. Tất cả đều có trên một nền tảng.</h1>
      </section>
      <section className={styles.intro}>
        <h2>YumHub là gì?</h2>
        <p>YumHub là ứng dụng giao đồ ăn và thức uống hàng đầu, kết nối khách hàng với hàng nghìn nhà hàng và quán ăn trên toàn quốc. Chúng tôi mang đến trải nghiệm ẩm thực đa dạng, tiện lợi và nhanh chóng ngay tại nhà bạn.</p>
        <h2>Sứ mệnh của chúng tôi</h2>
        <p>Chúng tôi mong muốn mang lại sự tiện ích và niềm vui trong từng bữa ăn của bạn, giúp bạn dễ dàng thưởng thức các món ăn ngon từ khắp nơi chỉ với vài thao tác đơn giản.</p>
      </section>
      <section className={styles.features}>
        <h2>Tính Năng Nổi Bật</h2>
        <ul>
          <li><strong>Giao hàng nhanh chóng:</strong> Đội ngũ shipper chuyên nghiệp, giao hàng đúng giờ và đảm bảo an toàn thực phẩm.</li>
          <li><strong>Đa dạng món ăn:</strong> Hàng ngàn món ăn từ các nhà hàng và quán ăn uy tín, từ ẩm thực truyền thống đến hiện đại.</li>
          <li><strong>Khuyến mãi hàng ngày:</strong> Liên tục cập nhật các chương trình giảm giá, ưu đãi hấp dẫn cho khách hàng.</li>
          <li><strong>Hỗ trợ 24/7:</strong> Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ bạn bất cứ lúc nào.</li>
        </ul>
      </section>
      <section className={styles.partnership}>
        <h2>Cơ Hội Hợp Tác</h2>
        <div className={styles.partnershipDetails}>
          <div className={styles.partner}>
            <h3>Trở thành đối tác nhà hàng</h3>
            <p>Gia tăng doanh số và tiếp cận thêm nhiều khách hàng mới thông qua nền tảng của YumHub.</p>
          </div>
          <div className={styles.shipper}>
            <h3>Trở thành shipper</h3>
            <p>Tăng thu nhập và chủ động về thời gian làm việc với công việc giao hàng của YumHub.</p>
          </div>
        </div>
      </section>
      <section className={styles.registration}>
        <h2>Đăng Ký Ngay</h2>
        <div className={styles.registrationForms}>
          <div className={styles.form}>
            <h3>Đăng ký đối tác nhà hàng</h3>
            <form>
              <input type="text" placeholder="Tên nhà hàng" />
              <input type="text" placeholder="Địa chỉ" />
              <input type="text" placeholder="Số điện thoại" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Mô tả ngắn về nhà hàng"></textarea>
              <button type="submit">Đăng ký</button>
            </form>
          </div>
          <div className={styles.form}>
            <h3>Đăng ký shipper</h3>
            <form>
              <input type="text" placeholder="Họ tên" />
              <input type="text" placeholder="Địa chỉ" />
              <input type="text" placeholder="Số điện thoại" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Giấy tờ xe" />
              <button type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YumHub;
