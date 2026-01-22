"use client";

import { useState } from "react";

export default function ForgotPage() {
  const [email, setEmail] = useState("");

  function handleReset(e) {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
  }

  return (
    <div className="auth-container">
      <h2 className="auth-title">Reset your password</h2>

      <form onSubmit={handleReset}>
        <input
          className="input-field"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <button className="auth-button">Send Reset Link</button>
      </form>

      <p className="auth-link">
        <a href="/auth/login">Back to Login</a>
      </p>
    </div>
  );
}
