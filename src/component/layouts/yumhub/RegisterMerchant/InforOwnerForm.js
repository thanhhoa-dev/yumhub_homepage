// PersonalInfoForm.js
import React from 'react';
import classNames from "classnames/bind";
import styles from "./RegisterMerchant.module.scss";

const cx = classNames.bind(styles);

const InforOwnerForm = ({ formData, handleChange, validatePhoneNumber, validateEmail, selectedHandler, avatarPreview }) => {
  return (
    <>
      {Object.keys(formData).slice(7).map((key) => (
        <div className={cx('form-group')} key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          {key === 'Giới tính' ? (
            <select id={key} name={key} value={formData[key]} onChange={handleChange}>
              <option value="Orther">Khác</option>
              <option value="Male">Nam</option>
              <option value="Female">Nữ</option>
            </select>
          ) : key === 'Ảnh khuôn mặt' ? (
            <>
              <input
                type="file"
                id={key}
                name={key}
                accept="image/*"
                onChange={e => selectedHandler(e, 'Ảnh khuôn mặt')}
                required
              />
              {avatarPreview && <img src={avatarPreview} alt="Avatar Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
            </>
          ) : key === 'Ngày sinh' ? (
            <input
              type="date"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          ) : key === 'Số điện thoại' ? (
            <>
              <input
                type='text'
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required={true}
              />
              {!validatePhoneNumber() && <p className={cx('error-message')}>Số điện thoại chưa hợp lệ</p>}
            </>
          ) : (
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

export default InforOwnerForm;
