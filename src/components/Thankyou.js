import React from 'react';
import './Thankyou.css'; // Import CSS for styling
import iconthankyou from "../assets/images/iconthankyou.svg" 



const ThankYou = () => {
  return (
    <div className="thank-you-container">
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
          <span className="step-circle">3</span>
          STEP 3
        </h4>
        <p>Add-Ons</p>

        <h4>
          <span className="step-circle active">4</span>
          STEP 4
        </h4>
        <p>Smmary</p>
        </div>
      <div className="thank-you-message">
         <img
              src={iconthankyou}
              alt="Arcade Plan"
              style={{marginLeft:"160px",marginTop:"50px"}}
            />
        <h2 style={{marginLeft:"150px"}}>Thank you!</h2>
        <p style={{color:"#c2c3ca",textAlign:"center",fontSize:"10px"}}>
          Thanks for confirming your subscription! We hope you have fun using our 
          platform. If you ever need support, please feel free to email us at 
          support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;