"use client"
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import '../css/Login.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { validatePassword } from "./functions";
import { signUp } from "./actions";
import { UserProvider, useUserContext } from "../utils/context/user_context";

const AdminSignUpFormPageLogin = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  // const navigate = useNavigate();


  const router = useRouter();
  const { user, setUser } = useUserContext()

  useEffect(() => {
    const adminName = localStorage.getItem("adminName");
    if (adminName) {
      router.push("/AdminDashboard");
    }
  }, [router]);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!phoneNumber || !password || !firstName || !lastName) {
      setError("Credentials required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password Mismatch - try again!")
    }

    const validation_result = validatePassword(password)

    if (!validation_result.valid) setError(validation_result.errors.toString())

    console.log(firstName, lastName, email, phoneNumber, password)

    try {
      const response = await signUp(firstName, lastName, email, phoneNumber, password);

      console.log(response)

      if (response.status == '201') {

        setUser({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phone: response.data.phone,
          userId: response.data.userId,
          access: response.data.access,
        })

        // router.push("/AdminSignUpFormPage");
      } else {
        setError(data.error || "Invalid phone number or password");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      <Header />


      <div className="page-wrapper">
        <div className="login-container">
          <div className="login-card">

            {/* ---------- RIGHT SIDE FORM ---------- */}
            <div className="login-right">
              <h2>Welcome Adding Page 👋</h2>
              <p className="login-subtext">Login to continue your journey</p>

              <form onSubmit={handleLogin}>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name..."
                  maxLength="20"
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name..."
                  maxLength="20"
                  required
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email..."
                  maxLength="50"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
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

                <label>Confirm Password</label>
                <div className="password-field">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter your password again..."
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span
                    className="eye"
                    onClick={() => setShowConfirmPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </span>
                </div>

                {error && <p className="error-text">{error}</p>}

                <div className="forgot">
                  <a href="/UnderConstruction">Forgot Password?</a>
                </div>

                <button type="submit">Sign Up</button>

                <p className="signup">
                  Already have an account?{" "}
                  <a href="/login">Log In</a>
                </p>
              </form>
            </div>

            {/* <div className="login-right">
              <h2>Welcome Adding Page 👋</h2>
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
                  <span className="eye" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </span>
                </div>

                {error && <p className="error-text">{error}</p>}

                <div className="forgot">
                  <a href="/UnderConstruction">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>

                <p className="signup">
                  Don't have an account? <a href="/SignUP">Sign Up</a>
                </p>
              </form>
            </div> */}

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
