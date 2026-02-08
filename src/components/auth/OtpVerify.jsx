import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();

    // MOCK OTP CHECK
    if (otp === "123456") {
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("role", "manager");
      navigate("/dashboard");
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="auth-container">
      <h2>Verify OTP</h2>
      <p>Enter the OTP sent to your email</p>

      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default OtpVerify;
