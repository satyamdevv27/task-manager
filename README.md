# 📋 Task Manager

A full-stack **Task Manager** application built with **React, Express.js, and MongoDB**. The application allows users to create, update, delete, and filter tasks through a clean, responsive interface.

---

# 🌐 Live Demo

### 🚀 Frontend

https://YOUR-VERCEL-URL.vercel.app

### 🔗 Backend API

https://task-manager-hvig.onrender.com

### 📂 GitHub Repository

https://github.com/satyamdevv27/task-manager

---

# 🚀 Tech Stack

## Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Hot Toast
* SweetAlert2

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Express Validator

## Testing

* Vitest
* Supertest

---

# ✨ Features

* Create Tasks
* View All Tasks
* Update Existing Tasks
* Delete Tasks with Confirmation Dialog
* Filter Tasks by Status
* Form Validation
* Responsive UI
* Toast Notifications
* RESTful API
* Backend API Testing

---

# 📂 Project Structure

```
task-manager
│
├── backend
│   ├── config
│   ├── controller
│   ├── middleware
│   ├── model
│   ├── routes
│   ├── tests
│   ├── app.js
│   ├── index.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/satyamdevv27/task-manager.git
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run Backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# ⚠️ Important Configuration

The deployed frontend is configured to use the Render backend.

If you want to run the project locally, update the API base URL inside:

```
frontend/src/services/taskApi.js
```

### Production

```javascript
baseURL: "https://task-manager-hvig.onrender.com/api/tasks"
```

### Local Development

```javascript
baseURL: "http://localhost:5000/api/tasks"
```

After changing the base URL, start both the backend and frontend locally.

---

# 🧪 Running Tests

Backend API tests are written using **Vitest** and **Supertest**.

Run:

```bash
cd backend
npm test
```

Tests Covered:

* GET /api/tasks
* POST /api/tasks
* Validation for invalid task creation

---

# 📌 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/tasks     | Get all tasks   |
| GET    | /api/tasks/:id | Get single task |
| POST   | /api/tasks     | Create task     |
| PUT    | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

---

# 🎯 Design Decisions

* Component-based React architecture using functional components and Hooks.
* RESTful API design using Express.js.
* MongoDB Atlas with Mongoose for database management.
* Axios used for centralized API requests.
* Express Validator used for request validation.
* Tailwind CSS for a clean and responsive UI.
* SweetAlert2 for delete confirmation dialogs.
* React Hot Toast for success and error notifications.
* Backend API tested using Vitest and Supertest.

---

# Known Limitations

* No authentication or authorization.
* No pagination.
* No search functionality.
* No due dates or reminders.
* No drag-and-drop task management.

---

# Future Improvements

* JWT Authentication
* User Accounts
* Search Tasks
* Pagination
* Task Categories
* Due Dates & Reminders
* Drag & Drop Task Board
* Dark Mode
* Docker Support
* CI/CD Pipeline

---

# 👨‍💻 Author

**Satyam Verma**

GitHub:
https://github.com/satyamdevv27
