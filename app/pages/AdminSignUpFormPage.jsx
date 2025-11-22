import React, { useState } from "react";
import "./AdminSignUpFormPage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AdminSignUpFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    password: "",
    photo: null,
  });

  const [photoName, setPhotoName] = useState("No file chosen");

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoName(file.name);
      setFormData((prev) => ({ ...prev, photo: file }));
    } else {
      setPhotoName("No file chosen");
      setFormData((prev) => ({ ...prev, photo: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("first_name", formData.firstName);
    data.append("second_name", formData.secondName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("password", formData.password);
    if (formData.photo) data.append("photo", formData.photo);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin-register/`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("✅ Admin registered successfully!");

        
        setFormData({
          firstName: "",
          secondName: "",
          email: "",
          phone: "",
          password: "",
          photo: null,
        });
        setPhotoName("No file chosen");
      } else {
        const errData = await response.json();
        alert(`⚠️ Registration failed: ${errData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong while registering!");
    }
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-card">
          <h1 className="title">💼 Admin Registration</h1>
          <p className="subtitle">Join the future of fintech with NBNK 🚀</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Second Name</label>
                <input
                  type="text"
                  name="secondName"
                  value={formData.secondName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a secure password"
                required
              />
            </div>

            <div className="form-group file-upload">
              <label>Upload Profile Photo</label>
              <div className="file-box">
                <input type="file" id="file" onChange={handleFileChange} />
                <label htmlFor="file" className="file-label">
                  Choose File
                </label>
                <span className="file-name">{photoName}</span>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Create Admin Account
            </button>
          </form>
        </div>

        <div className="signup-illustration">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5529/5529090.png"
            alt="admin signup"
            className="illustration-img"
          />
        </div>
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </>
  );
};

export default AdminSignUpFormPage;
