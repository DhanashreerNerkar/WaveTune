import React, { useState } from "react";
import "./Registartion.css";

function Registartion() {
  const [otherSelected, setOtherSelected] = useState(false);
  const [sameAddress, setSameAddress] = useState(false);
  const [PrimaryEmail, setPrimaryEmail] = useState("");
  const [SecondaryEmail, setSecondaryEmail] = useState("");
  const [Membership, setMembership] = useState("");
  const [Model, setModel] = useState("");
  const [customOption, setCustomOption] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [errors, setErrors] = useState({});

  const Options = {
    FreeTrial: ["1 Month", "6 Months", "1 Year"],
    PayAsYouGo: ["Primary", "Secondary", "Tertiary"],
    Paid: ["Silver", "Gold", "Platinum"],
  };

  // Helper function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Required field validation
    if (!PrimaryEmail) validationErrors.PrimaryEmail = "Primary Email is required.";
    else if (!validateEmail(PrimaryEmail)) validationErrors.PrimaryEmail = "Invalid Primary email format.";

    if (!SecondaryEmail) validationErrors.SecondaryEmail = "Secondary Email is required.";
    else if(!validateEmail(SecondaryEmail)) validationErrors.SecondaryEmail= "Imvalid Secondary Email";

    if (!Membership) validationErrors.Membership = "Membership Type is required.";
    if (!Model) validationErrors.Model = "Model is required.";
    if (!paymentMethod) validationErrors.paymentMethod = "Payment Method is required.";
    if (otherSelected && !customOption) validationErrors.customOption = "Specify Other is required.";

    // If errors exist, set them; otherwise, submit form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted!", {
        PrimaryEmail,
        SecondaryEmail,
        Membership,
        Model,
        paymentMethod,
        customOption,
      });
    }
  };

  return (
    <div>
      <h2>Membership Subscription</h2>
      <form className="complex-form" onSubmit={handleSubmit}>
        {/* Primary Email */}
        <div className="form-field">
          <label>
            Primary Email *
            <input
              type="text"
              value={PrimaryEmail}
              onChange={(e) => setPrimaryEmail(e.target.value)}
            />
          </label>
          {errors.PrimaryEmail && <span className="error">{errors.PrimaryEmail}</span>}
        </div>

        {/* Secondary Email */}
        <div className="form-field">
          <label>
            Secondary Email same as Primary Email:
            <input
              type="checkbox"
              checked={sameAddress}
              onChange={(e) => {
                const checked = e.target.checked;
                setSameAddress(checked);
                if (checked) setSecondaryEmail(PrimaryEmail);
                else setSecondaryEmail("");
              }}
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Secondary Email *
            <input
              type="text"
              value={SecondaryEmail}
              onChange={(e) => setSecondaryEmail(e.target.value)}
              readOnly={sameAddress}
            />
          </label>
          {errors.SecondaryEmail && <span className="error">{errors.SecondaryEmail}</span>}
        </div>

        {/* Membership Type */}
        <div className="form-field">
          <label>
            Select Membership Type *
            <select
              onChange={(e) => {
                setMembership(e.target.value);
                setModel(""); // Reset the model selection
              }}
            >
              <option value="">Select Membership</option>
              {Object.keys(Options).map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </label>
          {errors.Membership && <span className="error">{errors.Membership}</span>}
        </div>

        {/* Membership Model */}
        {Membership && (
          <div className="form-field">
            <label>
              Select Model *
              <select value={Model} onChange={(e) => setModel(e.target.value)}>
                <option value="">Select Model</option>
                {Options[Membership].map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </label>
            {errors.Model && <span className="error">{errors.Model}</span>}
          </div>
        )}

        {/* Payment Method */}
        <div className="form-field">
          <label>
            Select Payment Method *
            <select
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                setOtherSelected(e.target.value === "Other");
                if (e.target.value !== "Other") setCustomOption("");
              }}
            >
              <option value="">Select</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Other">Other</option>
            </select>
          </label>
          {errors.paymentMethod && <span className="error">{errors.paymentMethod}</span>}
        </div>

        {/* Specify Other */}
        {otherSelected && (
          <div className="form-field">
            <label>
              Specify Other *
              <input
                type="text"
                placeholder="Enter custom option"
                value={customOption}
                onChange={(e) => setCustomOption(e.target.value)}
              />
            </label>
            {errors.customOption && <span className="error">{errors.customOption}</span>}
          </div>
        )}

        {/* Submit Button */}
        <div className="form-field">
          <button type="submit">Submit</button>
        </div>
        <h4>All the fields marked with (*) are mandatory</h4>
      </form>
    </div>
  );
}

export default Registartion;
