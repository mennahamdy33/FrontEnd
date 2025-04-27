# React + TypeScript + Vite + Material UI + Formik Authentication App

This project provides a clean fullstack-ready setup using:

- **React 18** (Frontend)
- **TypeScript** (Type Safety)
- **Vite** (Super fast development)
- **Material UI (MUI)** (UI Library)
- **Formik + Yup** (Form management and validation)
- **Axios** (API communication)
- **React Router 6** (Routing)
- **Integration with NestJS Backend** for:
  - Signup
  - Email Verification
  - Login
  - Protected User Data fetching

---

## 📦 Install Dependencies

```bash
npm install
```

---

## ⚙️ Environment Setup

Copy the `.env.sample` file and create your `.env` file:

```bash
cp .env.sample .env
```

Inside `.env`, configure:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

(This is the base URL for connecting to your NestJS backend.)

---

## 🚀 Run the app

```bash
npm run dev
```

The app will start on:

```bash
http://localhost:5173
```

---


## 🛠️ Project Features

- User **Sign Up** with full validation (email, password complexity, confirm password).
- User **Login** with token saving to localStorage.
- Email **Verification** flow handled via secure links.
- **Protected Routes**: User profile is fetched securely after login using JWT.
- **Snackbar Notifications** for success and error messages.
- **Loading States** on form submissions.
- Clean modular structure with API request separation.

---

## 📚 Useful commands for Vite

### Build for production:

```bash
npm run build
```

### Preview production build:

```bash
npm run preview
```

---

## 🔥 Additional Technologies to Expand (Optional)

- React Query / Tanstack Query (API management)
- Zustand / Redux Toolkit (State management)
- Framer Motion (Animations)
- Unit Testing (Vitest / React Testing Library)

---

## ✨ Acknowledgements

This app uses:

- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

---

## ✅ Folder Structure

```
src/
├── api/             # API Requests (Axios wrappers)
├── pages/           # Pages (SignUp, Login, VerifyEmail, Welcome, etc.)
├── validations/     # Yup validation schemas
├── lib/             # Axios instance and utilities
├── App.tsx          # Router setup
├── main.tsx         # Entry point
└── theme.ts         # MUI Theme config (optional)
```
