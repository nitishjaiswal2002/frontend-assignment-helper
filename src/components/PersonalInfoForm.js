import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalInfoForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState({
    email: false,
    phone: false,
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNextStep = () => {
    let valid = true;
    const newError = { email: false, phone: false };

    if (!email.includes('@')) {
      newError.email = true;
      valid = false;
    }
    if (!phone) {
      newError.phone = true;
      valid = false;
    }
    
    setError(newError);

    if (valid) {
      console.log('Proceeding to next step...');
      navigate('/plan-selector'); // Navigate to the next step
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h4>
          <span className="step-circle active">1</span>
          STEP 1
        </h4>
        <p>Your Info</p>
        
        <h4>
          <span className="step-circle">2</span>
          STEP 2
        </h4>
        <p>Select Plan</p>

        <h4>
          <span className="step-circle">3</span>
          STEP 3
        </h4>
        <p>Add-Ons</p>

        <h4>
          <span className="step-circle">4</span>
          STEP 4
        </h4>
        <p>Summary</p>
      </div>
      <div className="form-container">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g. Stephen King' />
        
        <label>Email Address</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g. Stephenking@lorem.com' className={error.email ? 'error' : ''} />
        
        {error.email && <span className="error-message">This field is required</span>}
        
        <label>Phone Number</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='e.g. +123 456 789' className={error.phone ? 'error' : ''} />
        
        {error.phone && <span className="error-message">This field is required</span>}
        
        <button className="next-button" onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;