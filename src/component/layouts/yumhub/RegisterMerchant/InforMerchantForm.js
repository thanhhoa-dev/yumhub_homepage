// PersonalInfoForm.js
import React from 'react';
import classNames from "classnames/bind";
import styles from "./RegisterMerchant.module.scss";

const cx = classNames.bind(styles);

const InforMerchantForm = ({ formData, handleChange, validateEmail, selectedHandler, categories }) => {
  return (
    <>
      {Object.keys(formData).slice(0, 7).map((key) => (
        <div className={cx('form-group')} key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          {key === 'Loại nhà hàng' ? (
             <select name="Loại nhà hàng" value={formData["Loại nhà hàng"]} onChange={handleChange}>
             <option value="">Chọn loại nhà hàng</option>
             {categories.map(category => (
               <option key={category._id} value={category._id}>{category.name}</option>
             ))}
           </select>
          ) : key === 'Ảnh nền/đại diện' || key === 'Giấy phép kinh doanh' ? (
            <>
              <input
                type="file"
                id={key}
                name={key}
                accept="image/*"
                onChange={e => selectedHandler(e, key)}
                required
              />
            </>
          ) : key === 'Giờ mở cửa' || key === 'Giờ đóng cửa' ? (
            <input
              type="time"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          ): (
            <>
              <input
                type='text'
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required={true}
              />
                {key === 'Email' && !validateEmail() && <p className={cx('error-message')}>Email chưa hợp lệ</p>}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default InforMerchantForm;
