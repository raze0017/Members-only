# Members-only

A full-stack PERN project for sharing blogs in clubs and posts. Built with React, Node.js, Express, PostgreSQL, and Prisma ORM.

---

## 🚀 Features

- User login/logout
- View all clubs
- Join clubs
- View club-specific posts
- Edit posts (posted by you)
- Delete posts (posted by you)

---

## 🛠️ Tech Stack

- **Frontend:** React + TailwindCSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** Cookie-based with sessions

---

## 🧑‍💻 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/download/)

### 1. Fork and Clone

First, fork the repository on GitHub. Then, clone your forked repository:

```bash
git clone https://github.com/YOUR_USERNAME/Members-only.git
cd Members-only
```

(Replace `YOUR_USERNAME` with your actual GitHub username.)

### 2. Install Dependencies

Install the necessary dependencies for both the frontend and backend.

For the frontend:

```bash
cd frontend
npm install
```

For the backend:

```bash
cd ../server
npm install
```

### 3. Environment Setup - Install PostgreSQL

- **Ubuntu:**

  ```bash
  sudo apt update && sudo apt install postgresql postgresql-contrib
  ```

- **macOS (with Homebrew):**

  ```bash
  brew install postgresql
  ```

- **Windows:**

  Download and install from [PostgreSQL Downloads](https://www.postgresql.org/download/)

### 4. Set Up Local Database

Navigate to the `server/` folder and create a `.env` file (if it doesn't exist). Update it with your local database credentials:

```env
DATABASE_URL="postgresql://youruser:yourpass@localhost:5432/yourdb"
```

(Replace `youruser`, `yourpass`, and `yourdb` with your username, password, and database name.)

Then, create the PostgreSQL user and database:

```sql
-- Login to Postgres
sudo -u postgres psql

-- Create user and DB
CREATE USER youruser WITH PASSWORD 'yourpass';
CREATE DATABASE yourdb OWNER youruser;
\q -- to exit psql
```

### 5. Run Prisma

Navigate to the `server/` folder:

```bash
# Generate Prisma Client
npx prisma generate

# Apply migrations
npx prisma migrate dev

# Optional: Open Prisma Studio GUI
npx prisma studio
```

### 6. Run the App

**Start Backend:**

```bash
cd server
npm run dev
```

The backend will typically run on port 3000.

**Start Frontend:**

Open a new terminal window, then:

```bash
cd frontend
npm run dev
```

The Vite frontend will typically run on port 5173.

Ensure these ports are not blocked by other applications or your firewall.

---

## 🧪 Troubleshooting

**PostgreSQL not running:**

Make sure your PostgreSQL service is running.

- **Linux (systemd):**

  ```bash
  sudo systemctl status postgresql
  sudo systemctl start postgresql
  ```

- **macOS (Homebrew services):**

  ```bash
  brew services list
  brew services start postgresql
  ```

**CORS or Credentials Issues:**

- Ensure your backend (Express app) has `Access-Control-Allow-Credentials` set to `true` in its CORS configuration.
- Ensure your frontend client (e.g., Axios, Fetch API) is configured to send credentials (for Fetch API, set `credentials: "include"`).

---

## 🤝 Contributing

1. Fork this repository.
2. Create a new feature branch:

   ```bash
   git checkout -b feat-new-stuff
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "feat: Add some amazing new stuff"
   ```

4. Push your changes to your forked repository:

   ```bash
   git push origin feat-new-stuff
   ```

5. Open a Pull Request to the original repository.

---

## 📬 Contact

If you have any issues or questions, feel free to reach out or open an issue on the GitHub repository.
