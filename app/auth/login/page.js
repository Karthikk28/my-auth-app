"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/lib/authApi";
import "../../globals.css";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser(form);

      if (token) {
        localStorage.setItem("token", token);
        alert("Login successful");

    
        router.push("/");

      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>

      <form onSubmit={handleLogin}>
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button className="auth-button" type="submit">
          Login
        </button>
      </form>

      <p className="auth-link">
        Don’t have an account? <a href="/auth/register">Register</a>
        <br />
        <a href="/auth/forgot">Forgot Password?</a>
      </p>
    </div>
  );
}
