import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";


const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const response = await loginUser({
      email,
      password,
    });

    // 👇 backend jo token bheje
    localStorage.setItem("token", response.token);
    localStorage.setItem("role", response.user.role.toLowerCase());

    navigate("/dashboard");
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
        <h2>Login</h2>
        <p className="sub-text">Enter your account details</p>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text"
            placeholder="Username"
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

          <p className="forgot-text">Forgot Password?</p>

          <button className="auth-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="bottom-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Sign up</span>
        </p>
      </div>

      {/* RIGHT PURPLE */}
      <div className="auth-right">
        <img
          src="/src/assets/loginimage.png"
          alt="loginimage"
          className="auth-image"
        />
      </div>
    </div>
  );
};

export default LoginForm;