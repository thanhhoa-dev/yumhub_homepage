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

export const mapFormDataToApiData = (formData, uploadedURLs) => {
  const avatarURL = uploadedURLs[0] || '';
  const idFrontURL = uploadedURLs[1] || '';
  const idBackURL = uploadedURLs[2] || '';
  const driverFrontURL = uploadedURLs[3] || '';
  const driverBackURL = uploadedURLs[4] || '';

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
  };
};
export const mapFormDataToApiDataMerchant = (formData, uploadedURLs) => {
  const imgbg = uploadedURLs[0] || '';
  const license = uploadedURLs[1] || '';
  const avatar = uploadedURLs[2] || '';

  return {
    name: formData["Tên cửa hàng"],
    address: formData["Địa chỉ"],
    type: "661760e3fc13ae3574ab8cde",
    openTime: formData["Giờ mở cửa"],
    closeTime: formData["Giờ đóng cửa"],
    imageBackground: imgbg,
    imageDocuments: [license],
    fullName: formData["Họ và tên"],
    phoneNumber: formData["Số điện thoại"],
    email: formData["Email"],
    avatar: avatar,
    sex: formData["Giới tính"],
  };
};
