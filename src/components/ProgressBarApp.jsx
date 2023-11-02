import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import SymptomsInput from './SymptomsInput';
import SetAppointment from './SetAppointment';
import InformationInput from './InformationInput';

function ProgressBarApp() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      <ProgressBar step={step} />
      <div className="step-content">
        {step === 1 && <SymptomsInput handleNext={handleNext} />}
        {step === 1 && <SetAppointment handleNext={handleNext} />}
        {step === 2 && <InformationInput handleNext={handleNext} />}
      </div>
    </div>
  );
}

export default ProgressBarApp;
