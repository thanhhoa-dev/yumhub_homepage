// DocumentInfoForm.js
import React from 'react';
import classNames from "classnames/bind";
import styles from "./RegisterShipper.module.scss";

const cx = classNames.bind(styles);

const DocumentInfoForm = ({ formData, handleChange, selectedHandler }) => {
  return (
    <>
      {Object.keys(formData).slice(7).map((key) => (
        <div className={cx('form-group')} key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          {key === 'Biển số xe' || key === 'Thương hiệu xe' || key === 'Modecode' ? (
            <input
              type='text'
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required={true}
            />
          ) : (
            <input
              type="file"
              id={key}
              name={key}
              accept="image/*"
              onChange={e => selectedHandler(e, key)}
              required
            />
          )}
        </div>
      ))}
    </>
  );
};

export default DocumentInfoForm;
