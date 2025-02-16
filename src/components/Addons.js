import React from 'react';
import './Addons.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Addons = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { billingCycle, planName } = location.state || {}; // Destructure billingCycle and planName from state
    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };
    
    const handleNextStep = () => {
        navigate('/Summary', { state: { billingCycle, planName } }); // Pass billing cycle and plan name
    };

    return (
        <div className="container">
            <div className="sidebar">
        
        <h4>
          <span className="step-circle ">1</span>
          STEP 1
        </h4>
        <p>Your Info</p>
        
        <h4>
          <span className="step-circle ">2</span>
          STEP 2
        </h4>
        <p>Select Plan</p>

        <h4>
          <span className="step-circle active">3</span>
          STEP 3
        </h4>
        <p>Add-Ons</p>

        <h4>
          <span className="step-circle">4</span>
          STEP 4
        </h4>
        <p>Smmary</p>
        </div>
            <div className="content">
                <h2>Pick add-ons</h2>
                <p>Add-ons help enhance your gaming experience.</p>
                <div className="checkbox-group">
                    {billingCycle === 'monthly' ? (
                        <>
                            <label>
                                <input type="checkbox" />
                                <div className="online">
                                    <h7>Online service</h7>
                                    <p className="description">Access to multiplayer games</p>
                                </div>
                                <p className="price">+ $1/mo</p>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <div className="online">
                                    <h7>Larger storage</h7>
                                    <p className="description">Extra 1 TB of cloud save</p>
                                </div>
                                <p className="price">+ $2/mo</p>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <div className="online">
                                    <h7>Customizable profile</h7>
                                    <p className="description">Custom theme on your profile</p>
                                </div>
                                <p className="price">+ $2/mo</p>
                            </label>
                        </>
                    ) : (
                        <>
                            <label>
                                <input type="checkbox" />
                                <div className="online">
                                    <h7>Online service</h7>
                                    <p className="description">Access to multiplayer games</p>
                                </div>
                                <p className="price">+ $10/yr</p>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <div className="online">
                                    <h7>Larger storage</h7>
                                    <p className="description">Extra 1 TB of cloud save</p>
                                </div>
                                <p className="price">+ $20/yr</p>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <div className="online">
                                    <h7>Customizable profile</h7>
                                    <p className="description">Custom theme on your profile</p>
                                </div>
                                <p className="price">+ $20/yr</p>
                            </label>
                        </>
                    )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <button className='go-back2' onClick={handleGoBack}>Go Back</button> 
                    <button className="next-step2" onClick={handleNextStep}>Next Step</button>
                </div>
            </div>
        </div>
    );
};

export default Addons;