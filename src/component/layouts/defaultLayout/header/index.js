import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "../../../../assets/images/logoYumhub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={logo} alt="Logo YumHub" />
            
          </Link>
          <Link to="/">
          <p className={cx("textLogo")}>YumHub</p>
          </Link>
        </div>
        <div className={cx("nav-toggle")} onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav className={cx({ "nav-active": isNavOpen })}>
          <ul>
            <li>
              <Link to="/shipper">Shipper</Link>
            </li>
            <li>
              <Link to="/merchant">Đối tác nhà hàng</Link>
            </li>
            <li>
              <Link to="/register-shipper">Đăng ký Shipper</Link>
            </li>
            <li>
              <Link to="/register-merchant">Đăng ký đối tác nhà hàng</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
