import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export default function Alert() {
  const alertContext = useContext(AlertContext);
  const { alertData } = alertContext;

  return (
    alertData !== null && (
      <div className={`alert alert-${alertData.type}`}>
        <i className='fas fa-info-circle'></i> {alertData.msg}
      </div>
    )
  );
}
