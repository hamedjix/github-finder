import React from 'react';
import './Alert.scss';
import alertImg from './warning.png';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className='alert'>
        <img src={alertImg} alt='info' />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
