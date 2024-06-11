// src/components/Notification/Notification.js
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

const Notification = ({ message, type, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div className={cx('notification', { visible }, type)}>
      {message}
      <button className={cx('close-btn')} onClick={onClose}>×</button>
    </div>
  );
};

export default Notification;
