# 🎬 Movie API (Node.js + MySQL)

This is the backend API for managing favorite movies per user. It works together with the React frontend (`movie-data-explorer`).

---

## 🚀 Features

- REST API built with Express
- Stores movie favorites in a MySQL database
- `POST` to add favorites
- `GET` to retrieve favorites by user

---

## ⚙️ Setup Instructions

### 1. Clone & Install Dependencies

```bash
cd movie-api
npm install
```

### 2. Configure Environment Variables

Create a `.env` file based on the following template:

```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=movie_explorer
```

> You can also use `.env.example` as a reference.

---

### 3. Create Database and Table

Use MySQL Workbench or CLI to execute:

```sql
CREATE DATABASE movie_explorer;

USE movie_explorer;

CREATE TABLE favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(100),
  movie_id INT,
  movie_title VARCHAR(255),
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🧪 API Endpoints

### ➕ `POST /api/favorites`

Adds a movie to a user's favorites.

```json
{
  "userId": "user-abc-123",
  "movieId": 550,
  "movieTitle": "Fight Club"
}
```

### 🔍 `GET /api/favorites?userId=user-abc-123`

Returns all favorite movies for a given user.

---

## 💾 What happens if I shut down my PC?

- ✅ The **database and favorites are stored permanently** in your MySQL server files.
- ❌ The **server (npm run dev)** is temporary and needs to be restarted.

To resume development:

```bash
npm run dev
```

If MySQL doesn't auto-start:

```bash
# macOS
brew services start mysql

# Linux
sudo service mysql start
```

---

## 🧠 Author

Built with ❤️ by Carles Casallachs