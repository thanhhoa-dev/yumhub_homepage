import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useLoading } from "../../../../context/LoadingContext";
import { useNotification } from "../../../../context/NotificationContext";
import { fileUpload } from "../../../../utils/FormHelpers"; // Giả định bạn có hàm này từ utils

function UpdateMerchantInfo() {
  const { setLoading } = useLoading();
  const { showNotification } = useNotification();
  const [formData, setFormData] = useState({
    image: '',
    fullName: '',
    address: '',
    email: '',
    phoneNumber: '',
    nameOwner:"",
    IDCardFont: '',
    IDCardBack: '',
    businessLicenseFont: '',
    businessLicenseBack: '',
  });
  const [uploadedURLs, setUploadedURLs] = useState([]);

  const location = useLocation();
  const path = location.pathname;
  const fieldsString = path.split('/').pop(); // Lấy chuỗi số từ URL
  const id = path.split('/')[2];
  const fieldMapping = {
    '1': 'image',
    '2': 'name',
    '3': 'address',
    '4': 'email',
    '5': 'phoneNumber',
    '6': 'nameOwner',
    '7': 'IDCard',
    '8': 'businessLicense',
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
    const endpoint = 'http://localhost:3001/files/upload';
    const filesToUpload = Object.keys(formData)
      .filter(key => formData[key] instanceof File)  // Chỉ chọn các file
      .map(key => ({ file: formData[key], field: key }));

    const uploadPromises = filesToUpload.map(item =>
      fileUpload(item.file, endpoint)
        .then(response => ({ field: item.field, url: response.data.url }))
        .catch(error => ({ field: item.field, error: true }))
    );

    try {
      const results = await Promise.all(uploadPromises);
      const errors = results.filter(result => result.error);
      const successURLs = results.filter(result => !result.error);

      if (errors.length > 0) {
        showNotification(`Upload lỗi cho các loại ảnh: ${errors.map(e => e.field).join(', ')}`, "error", true);
        return false;
      } else {
        const updatedFormData = { ...formData };
        successURLs.forEach(item => {
          updatedFormData[item.field] = item.url;  // Ghi đè file bằng URL
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
      const response = await axios.patch(`http://localhost:3001/shippers/updateShipper-web?id=${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.result) {
        showNotification("Cập nhật thành công", "success", true);
      } else {
        showNotification("Cập nhật không thành công", "error", true);
      }
    } catch (error) {
      showNotification("Có lỗi xảy ra khi cập nhật", "error", true);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Cập nhật thông tin</h2>
      <form onSubmit={handleUpdate} encType="multipart/form-data">
        {fieldsToUpdate.image && (
          <div>
            <label>Ảnh đại diện cửa hàng</label>
            <input type="file" name="image" onChange={(e) => handleFileChange(e, "image")} required />
          </div>
        )}
        {fieldsToUpdate.name && (
          <div>
            <label>Tên cửa hàng</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.address && (
          <div>
            <label>Địa chỉ cửa hàng</label>
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
        {fieldsToUpdate.nameOwner && (
          <div>
            <label>Tên chủ cửa hàng</label>
            <input type="text" name="nameOwner" value={formData.nameOwner} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.IDCard && (
          <div>
            <label>Biển số xe</label>
            <input type="text" name="IDCardFont" value={formData.IDCard} onChange={handleChange} required />
          </div>
        )}
        {fieldsToUpdate.IDCard && (
          <div>
            <label>Mặt trước CCCD</label>
            <input type="file" name="IDCardFont" onChange={(e) => handleFileChange(e, "IDCardFont")} required />
            <label>Mặt sau CCCD</label>
            <input type="file" name="IDCardBack" onChange={(e) => handleFileChange(e, "IDCardBack")} required />
          </div>
        )}
        {fieldsToUpdate.businessLicense && (
          <div>
            <label>Mặt trước GPLX</label>
            <input type="file" name="businessLicenseFont" onChange={(e) => handleFileChange(e, "businessLicenseFont")} required />
            <label>Mặt sau GPLX</label>
            <input type="file" name="businessLicenseBack" onChange={(e) => handleFileChange(e, "businessLicenseBack")} required />
          </div>
        )}
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default UpdateMerchantInfo;
