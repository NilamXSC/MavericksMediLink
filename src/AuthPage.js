import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Sign In"}</h2>
      <form>
        {!isRegister && <input type="email" placeholder="Email" required />}
        <input type="password" placeholder="Password" required />
        {isRegister && <input type="text" placeholder="Full Name" required />}
        <button type="submit">{isRegister ? "Register" : "Sign In"}</button>
      </form>

      {/* Social Login Options */}
      <p>Or continue with:</p>
      <button className="google-btn">Google</button>
      <button className="whatsapp-btn">WhatsApp</button>
      <button className="mobile-btn">Mobile Number</button>

      <p>
        {isRegister ? "Already have an account?" : "Don't have an account?"}
        <span onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? " Sign In" : " Register"}
        </span>
      </p>
    </div>
  );
};

export default AuthPage;
