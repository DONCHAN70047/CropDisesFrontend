'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { loginUser } from "./actions";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const router = useRouter()

  useEffect(() => {
    const adminName = localStorage.getItem("adminName");
    if (adminName) {
      router.push("/AdminDashboard");
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!phoneNumber || !password) {
      setError("Please enter both phone number and password.");
      return;
    }

    try {
      // const response = await fetch(
      //   `${import.meta.env.VITE_BACKEND_URL}/api/login/`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       phone_number: phoneNumber,
      //       password: password,
      //     }),
      //   }
      // );

      const response = await loginUser(phoneNumber, password);

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminName", data.admin_name);
        navigate("/AdminDashboard");
      } else {
        setError(data.error || "Invalid phone number or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      <Header />  

      <div className="login-container">
        <div className="login-card">
          {/* ---------- LEFT SIDE IMAGE ---------- */}
          <div className="login-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4727/4727420.png"
              alt="Illustration"
              className="login-illustration"
            />
            <p className="left-text">
              Empower your journey with secure and fast access 🚀
            </p>
          </div>

          {/* ---------- RIGHT SIDE FORM ---------- */}
          <div className="login-right">
            <h2>Welcome Back 👋</h2>
            <p className="login-subtext">Login to continue your journey</p>

            <form onSubmit={handleLogin}>
              <label>Enter Phone Number</label>
              <input
                type="text"
                placeholder="Enter Mobile Number..."
                maxLength="10"
                required
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  setPhoneNumber(value);
                }}
              />

              <label>Enter Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password..."
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>

              {error && <p className="error-text">{error}</p>}

              <div className="forgot">
                <a href="/UnderConstruction">Forgot Password?</a>
              </div>

              <button type="submit">Login</button>

              <p className="signup">
                Don’t have an account?{" "}
                <a href="/SignUP">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
