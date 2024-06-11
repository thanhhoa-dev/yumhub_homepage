
import React, { createContext, useState, useContext, useCallback } from 'react';
import Notification from '../component/notification/Notification';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });

  const showNotification = useCallback((message, type) => {
    setNotification({ message, type, visible: true });
  }, []);

  const hideNotification = useCallback(() => {
    setNotification({ ...notification, visible: false });
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Notification 
        message={notification.message}
        type={notification.type}
        visible={notification.visible}
        onClose={hideNotification}
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {return useContext(NotificationContext)};
