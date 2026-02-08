import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

const RegisterForm = () => {
  
  const navigate = useNavigate();

  

  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [managerName, setManagerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser({
        company_name: companyName,
        industry,
        manager_name: managerName,
        email,
        password,
      });

      navigate("/verify-otp");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      {/* LEFT FORM */}
      <div className="auth-left">
        <h2>Register Manager</h2>
        <p className="sub-text">Create manager account</p>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <input
            className="auth-input"
            type="text"
            placeholder="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />

          <input
            className="auth-input"
            type="text"
            placeholder="Manager Name"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
          />

          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" disabled={loading}>
            {loading ? "Creating..." : "Create Manager"}
          </button>
        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>

      {/* RIGHT PURPLE */}
      <div className="auth-right">
        <img
          src="/src/assets/loginimage.png"
          alt="registerimage"
          className="auth-image"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
