import React from 'react';
import '../assets/css/ProgressBar.css'

function ProgressBar2({ step }) {
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
    <div className={`step2 ${step >= 2 ? 'completed' : ''}`}>
    Set Appoinment with Doctor
      <span className="arrow"></span>
    </div>
    <div className={`step3 ${step >= 3 ? 'completed' : ''}`}>Input Info</div>
    </div>
  );
}

export default ProgressBar2;
