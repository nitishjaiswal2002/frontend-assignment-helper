// src/Summary.js
import React from "react";
import "./summary.css";
import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { billingCycle, planName } = location.state || {}; // Destructure billingCycle and planName from state

    // Adjust base price for yearly or monthly
    const basePrice = billingCycle === "monthly" ? 9 : 90; 
    const addons = [
        { name: "Online service", price: billingCycle === "monthly" ? 1 : 10 },
        { name: "Larger storage", price: billingCycle === "monthly" ? 2 : 20 },
        { name: "Customizable profile", price: billingCycle === "monthly" ? 2 : 20 }, // Added customizable profile
    ];

    // Calculate total price based on base price and add-ons
    const total = basePrice + addons.reduce((acc, addon) => acc + addon.price, 0);

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleNextStep = () => {
        navigate("/ThankYou");
      };

    return (
        <div className="summary-container">
            <div className="sidebar-1">
                <h4>
                    <span className="step-circle ">1</span>
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
                    <span className="step-circle active">4</span>
                    STEP 4
                </h4>
                <p>Summary</p>
            </div>
            <div className="summary-content">
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="plan-summary">
                    {/* Display Plan Name and Base Price */}
                    <h4>
                        {planName}{" "}
                        <span style={{ marginLeft: "140px" }}>(${basePrice}/{billingCycle})</span>
                        <p style={{ color: "#ababb7", marginBottom: "20px",cursor:"pointer" }}>
                            <u>Change</u>
                        </p>
                    </h4>

                    {/* Display Add-ons */}
                    <div className="addons">
                        {addons.map((addon, index) => (
                            <p key={index}>
                                {addon.name}
                                <span style={{ marginLeft: "110px", color: "#4a43c9"}}>
                                    +${addon.price}/{billingCycle}
                                </span>
                            </p>
                        ))}
                    </div>

                    {/* Display Total Price */}
                    <p>
                        Total ({billingCycle}){" "}
                        <span style={{ marginLeft: "120px", color: "" }}>+${total}/{billingCycle}</span>
                    </p>
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
                    <button className="next-step1" onClick={handleNextStep}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Summary;