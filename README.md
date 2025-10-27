# Mocklyy — Starter scaffold

This workspace contains a minimal starter scaffold for a Next.js frontend and an Express backend to help students and job-seekers iteratively build resumes, portfolios, and track progress.

Structure
- `frontend/` — Next.js app (UI + pages)
- `backend/` — Express server (API)

Quick start

1. Open two terminals.
2. From project root, install dependencies for frontend and backend separately:

```bash
cd frontend
npm install

# in separate terminal
cd backend
npm install
```

3. Run backend (port 4000):

```bash
cd backend
npm run dev
```

4. Run frontend (port 3000):

```bash
cd frontend
npm run dev
```

APIs
- GET http://localhost:4000/health
- GET / POST http://localhost:4000/resumes

Notes
- This is a minimal scaffold. It uses an in-memory store for resumes; replace with a real database for production.
- The frontend is configured to proxy `/api` to the backend via `next.config.js` rewrites.

Next steps (suggested)
- Add authentication (JWT / OAuth)
- Add persistent DB (Postgres, MongoDB)
- Build resume editor + versioning
