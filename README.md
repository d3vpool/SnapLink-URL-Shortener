# 🔗 SnapLink – URL Shortener

SnapLink is a full-stack URL shortening application that allows users to convert long URLs
into short, shareable links. It provides fast redirection, unique short codes, and a clean
API-driven architecture suitable for real-world use cases.

This project focuses on **scalability**, **backend design**, and **production-ready
development practices**.

---

## ✨ Key Features

- 🔗 Shorten long URLs into compact, unique links
- 🚀 Fast redirection to original URLs
- 🧠 Collision-free short code generation
- 📊 Basic request handling and validation
- ⚙️ RESTful API design
- 🧹 Clean Git history and structured backend
- 🔐 Secure handling of environment variables

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend (if applicable)
- React *(optional / minimal UI)*

### Dev & Tooling
- Git & GitHub
- Postman (API testing)
- Node.js

---

## 📁 Project Structure

```text
SnapLink-URL-Shortener/
├── backend/
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   └── index.js          # App entry point
├── frontend/              # React frontend
└── README.md
```

## ⚙️ Local Setup

Follow the steps below to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/d3vpool/SnapLink-URL-Shortener.git
cd SnapLink-URL-Shortener
```

### 2. Backend setup
```bash
cd backend
npm install
```
Create a .env file inside the backend directory and add:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
BASE_URL=http://localhost:5000
```

Start the backend server:
```bash
npm start
```

The backend will run on:
```bash
http://localhost:5000
```
### 3. Frontend setup
```bash
cd frontend
npm install
npm start
```


The frontend will run on:
```bash
http://localhost:3000
```
