import React from 'react'
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert">
        <div className="changeAlert--card">
          <p>Hubo cambios papi</p>
          <button className="RefreshButton" onClick={() => toggleShow(false)}>
            Actualizar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};