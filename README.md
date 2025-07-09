# 🧠 BG Buddy - Background Removal Web App

BG Buddy is a modern, full-stack web application that enables users to remove image backgrounds quickly and seamlessly. It offers a clean user interface built with **React.js** and **Tailwind CSS**, robust backend support with **Node.js** and **Express.js**, and data persistence using **MongoDB Atlas**.

🌐 Live: [bg-buddy-home.vercel.app](https://bg-buddy-home.vercel.app/)  
📦 GitHub: [Saurabh-101/BG-Buddy](https://github.com/Saurabh-101/BG-Buddy)

---

## ✨ Features

- 🔍 Upload images and remove their backgrounds instantly
- 💾 Save and retrieve processed images using MongoDB Atlas
- ⚡ Fast and responsive UI built with React and Tailwind CSS
- 🌐 RESTful API for image processing and user data handling
- ☁️ Hosted frontend on Vercel and backend on Express.js

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- Multer (for file uploads)

**Database:**
- MongoDB Atlas
- Mongoose

**Deployment:**
- Vercel (Frontend)
- Vercel (Backend)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14+)
- MongoDB Atlas account
- Git

---

### 🧩 Project Structure

```
BG-Buddy/
├── client/               # Frontend (React)
│   └── src/
├── server/               # Backend (Express)
│   ├── routes/
│   ├── controllers/
│   └── models/
├── .env
└── README.md
```

---

### 🧪 Local Setup

#### 1. Clone the repository

```
bash
git clone https://github.com/Saurabh-101/BG-Buddy.git
cd BG-Buddy
```

#### 2. Install dependencies

**Frontend:**

```
bash
cd client
npm install
```

**Backend:**

```
bash
cd ../server
npm install
```

#### 3. Environment Variables

Create a `.env` file inside `server/` with the following:

```
env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

#### 4. Run the app

**Backend:**

```
bash
cd server
npm run dev
```

**Frontend:**

```
bash
cd client
npm start
```

Visit `http://localhost:3000` to view the app.

---

## 🖼️ Image Processing

The backend uses a third-party API or algorithm to remove image backgrounds. Ensure the service or logic is implemented in the backend route handling image uploads.

---

## 📁 File Upload Handling

Uses `Multer` to handle image uploads and sends files to the background removal API or processing logic before saving metadata in MongoDB.

---

## 📦 Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com/)
- **Backend:** Deploy using [Vercel](https://vercel.com/)

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📧 Contact

Created by [Saurabh-101](https://github.com/Saurabh-101)
