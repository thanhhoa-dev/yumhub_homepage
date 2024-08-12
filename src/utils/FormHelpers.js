// utils/formHelpers.js
import axios from 'axios';

export const fileUpload = async (file, endpoint) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post(endpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
const formatTimeTo12Hour = (time24) => {
  const [hours, minutes] = time24.split(':');
  const hours12 = (hours % 12) || 12; // Chuyển đổi sang định dạng 12 giờ
  const period = hours >= 12 ? 'PM' : 'AM'; // Xác định AM hoặc PM
  return `${hours12}:${minutes} ${period}`;
};

export const mapFormDataToApiData = (formData, uploadedURLs) => {
  const avatarURL = uploadedURLs[0] || '';
  const idFrontURL = uploadedURLs[1] || '';
  const idBackURL = uploadedURLs[2] || '';
  const driverFrontURL = uploadedURLs[3] || '';
  const driverBackURL = uploadedURLs[4] || '';
  const parrotFrontURL = uploadedURLs[5] || '';
  const parrotBackURL = uploadedURLs[6] || '';

  return {
    fullName: formData["Họ và tên"],
    email: formData["Email"],
    phoneNumber: formData["Số điện thoại"],
    avatar: avatarURL,
    sex: formData["Giới tính"],
    birthDay: formData["Ngày sinh"],
    address: formData["Địa chỉ"],
    idCardFontSide: idFrontURL,
    idCardBackSide: idBackURL,
    driverLicenseFontSide: driverFrontURL,
    driverLicenseBackSide: driverBackURL,
    idBike: formData["Biển số xe"],
    brandBike: formData["Thương hiệu xe"],
    modeCode: formData["Modecode"],
    parrotCarFontSide: parrotFrontURL,
    parrotCarBackSide: parrotBackURL
  };
};
export const mapFormDataToApiDataMerchant = (formData, uploadedURLs) => {
  const imgbg = uploadedURLs[0] || '';
  const licenseFront = uploadedURLs[1] || '';
  const licenseBack = uploadedURLs[2] || '';
  const avatar = uploadedURLs[3] || '';
  const idFront = uploadedURLs[4] || '';
  const idBack = uploadedURLs[5] || '';
console.log("uploadedURLs", uploadedURLs);

  return {
    name: formData["Tên cửa hàng"],
    address: formData["Địa chỉ"],
    type: "661760e3fc13ae3574ab8cde",
    openTime: formatTimeTo12Hour(formData["Giờ mở cửa"]),
    closeTime: formatTimeTo12Hour(formData["Giờ đóng cửa"]),
    imageBackground: imgbg,
    businessFrontSide: licenseFront,
    businessBackSide: licenseBack,
    fullName: formData["Họ và tên"],
    phoneNumber: formData["Số điện thoại"],
    email: formData["Email"],
    avatar: avatar,
    sex: formData["Giới tính"],
    idCardFrontSide: idFront,
    idCardBackSide: idBack,
  };
};

