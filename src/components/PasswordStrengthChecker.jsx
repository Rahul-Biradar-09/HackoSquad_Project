import React, { useState } from "react";
import "./PasswordStrengthChecker.css";
import { CheckCircle, XCircle, Eye, EyeOff } from "lucide-react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const criteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  };

  const strengthScore = Object.values(criteria).filter(Boolean).length;

  const getStrength = () => {
    switch (strengthScore) {
      case 4:
        return { label: "Strong", className: "strength-strong", value: 100 };
      case 3:
        return { label: "Medium", className: "strength-medium", value: 75 };
      case 2:
        return { label: "Weak", className: "strength-weak", value: 50 };
      default:
        return {
          label: "Very Weak",
          className: "strength-very-weak",
          value: 25,
        };
    }
  };

  const strength = getStrength();

  const tips = [
    "Use at least 8 characters.",
    "Include uppercase letters.",
    "Include numbers.",
    "Add special characters like !@#$%",
  ];

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Password Strength Checker</h2>

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            className="password-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Show strength bar only if user starts typing */}
        {password.length > 0 && (
          <div className="strength-section">
            <div className="strength-labels">
              <span>Strength: {strength.label}</span>
              <span>{strength.value}%</span>
            </div>
            <div
              className={`progress-bar ${strength.className}`}
              style={{ width: `${strength.value}%` }}
            ></div>
          </div>
        )}

        <div className="criteria">
          <h3>Criteria</h3>
          <ul>
            {Object.entries(criteria).map(([key, met]) => (
              <li key={key} className="criteria-item">
                {met ? (
                  <CheckCircle className="icon success" />
                ) : (
                  <XCircle className="icon fail" />
                )}
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tips">
          <h3>Tips to improve:</h3>
          <ol>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
