# 🌾 Rice Leaf Disease Detection – Frontend

A modern and responsive **Frontend Web Application** built using **Next.js and React** for detecting **rice leaf diseases**.  
The application allows users to upload rice leaf images and view disease predictions along with **recommended medicines**, powered by a Django backend.

---

## 🚀 Live Website

🌐 **Frontend URL:**  
👉 https://kbtechagre.vercel.app

🔗 **Backend API:**  
👉 https://cropdisesbackend-2.onrender.com

---

## 🧠 Frontend Overview

This frontend provides a **user-friendly interface** for farmers, students, and researchers to:
- Upload rice leaf images
- Send images to the backend API
- View detected disease name
- See prediction confidence
- Get medicine recommendations instantly

Designed with simplicity and accessibility in mind.

---

## 🖼️ Key Features

- 📤 Image upload support (Rice leaf images)
- ⚡ Fast API communication with Django backend
- 📊 Disease prediction with confidence score
- 💊 Medicine recommendations for each disease
- 📱 Fully responsive design (Mobile & Desktop)
- 🎨 Clean and simple UI using React components

---

## 🦠 Diseases Displayed on Frontend

The frontend displays results for the following rice leaf conditions:

- **Brown Spot**
- **Narrow Brown Leaf Spot**
- **Leaf Blast**
- **Healthy Leaf**

Each result includes:
- Disease name
- Confidence percentage
- Suggested medicines (if disease detected)

---

## 🏗️ Tech Stack

- **Next.js**
- **React**
- **JavaScript (ES6+)**
- **CSS / Tailwind / Custom Styling**
- **Fetch API**

---

## 🔄 Application Flow

1. User uploads a rice leaf image
2. Image is sent to backend API using POST request
3. Backend returns prediction data
4. Frontend displays:
   - Disease name
   - Confidence score
   - Medicine suggestions

---

## ⚙️ Environment Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BACKEND_URL=https://cropdisesbackend-1.onrender.com
