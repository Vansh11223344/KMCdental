import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Signup
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(""); // Simulated OTP
  const [isOtpSent, setIsOtpSent] = useState(false); // Track if OTP is sent

  // Simulated user data (replace with actual backend logic)
  const userData = {
    email: "user@example.com",
    password: "password123",
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === userData.email && password === userData.password) {
      setMessage(""); // Clear any previous messages
      navigate("/DentalForm");
    } else {
      setMessage("Invalid email or password. Please try again.");
    }
  };

  // Handle "Forgot Password" functionality
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (email === userData.email) {
      // Simulate sending the password to the provided email
      alert(`Your password has been sent to ${email}.`);
      setIsForgotPassword(false); // Reset back to login state
    } else {
      setMessage("Email not found. Please try again.");
    }
  };

  // Handle Signup submission
  const handleSignup = (e) => {
    e.preventDefault();
    if (!isOtpSent) {
      // Simulate sending OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
      setGeneratedOtp(otp);
      setIsOtpSent(true);
      alert(`OTP sent to ${email}.`);
    } else {
      // Verify OTP
      if (otp === generatedOtp) {
        alert("Registration successful! You can now login.");
        setIsSignup(false); // Go back to login
        setMessage(""); // Clear any messages
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    }
  };

  // Handle resend OTP
  const handleResendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate new OTP
    setGeneratedOtp(otp);
    alert(`New OTP sent to ${email}.`);
  };

  return (
    <div className="login-container">
      {!isSignup ? (
        !isForgotPassword ? (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            {message && <p className="error-message">{message}</p>}
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Login</button>
            <p
              className="forgot-password-link"
              onClick={() => setIsForgotPassword(true)}
            >
              Forgot Password?
            </p>
            <p
              className="signup-link"
              onClick={() => {
                setIsSignup(true);
                setMessage(""); // Clear any messages
              }}
            >
              Don't have an account? Sign Up
            </p>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword}>
            <h2>Forgot Password</h2>
            {message && <p className="error-message">{message}</p>}
            <p>Enter your registered email to receive your password.</p>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit">Send Password</button>
            <p
              className="back-to-login-link"
              onClick={() => {
                setIsForgotPassword(false);
                setMessage(""); // Clear any messages
              }}
            >
              Back to Login
            </p>
          </form>
        )
      ) : (
        <form onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          {message && <p className="error-message">{message}</p>}
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Gender:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          {isOtpSent && (
            <label>
              OTP:
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </label>
          )}
          <button type="submit">
            {isOtpSent ? "Verify OTP" : "Send OTP"}
          </button>
          {isOtpSent && (
            <p className="resend-otp-link" onClick={handleResendOtp}>
              Resend OTP
            </p>
          )}
          <p
            className="back-to-login-link"
            onClick={() => {
              setIsSignup(false);
              setMessage(""); // Clear any messages
            }}
          >
            Back to Login
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;