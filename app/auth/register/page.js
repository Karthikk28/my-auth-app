"use client";
 
import { useState, useEffect } from "react";
import "../../globals.css";
 
export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailOtp: "",
    mobile: "",
    countryCode: "+91",
    mobileOtp: "",
    password: "",
    confirmPassword: "",
    captchaAnswer: "",
  });
 
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
 
  const [captcha, setCaptcha] = useState({
    text: "",
    scrambled: "",
  });
 
  /** Generate random word CAPTCHA */
  function generateCaptcha() {
    const words = ["orange", "banana", "galaxy", "shadow", "tiger", "silver", "matrix", "planet", "future", "coding"];
    const word = words[Math.floor(Math.random() * words.length)];
 
    // scramble visually
    const scrambled = word
      .split("")
      .map(ch => (Math.random() > 0.5 ? ch.toUpperCase() : ch))
      .join("");
 
    setCaptcha({
      text: word,
      scrambled: scrambled,
    });
  }
 
  /** Play audio CAPTCHA */
  function playAudioCaptcha() {
    const speech = new SpeechSynthesisUtterance(captcha.text);
    speech.rate = 0.9;
    speech.pitch = 0.8;
    window.speechSynthesis.speak(speech);
  }
 
  useEffect(() => {
    generateCaptcha();
  }, []);
 
  function sendEmailOtp() {
    if (!form.email) return alert("Enter email first");
    alert(`OTP sent to ${form.email}`);
    setEmailVerified(true);
  }
 
  function sendMobileOtp() {
    if (!form.mobile) return alert("Enter mobile number first");
    alert(`OTP sent to ${form.countryCode} ${form.mobile}`);
    setMobileVerified(true);
  }
 
  function handleSubmit(e) {
    e.preventDefault();
 
    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }
 
    if (form.captchaAnswer.trim().toLowerCase() !== captcha.text.toLowerCase()) {
      alert("CAPTCHA incorrect");
      generateCaptcha();
      return;
    }
 
    alert("Registration successful!");
  }
 
  return (
    <div className="auth-container">
      <h2 className="auth-title">Create your account</h2>
 
      <form onSubmit={handleSubmit}>
       
        {/* Names */}
        <input
          className="input-field"
          placeholder="First Name"
          value={form.firstName}
          onChange={e => setForm({ ...form, firstName: e.target.value })}
          required
        />
 
        <input
          className="input-field"
          placeholder="Last Name"
          value={form.lastName}
          onChange={e => setForm({ ...form, lastName: e.target.value })}
          required
        />
 
        {/* Email */}
        <div className="verify-row">
          <input
            className="input-field"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
          <button type="button" onClick={sendEmailOtp} className="verify-btn">
            Verify
          </button>
        </div>
 
        {emailVerified && (
          <input
            className="input-field"
            placeholder="Enter Email OTP"
            value={form.emailOtp}
            onChange={e => setForm({ ...form, emailOtp: e.target.value })}
            required
          />
        )}
 
        {/* Country Code + Mobile */}
        <div className="verify-row">
 
          <select
            className="input-field"
            style={{ width: "30%" }}
            value={form.countryCode}
            onChange={e => setForm({ ...form, countryCode: e.target.value })}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+61">🇦🇺 +61</option>
          </select>
 
          <input
            className="input-field"
            placeholder="Mobile Number"
            style={{ width: "70%" }}
            value={form.mobile}
            onChange={e => setForm({ ...form, mobile: e.target.value })}
            required
          />
 
          <button type="button" onClick={sendMobileOtp} className="verify-btn">
            Verify
          </button>
        </div>
 
        {mobileVerified && (
          <input
            className="input-field"
            placeholder="Enter Mobile OTP"
            value={form.mobileOtp}
            onChange={e => setForm({ ...form, mobileOtp: e.target.value })}
            required
          />
        )}
 
        {/* Password */}
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
 
        <input
          type="password"
          className="input-field"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
          required
        />
 
        {/* CAPTCHA */}
        <div className="captcha-box">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="captcha-text">{captcha.scrambled}</div>
 
            {/* Refresh Button */}
            <button
              type="button"
              onClick={generateCaptcha}
              className="captcha-refresh-btn"
              style={{
                fontSize: "20px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              ⟳
            </button>
 
            {/* Audio Button */}
            <button
              type="button"
              onClick={playAudioCaptcha}
              className="captcha-audio-btn"
              style={{
                fontSize: "20px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              🔊
            </button>
          </div>
 
          <input
            className="input-field"
            placeholder="Enter the word"
            value={form.captchaAnswer}
            onChange={e => setForm({ ...form, captchaAnswer: e.target.value })}
            required
          />
        </div>
 
        <button className="auth-button">Register</button>
      </form>
 
      <p className="auth-link">
        Already have an account? <a href="/auth/login">Login</a>
      </p>
    </div>
  );
}
 