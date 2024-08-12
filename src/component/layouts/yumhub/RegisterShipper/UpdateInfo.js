import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useLoading } from "../../../../context/LoadingContext";
import { useNotification } from "../../../../context/NotificationContext";
import { fileUpload } from "../../../../utils/FormHelpers"; // Assume you have this utility function

function UpdateShipperInfo() {
  const { setLoading } = useLoading();
  const { showNotification } = useNotification();
  const [formData, setFormData] = useState({
    avatar: '',
    fullName: '',
    address: '',
    email: '',
    phoneNumber: '',
    birthDay: '',
    brandBike: '',
    modeCode: '',
    idBike: '',
    idCardFront: '',
    idCardBack: '',
    driverLicenseFront: '',
    driverLicenseBack: '',
    vehicleCertificateFront: '',
    vehicleCertificateBack: '',
  });

  const location = useLocation();
  const path = location.pathname;
  const fieldsString = path.split('/').pop(); // Extract the string of numbers from the URL
  const id = path.split('/')[2];
  
  const fieldMapping = {
    '1': 'image',
    '2': 'fullName',
    '3': 'address',
    '4': 'email',
    '5': 'phoneNumber',
    '6': 'birthDay',
    '7': 'brandBike',
    '8': 'modeCode',
    '9': 'idBike',
    'a': 'idCard',
    'b': 'driverLicense',
    'c': 'vehicleCertificate'
  };

  const fieldsToUpdate = {};

  for (let char of fieldsString) {
    fieldsToUpdate[fieldMapping[char]] = true;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [field]: file
    });
  };

  const fileUploadHandler = async () => {
    const endpoint = 'https://duantotnghiep-api-a32664265dc1.herokuapp.com/files/upload';
    const filesToUpload = Object.keys(formData)
      .filter(key => formData[key] instanceof File)  // Only select the files
      .map(key => ({ file: formData[key], field: key }));

    const uploadPromises = filesToUpload.map(item =>
      fileUpload(item.file, endpoint)
        .then(response => ({ field: item.field, url: response.data.url }))
        .catch(error => ({ field: item.field, error: true }))
    );

    
    try {
      const results = await Promise.all(uploadPromises);
      console.log(results);
      const errors = results.filter(result => result.error);
      const successURLs = results.filter(result => !result.error);

      if (errors.length > 0) {
        showNotification(`Upload lỗi cho các loại ảnh: ${errors.map(e => e.field).join(', ')}`, "error", true);
        return false;
      } else {
        const updatedFormData = { ...formData };
        successURLs.forEach(item => {
          updatedFormData[item.field] = item.url;  // Overwrite file with URL
        });
        setFormData(updatedFormData);
        return true;
      }
    } catch (err) {
      showNotification(`Có lỗi xảy ra khi upload ảnh`, "error", true);
      return false;
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadSuccess = await fileUploadHandler();
    if (!uploadSuccess) {
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.patch(`https://duantotnghiep-api-a32664265dc1.herokuapp.com/shippers/updateShipper-web?id=${id}`, JSON.stringify(formDataToSend), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.result) {
        showNotification("Cập nhật thành công", "success", true);
      } else {
        showNotification("Cập nhật không thành công", "error", true);
      }
    } catch (error) {
      showNotification("Có lỗi xảy ra khi cập nhật", "error", true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Cập nhật thông tin</h2>
      <form onSubmit={handleUpdate} encType="multipart/form-data">
        {fieldsToUpdate.image && (
          <div>
            <label>Ảnh đại diện</label>
            <input type="file" name="image" onChange={(e) => handleFileChange(e, "image")} required />
          </div>
        )}
        {fieldsToUpdate.fullName && (
          <div>
            <label>Họ và tên</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.address && (
          <div>
            <label>Địa chỉ</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.email && (
          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.phoneNumber && (
          <div>
            <label>Số điện thoại</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.birthDay && (
          <div>
            <label>Ngày sinh</label>
            <input type="date" name="birthDay" value={formData.birthDay} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.brandBike && (
          <div>
            <label>Thương hiệu xe</label>
            <input type="text" name="brandBike" value={formData.brandBike} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.modeCode && (
          <div>
            <label>Mã xe</label>
            <input type="text" name="modeCode" value={formData.modeCode} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.idBike && (
          <div>
            <label>Biển số xe</label>
            <input type="text" name="idBike" value={formData.idBike} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.idCard && (
          <div>
            <label>Mặt trước CCCD</label>
            <input type="file" name="idCardFront" onChange={(e) => handleFileChange(e, "idCardFront")} required />
            <label>Mặt sau CCCD</label>
            <input type="file" name="idCardBack" onChange={(e) => handleFileChange(e, "idCardBack")} required />
          </div>
        )}
        {fieldsToUpdate.driverLicense && (
          <div>
            <label>Mặt trước GPLX</label>
            <input type="file" name="driverLicenseFront" onChange={(e) => handleFileChange(e, "driverLicenseFront")} required />
            <label>Mặt sau GPLX</label>
            <input type="file" name="driverLicenseBack" onChange={(e) => handleFileChange(e, "driverLicenseBack")} required />
          </div>
        )}
        {fieldsToUpdate.vehicleCertificate && (
          <div>
            <label>Mặt trước giấy đăng ký xe</label>
            <input type="file" name="vehicleCertificateFront" onChange={(e) => handleFileChange(e, "vehicleCertificateFront")} required />
            <label>Mặt sau giấy đăng ký xe</label>
            <input type="file" name="vehicleCertificateBack" onChange={(e) => handleFileChange(e, "vehicleCertificateBack")} required />
          </div>
        )}
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default UpdateShipperInfo;
