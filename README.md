# 🔐 AuthFlow Pro

A full-stack authentication system built with modern technologies, featuring secure user authentication, profile management, and image upload. This project follows a clean MVC architecture and demonstrates real-world backend and frontend development practices.

---

## 🚀 Features

* 🔐 User Signup & Login (JWT Authentication)
* 🔒 Secure Password Hashing using bcrypt
* 🛡️ Protected Routes & Authorization Middleware
* 👤 User Profile Management
* 🖼️ Profile Image Upload (Multer)
* ♻️ Update Profile (Name, Password, Profile Image)
* 🧱 Clean MVC Architecture (Controller → Service → Model)
* 📱 Fully Responsive Dashboard UI (Mobile + Desktop)
* 🔍 Structured API with standardized responses

---

## 📸 Screenshots

### 🏠 Home Page

![Home](docs/Home.png)

### 🔐 Login Page

![Login](docs/Login.png)

### 📝 Signup Page

![Signup](docs/Signup.png)

### 📊 Dashboard

![Dashboard](docs/Dashboard.png)

### 👤 Profile Page

![Profile](docs/Profile.png)

### ⚙️ Settings Page

![Settings](docs/Settings.png)

---

## 🛠️ Tech Stack

### Frontend

* React.js (Hooks & Context API)
* React Router (Client-side routing)
* State Management (useState, useReducer)
* Tailwind CSS (Responsive UI Design)

### Backend

* Node.js & Express.js
* MySQL Database
* JWT Authentication
* bcrypt (Password Hashing)
* multer (File Upload Handling)
* helmet (Security Headers)
* morgan (Request Logging)
* express-rate-limit (API Protection)
* cors (Cross-Origin Handling)

---

## 🧠 Concepts Applied

* MVC Architecture (Controller → Service → Model)
* RESTful API Design
* Authentication & Authorization (JWT)
* File Upload & Static File Serving
* Secure Backend Practices
* Middleware Architecture

---

## 📁 Project Structure

```
authflow-pro/
  backend/
    Config ( database )/
      lb.sql
    routes/
    controllers/
    services/
    models/
    middleware/
    config/
    public/
      profileImages/
    app.js
    server.js

  frontend/
    components/
    pages/
    layouts/
    context/

  docs/   # screenshots
```

---

## 🗄️ Database Setup

1. Create a MySQL database:

```sql
CREATE DATABASE authflow;
```

2. Import the database file:

```bash
mysql -u root -p authflow < backend/database/lb.sql
```

3. Configure your environment variables:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=authflow
JWT_SECRET=your_secret_key
```

---

## 🔐 Authentication Flow

1. User registers → Password is hashed using bcrypt
2. User logs in → JWT token is generated
3. Token stored in localStorage (frontend)
4. Protected routes verify token using middleware
5. Authenticated user data is fetched securely

---

## 📸 Image Upload Flow

1. User selects profile image
2. Data sent using FormData
3. Multer processes and stores the file
4. Image saved in `public/profileImages`
5. File path stored in database
6. Image served via Express static middleware

---

## ⚙️ Getting Started

### Clone the repository

```bash
git clone https://github.com/tubeec1/authflow-pro.git
cd authflow-pro
```

### Install dependencies

#### Backend

```bash
cd backend
npm install
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment (Planned)

* Frontend → Vercel
* Backend → Render
* Database → Railway

---

## 💡 Future Improvements

* Role-Based Access Control (Admin/User)
* Cloud Image Upload (Cloudinary / AWS S3)
* Email Verification System
* Password Reset Functionality
* API Pagination, Filtering & Search

---

## 👨‍💻 Author

Mohamed Suleyman Ibrahim - 
Full Stack Developer

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
