import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import logo from "../../../../assets/images/logoYumhub.png";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("footer-col")}>
            <img src={logo} alt="Logo" className={cx("logo")} />
            <p>Công Ty Cổ Phần YumHub<br/>
            Địa chỉ: 340 Quang Trung<br/>
            Hotline: 0337 295 209</p>
          </div>
          <div className={cx("footer-col")}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className={cx("footer-col")}>
            <h4>Get Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order Status</a></li>
            </ul>
          </div>
          <div className={cx("footer-col")}>
            <h4>Follow Us</h4>
            <div className={cx("social-links")}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
