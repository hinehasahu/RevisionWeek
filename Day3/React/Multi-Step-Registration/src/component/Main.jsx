import React from "react";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AccountDetails from "./AccountDetails";
import Preferences from "./Preferences";
import Display from "./Display";

function Main() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    telephone: "",
    city: "",
    username: "",
    detail: "",
    theme: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo data={formData} onChange={handleChange} />;
      case 2:
        return <AccountDetails data={formData} onChange={handleChange} />;
      case 3:
        return <Preferences data={formData} onChange={handleChange} />;
      case 4:
        return <Display data={formData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ul>
        <li style={{color: step>=1? "green": "black"}} >1. Personal Info</li>
        <li style={{color: step>=2? "green": "black"}}>2. Account Details</li>
        <li style={{color: step>=3? "green": "black"}}>3. Preferences</li>
      </ul>
      {renderStep()}
      <div>
        {step > 1 && step <= 4 && ( <button onClick={prevStep} >Back</button>)}
        {step <= 4 && ( <button onClick={nextStep} >Next</button>)}
      </div>
    </div>
  );
}

export default Main;
