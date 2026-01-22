"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/lib/authApi";
import "../../globals.css";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const verifyEmail = () => {
    if (!form.email) return alert("Enter email first");
    alert(`Verification email sent to ${form.email}`);
    setEmailVerified(true);
  };

  const verifyMobile = () => {
    if (!form.mobile) return alert("Enter mobile number first");
    alert(`Verification SMS sent to ${form.mobile}`);
    setMobileVerified(true);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!emailVerified || !mobileVerified) {
      alert("Please verify email and mobile number");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await registerUser({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        mobile: form.mobile,
        password: form.password,
      });

      alert("Registration successful! Please login.");
      router.push("/auth/login");

    } catch (err) {
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>

      <form onSubmit={handleRegister}>
        <input
          className="input-field"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />

      
        <div className="verify-row">
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="verify-btn"
            onClick={verifyEmail}
            disabled={emailVerified}
          >
            {emailVerified ? "Verified" : "Verify"}
          </button>
        </div>

      
        <div className="verify-row">
          <input
            className="input-field"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="verify-btn"
            onClick={verifyMobile}
            disabled={mobileVerified}
          >
            {mobileVerified ? "Verified" : "Verify"}
          </button>
        </div>

        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button className="auth-button" type="submit">
          Register
        </button>
      </form>

      <p className="auth-link">
        Already have an account? <a href="/auth/login">Login</a>
      </p>
    </div>
  );
}
