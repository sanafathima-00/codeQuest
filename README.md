# 💬 CodeQuest - Q&A Platform for Programmers



## 📋 Project Overview

**CodeQuest** is a Q&A platform created for programmers to ask questions, give answers, and vote on helpful solutions. Designed to foster a knowledge-sharing community among developers, it replicates a Stack Overflow-like experience with modern full-stack tech.

---

## ✨ Features

- ❓ Post and browse programming questions
- ✅ Answer questions with markdown support
- 👍 Upvote/downvote system to highlight top answers
- 🔐 Secure user authentication with JWT
- 📚 Tag-based categorization and search
- 📈 Realtime updates and responsive design

---

## 🛠️ Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Frontend   | ReactJS             |
| Backend    | Node.js, Express.js |
| Database   | MongoDB             |
| Auth       | JWT, bcrypt         |
| State Mgmt | React Context API   |
| Styling    | CSS / Tailwind CSS  |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/codequest.git
cd codequest
```

### 2. Install Dependencies
```bash
npm install
cd client
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root and add:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

### 4. Start the Application

Start the backend:
```bash
npm run server
```

Start the frontend:
```bash
cd client
npm start
```

---

## 📁 Project Structure

```
codequest/
├── client/
│   ├── public/
│   │   └── images/logos
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## 🧠 Learning Outcomes

- Mastered the MERN stack for full-stack web apps
- Implemented JWT authentication and route protection
- Designed a scalable Q&A app with modular structure
- Strengthened UI/UX with responsive layouts and live updates

---

## 📄 License

Licensed under the **MIT License**

---

## 🙌 Acknowledgments

- Thanks to open-source resources and communities for dataset ideas and API inspirations.
