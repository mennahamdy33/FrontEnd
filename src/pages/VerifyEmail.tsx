import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { verifyEmailRequest } from "../api/auth.api";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");
      if (!token) {
        setStatus("error");
        return;
      }

      try {
        await verifyEmailRequest(token);        
        setStatus("success");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } catch (error) {
        setStatus("error");
        console.error("Verification error:", error);
        setTimeout(() => {
          navigate("/error");
        }, 1500);
      }
    };

    verifyEmail();
  }, [navigate, searchParams]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
      {status === "loading" && <>
        <CircularProgress />
        <Typography mt={2}>Verifying your email...</Typography>
      </>}
      {status === "success" && <Typography variant="h5" color="success.main">Email verified successfully!</Typography>}
      {status === "error" && <Typography variant="h5" color="error.main">Verification failed!</Typography>}
    </Box>
  );
};

export default VerifyEmail;