import { useState } from "react";
import logo from "../assets/logo.png";
import styles from "../styles/SignInWithEmail.module.css";

function SignInWithEmail() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");

  const handleSendLink = async () => {
    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("https://resuma-server.onrender.com/api/accounts/request-magic-link/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("✅ Magic link sent! Check your email.");
      } else {
        setStatus("error");
        setMessage(data.message || "❌ Failed to send magic link.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("❌ Network error. Please try again.");
    }
  };

  return (
    <section className={styles.section}>
      <img src={logo} alt="Logo" />
      <h1>Sign In with Email</h1>
      <p>We'll send you a secure sign-in link. No password needed.</p>

      <input
        type="email"
        placeholder="Enter your Email Address" name="sss" id="sss"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />

      <button 
        onClick={handleSendLink} 
        className={styles.button}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send me a Magic Link"}
      </button>

      {message && (
        <p 
          className={
            status === "error" ? styles.errorText : styles.successText
          }
        >
          {message}
        </p>
      )}
    </section>
  );
}

export default SignInWithEmail;
