import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/Error";
import Home from "./pages/Index";
import NotFoundPage from "./pages/NotFound";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;