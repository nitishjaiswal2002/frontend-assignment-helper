import React, { useState } from "react";
import "./PlanSelector.css";
import iconarcade from "../assets/images/iconarcade.svg";
import iconadvanced from "../assets/images/iconadvanced.svg";
import iconpro from "../assets/images/iconpro.svg";
import { useNavigate } from "react-router-dom";

const PlanSelector = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const navigate = useNavigate();

  const handleBillingToggle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleNextStep = (planName) => {
    navigate("/Addons", { state: { billingCycle, planName } }); // Pass billing cycle and plan name
  };

  return (
    <div className="plan-selector">
      <div className="sidebar-1">
        <h4>
          <span className="step-circle ">1</span>
          STEP 1
        </h4>
        <p>Your Info</p>

        <h4>
          <span className="step-circle active">2</span>
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
        <p>Smmary</p>
      </div>
      <div className="plan-options">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="plans">
          <div className="plan-card" onClick={() => handleNextStep("Arcade")}>
            <img
              src={iconarcade}
              alt="Arcade Plan"
              style={{ marginRight: "40px" }}
            />
            <h3>Arcade</h3>
            <p>$9/{billingCycle}</p>
          </div>

          <div className="plan-card" onClick={() => handleNextStep("Advanced")}>
            <img
              src={iconadvanced}
              alt="Arcade Plan"
              style={{ marginRight: "40px" }}
            />
            <h3>Advanced</h3>
            <p>$12/{billingCycle}</p>
          </div>
          <div className="plan-card" onClick={() => handleNextStep("Pro")}>
            <img
              src={iconpro}
              alt="Arcade Plan"
              style={{ marginRight: "40px" }}
            />
            <h3>Pro</h3>
            <p>$15/{billingCycle}</p>
          </div>
        </div>
        <div className="billing-toggle">
          <span>Monthly</span>
          <label className="switch">
            <input type="checkbox" onChange={handleBillingToggle} />
            <span className="slider"></span>
          </label>
          <span>Yearly</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <button className="go-back1" onClick={handleGoBack}>
            Go Back
          </button>
          <button className="next-step1" onClick={() => handleNextStep("Arcade")}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanSelector;
