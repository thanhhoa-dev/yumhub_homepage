// RegisterShipper.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./RegisterShipper.module.scss";
import { useLoading } from "../../../../context/LoadingContext";
import { useNotification } from "../../../../context/NotificationContext";
import PersonalInfoForm from "./PersonalInfoForm";
import DocumentInfoForm from "./DocumentInfoForm";
import logo from "../../../../assets/images/logoYumhub.png";
import { fileUpload, mapFormDataToApiData } from "../../../../utils/FormHelpers";

const cx = classNames.bind(styles);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

function RegisterShipper() {
  const { setLoading } = useLoading();
  const { showNotification } = useNotification();
  const [showDiv1, setShowDiv1] = useState(true);
  const [formData, setFormData] = useState({
    "Họ và tên": '',
    "Email": '',
    "Số điện thoại": '',
    "Ảnh khuôn mặt": '',
    "Giới tính": '',
    "Ngày sinh": '',
    "Địa chỉ": '',
    "Mặt trước CCCD": '',
    "Mặt sau CCCD": '',
    "Mặt trước GPLX": '',
    "Mặt sau GPLX": '',
    "Biển số xe": '',
    "Thương hiệu xe": '',
    "Modecode": ''
  });
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [selectedIDFront, setSelectedIDFront] = useState(null);
  const [selectedIDBack, setSelectedIDBack] = useState(null);
  const [selectedDriverFront, setSelectedDriverFront] = useState(null);
  const [selectedDriverBack, setSelectedDriverBack] = useState(null);

  const [uploadedURLs, setUploadedURLs] = useState([]);

  const selectedHandler = (event, type) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);

    switch (type) {
      case 'avatar':
        setSelectedAvatar(file);
        setAvatarPreview(preview);
        break;
      case 'Mặt trước CCCD':
        setSelectedIDFront(file);
        break;
      case 'Mặt sau CCCD':
        setSelectedIDBack(file);
        break;
      case 'Mặt trước GPLX':
        setSelectedDriverFront(file);
        break;
      case 'Mặt sau GPLX':
        setSelectedDriverBack(file);
        break;
      default:
        break;
    }
  };

  const checkSelectedImages = () => {
    const filesToUpload = [
      { file: selectedAvatar, type: 'avatar' },
      { file: selectedIDFront, type: 'idFront' },
      { file: selectedIDBack, type: 'idBack' },
      { file: selectedDriverFront, type: 'driverFront' },
      { file: selectedDriverBack, type: 'driverBack' }
    ];
    return !filesToUpload.some(item => item.file === null);
  };

  const fileUploadHandler = async () => {
    const endpoint = 'http://localhost:3001/files/upload';
    const filesToUpload = [
      { file: selectedAvatar, type: 'avatar' },
      { file: selectedIDFront, type: 'idFront' },
      { file: selectedIDBack, type: 'idBack' },
      { file: selectedDriverFront, type: 'driverFront' },
      { file: selectedDriverBack, type: 'driverBack' }
    ];

    const uploadPromises = filesToUpload.map(item =>
      fileUpload(item.file, endpoint).then(response => ({ type: item.type, url: response.data.url })).catch(error => ({ type: item.type, error: true }))
    );

    try {
      const results = await Promise.all(uploadPromises);
      const errors = results.filter(result => result.error);
      const successURLs = results.filter(result => !result.error).map(result => result.url);

      if (errors.length > 0) {
        showNotification(`Upload lỗi cho các loại ảnh: ${errors.map(e => e.type).join(', ')}`, "error", true);
        setLoading(false);
        return false;
      } else {
        setUploadedURLs(successURLs);
        setLoading(false);
        return true;
      }
    } catch (err) {
      showNotification(`Có lỗi xảy ra khi upload ảnh`, "error", true);
      setLoading(false);
      return false;
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      "Ngày sinh": today
    }));
  }, []);

  const validatePhoneNumber = () => phoneRegex.test(formData["Số điện thoại"]);
  const validateEmail = () => emailRegex.test(formData["Email"]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateEmail() && validatePhoneNumber()) {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (checkSelectedImages()) {
        const uploadSuccess = await fileUploadHandler();

        if (uploadSuccess) {
          const formDataToSend = mapFormDataToApiData(formData, uploadedURLs);

          axios.post('http://localhost:3001/shippers/createShipper', JSON.stringify(formDataToSend), {
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              if (response.data.result) {
                showNotification("Đăng ký thành công", "success", true);
              } else {
                showNotification(response.data.error.message, "error", true);
              }
            })
            .catch((error) => {
              showNotification("Có lỗi xảy ra khi đăng ký", "error", true);
              console.error(error);
            });
        }
        setLoading(false);
      }
    } else {
      showNotification("Số điện thoại hoặc email không hợp lệ", "error", true);
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('form-wrapper')}>
        <div className={cx('form-left')}>
          <form onSubmit={handleRegister}>
            <div className={cx('animation-container')}>
              <div className={cx('animation', { 'slide-out': !showDiv1 }, { 'slide-in': showDiv1 })}>
                <PersonalInfoForm
                  formData={formData}
                  handleChange={handleChange}
                  validatePhoneNumber={validatePhoneNumber}
                  validateEmail={validateEmail}
                  selectedHandler={selectedHandler}
                  avatarPreview={avatarPreview}
                />
                <div className={cx('button-wrapper')}>
                  <div></div>
                  <button type="button" className={cx('back-btn')} onClick={() => setShowDiv1(!showDiv1)}>tiếp theo</button>
                </div>
              </div>
              <div className={cx('new-div', { 'slide-in': !showDiv1 }, { 'slide-out': showDiv1 })}>
                <DocumentInfoForm
                  formData={formData}
                  handleChange={handleChange}
                  selectedHandler={selectedHandler}
                />
                <div className={cx('button-wrapper')}>
                  <button type="button" className={cx('back-btn')} onClick={() => setShowDiv1(!showDiv1)}>quay lại</button>
                  <button type="submit">Gửi</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={cx('form-right')}>
          <div className={cx('terms')}>
            Bằng cách nhấn đăng ký, bạn đồng ý với <a href="#">Điều khoản và Điều kiện</a>
          </div>
          <div className={cx('pot')}>
            <img src={logo} alt="Pot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterShipper;
