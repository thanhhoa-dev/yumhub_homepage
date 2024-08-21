// RegisterShipper.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./RegisterMerchant.module.scss";
import { useLoading } from "../../../../context/LoadingContext";
import { useNotification } from "../../../../context/NotificationContext";
import InforMerchantForm from "./InforMerchantForm";
import InforOwnerForm from "./InforOwnerForm";
import logo from "../../../../assets/images/logoYumhub.png";
import { fileUpload, mapFormDataToApiDataMerchant } from "../../../../utils/FormHelpers";

const cx = classNames.bind(styles);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

function RegisterMerchant() {
  const { setLoading } = useLoading();
  const { showNotification } = useNotification();
  const [showDiv1, setShowDiv1] = useState(true);
  //661760e3fc13ae3574ab8cde
  const [formData, setFormData] = useState({
    "Tên cửa hàng": '',
    "Địa chỉ": '',
    "Loại nhà hàng": '',
    "Giờ mở cửa": '',
    "Giờ đóng cửa": '',
    "Ảnh nền/đại diện": '',
    "Giấy phép kinh doanh mặt trước": '',
    "Giấy phép kinh doanh mặt sau": '',
    "Họ và tên": '',
    "Số điện thoại": '',
    "Email": '',
    "Ảnh khuôn mặt": '',
    "Giới tính": '',
    "CCCD mặt trước": '',
    "CCCD mặt sau": '',
  });
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [selectedImgBg, setSelectedImgBg] = useState(null);

  const [selectedLicenseFront, setSelectedLicenseFront] = useState(null);
  const [selectedLicenseBack, setSelectedLicenseBack] = useState(null);

  const [selectedIDFront, setSelectedIDFront] = useState(null);
  const [selectedIDBack, setSelectedIDBack] = useState(null);

  const [uploadedURLs, setUploadedURLs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://duantotnghiep-api-a32664265dc1.herokuapp.com/typeOfMerchant/all');
        if(response.data.result)
          setCategories(response.data.category);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const selectedHandler = (event, type) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);

    switch (type) {
      case 'Ảnh khuôn mặt':
        setSelectedAvatar(file);
        setAvatarPreview(preview);
        break;
      case 'Ảnh nền/đại diện':
        setSelectedImgBg(file);
        break;
      case 'Giấy phép kinh doanh mặt trước':
        setSelectedLicenseFront(file);
        break;
      case 'Giấy phép kinh doanh mặt sau':
        setSelectedLicenseBack(file);
        break;
      case 'CCCD mặt trước':
        setSelectedIDFront(file);
        break;
      case 'CCCD mặt sau':
        setSelectedIDBack(file);
        break;
      default:
        break;
    }
  };

  const checkSelectedImages = () => {
    const filesToUpload = [
      { file: selectedAvatar, type: 'Ảnh khuôn mặt' },
      { file: selectedImgBg, type: 'Ảnh nền/đại diện' },
      { file: selectedLicenseFront, type: 'Giấy phép kinh doanh mặt trước' },
      { file: selectedLicenseBack, type: 'Giấy phép kinh doanh mặt sau' },
      { file: selectedIDFront, type: 'CCCD mặt trước' },
      { file: selectedIDBack, type: 'CCCD mặt sau' }
    ];
    console.log(filesToUpload);
    
    return !filesToUpload.some(item => item.file === null);
  };
  
  const fileUploadHandler = async () => {
    const endpoint = 'https://duantotnghiep-api-a32664265dc1.herokuapp.com/files/upload';
    const filesToUpload = [
      { file: selectedAvatar, type: 'Ảnh khuôn mặt' },
      { file: selectedImgBg, type: 'Ảnh nền/đại diện' },
      { file: selectedLicenseFront, type: 'Giấy phép kinh doanh mặt trước' },
      { file: selectedLicenseBack, type: 'Giấy phép kinh doanh mặt sau' },
      { file: selectedIDFront, type: 'CCCD mặt trước' },
      { file: selectedIDBack, type: 'CCCD mặt sau' },
    ];

    const uploadPromises = filesToUpload.map(item =>
      fileUpload(item.file, endpoint).then(response => ({ type: item.type, url: response.data.url })).catch(error => ({ type: item.type, error: true }))
    );

    try {
      const results = await Promise.all(uploadPromises);
      console.log(results);
      
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
      
      console.log(checkSelectedImages());
      if (checkSelectedImages()) {
        const uploadSuccess = await fileUploadHandler();
        console.log(uploadSuccess);
        if (uploadSuccess) {
          const formDataToSend = mapFormDataToApiDataMerchant(formData, uploadedURLs);

          axios.post('https://duantotnghiep-api-a32664265dc1.herokuapp.com/merchants/createMerchant', JSON.stringify(formDataToSend), {
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
                <h3>Thông tin nhà hàng:</h3>
                <InforMerchantForm
                  formData={formData}
                  handleChange={handleChange}
                  validateEmail={validateEmail}
                  selectedHandler={selectedHandler}
                  categories={categories}
                />
                <div className={cx('button-wrapper')}>
                  <div></div>
                  <button type="button" className={cx('back-btn')} onClick={() => setShowDiv1(!showDiv1)}>tiếp theo</button>
                </div>
              </div>
              <div className={cx('new-div', { 'slide-in': !showDiv1 }, { 'slide-out': showDiv1 })}>
                <h3>Thông tin chủ cửa hàng:</h3>
                <InforOwnerForm
                  formData={formData}
                  handleChange={handleChange}
                  validatePhoneNumber={validatePhoneNumber}
                  validateEmail={validateEmail}
                  selectedHandler={selectedHandler}
                  avatarPreview={avatarPreview}
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

export default RegisterMerchant;
