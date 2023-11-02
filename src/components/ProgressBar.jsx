import React from 'react';
import '../assets/css/ProgressBar.css'

function ProgressBar({ step }) {
  return (
    // <div className="progress-bar">
    //   <button className={step >= 1 ? 'active' : ''}>Input Sypmtoms</button>
    //   <button className={step >= 2 ? 'active' : ''}>Set Appoinment with Doctor</button>
    //   <button className={step >= 3 ? 'active' : ''}>Input Info</button>
    // </div>

    <div className="progress-bar">
    <div className={`step1 ${step >= 1 ? 'completed' : ''}`}>
    Input Sypmtoms
      <span className="arrow"></span>
    </div>
    <div className={`step ${step >= 2 ? 'completed' : ''}`}>
    Set Appoinment with Doctor
      <span className="arrow"></span>
    </div>
    <div className={`step ${step >= 3 ? 'completed' : ''}`}>Input Info</div>
    </div>
  );
}

export default ProgressBar;
