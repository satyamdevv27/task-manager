# 📋 Task Manager Application

A full-stack Task Manager application built with **React**, **Express.js**, and **MongoDB**. The application allows users to create, update, delete, filter, and manage tasks with a clean and responsive user interface.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Hot Toast
- SweetAlert2

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator

### Testing
- Vitest
- Supertest

---

# ✨ Features

- Create a new task
- View all tasks
- Update existing tasks
- Delete tasks with confirmation dialog
- Filter tasks by status
- Form validation
- Toast notifications
- Responsive UI
- API testing with Vitest & Supertest

---

# 📂 Project Structure

```
task_app
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
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

# 🛠 Installation

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

or

```bash
bun install
```

---

## 3. Create Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

## 4. Start Backend

```bash
npm run dev
```

or

```bash
bun run dev
```

Backend runs on

```
http://localhost:5000
```

---

## 5. Install Frontend Dependencies

```bash
cd frontend

npm install
```

or

```bash
bun install
```

---

## 6. Start Frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🧪 Running Tests

Backend tests are written using **Vitest** and **Supertest**.

Run tests using:

```bash
cd backend

npm test
```

Tests Covered:

- GET /api/tasks
- POST /api/tasks
- Validation for invalid task creation

---

# 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get single task |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---

# 🎨 Design Decisions

- Used React functional components and Hooks for clean state management.
- Tailwind CSS was chosen for fast and responsive UI development.
- Backend follows a layered architecture (Routes → Controller → Model).
- Express Validator is used for request validation.
- SweetAlert2 provides a better confirmation experience before deleting tasks.
- React Hot Toast is used for success and error notifications.
- Vitest and Supertest were used to test API endpoints.

---

# ⚠ Known Limitations

- No authentication or user accounts.
- Pagination is not implemented.
- Search functionality is not available.
- Tasks are not categorized.

---

# 🔮 Future Improvements

Given more time, I would implement:

- User Authentication (JWT)
- Task Search
- Pagination
- Drag & Drop task management
- Due dates & reminders
- Dark Mode
- Task categories
- Docker support
- CI/CD pipeline
- Deployment on Vercel and Render

---

# 👨‍💻 Author

**Satyam Verma**