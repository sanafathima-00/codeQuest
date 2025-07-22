# **CodeQuest**

---

## 💬 Project Overview

**CodeQuest** is a full-stack Q&A platform built for programmers to ask questions, share solutions, and engage with the developer community. With features like voting, authentication, and a clean UI, it promotes knowledge-sharing and collaborative problem-solving.

---

## ✨ Features

- ❓ Ask and answer programming-related questions  
- 👍 Upvote or 👎 downvote answers to highlight the best solutions  
- 🔐 Secure user authentication and session management  
- 🧑‍💻 User profiles to track contributions  
- 📈 Community-driven ranking system  

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS, Redux, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT, bcrypt  
- **Other Tools**: Axios, Mongoose  

---

## 🚀 Installation and Setup

### Prerequisites

- Node.js, npm, and MongoDB installed locally  
- Basic knowledge of terminal and environment variables  

### Steps

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/codequest.git
   cd codequest


2. **Set up Environment Variables**
   Create a `.env` file in the root of both the frontend and backend directories:

   **For Backend (`.env`):**

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

3. **Install Dependencies**
   In both `/client` and `/server` directories:

   ```bash
   npm install
   ```

4. **Run the App**
   In separate terminals:

   * Backend:

     ```bash
     cd server
     npm start
     ```

   * Frontend:

     ```bash
     cd client
     npm start
     ```

5. Open `http://localhost:3000` in your browser.

---

## 📌 Usage

* Sign up or log in to your account
* Post a question or browse existing ones
* Submit answers, upvote helpful solutions
* View your profile and track reputation

---

## 📁 Project Structure

```
codequest/
├── client/ (React frontend)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/ (Node + Express backend)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

---

## 📦 Dependencies

### Frontend

* React
* Redux
* Axios
* Tailwind CSS
* React Router DOM

### Backend

* Express
* Mongoose
* Bcrypt
* JWT
* Dotenv
* CORS

---

## 🧩 Customization

* 🖌️ Update Tailwind config to change color themes
* 📂 Add categories or tags to organize questions
* 🔐 Integrate OAuth (e.g., Google Login)

---

## 🐞 Known Issues

* No email verification on sign-up
* No pagination on questions page (can slow down performance)

---

## 🚧 Future Improvements

* Implement rich text editor for posts
* Add comments and replies under answers
* Include notifications and bookmarks
* Improve moderation tools

---

## 📄 License

Licensed under the **MIT License**.

---

## 🙌 Acknowledgments

* MERN Stack community
* [JWT](https://jwt.io/) for secure authentication
* [Tailwind CSS](https://tailwindcss.com/) for rapid UI styling
* Inspiration from Stack Overflow and other dev Q\&A platforms
