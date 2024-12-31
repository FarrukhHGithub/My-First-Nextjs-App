'use client'
import React, { useState } from "react";
const LoginPage: React.FC = () => {
  // State for form fields
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Dummy validation for frontend
    if (!email || !password) {
      setMessage("Please fill in both email and password.");
      return;
    }

    // Dummy login check
    if (email === "user@example.com" && password === "password123") {
      setMessage(`Login successful! Welcome ${email}.`);
    } else {
      setMessage("Invalid email or password.");
    }

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      {message && <p style={{ marginTop: "15px", color: message.includes("successful") ? "green" : "red" }}>{message}</p>}
    </div>
  );
};

export default LoginPage;
