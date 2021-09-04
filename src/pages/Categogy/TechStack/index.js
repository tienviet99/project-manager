import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
 
export default function TechStack() {
  const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'success':
          NotificationManager.success('Dữ liệu đã được cập nhật', 'Thành Công');
          break;
        case 'error':
          NotificationManager.error('Vui lòng nhập đủ thông tin', 'Thất Bại!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
 
    return (
      <div>
        <button className='btn btn-success'
          onClick={(e) => {createNotification('success')}}>Success
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={createNotification('error')}>Error
        </button>
 
        <NotificationContainer/>
      </div>
    );
}
 