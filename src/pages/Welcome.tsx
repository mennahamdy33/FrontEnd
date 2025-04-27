// src/pages/Welcome.tsx
import { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProfileRequest } from "../api/auth.api";

const Welcome = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfileRequest();
        setUserName(response.data.name);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        handleLogout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      gap={4}
      sx={{
        backgroundColor: "#f9f9fb",
        padding: 4,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{
          color: "black",
          textTransform: "capitalize",
        }}
      >
        Welcome to the application, {userName}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        size="large"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          paddingX: 5,
          paddingY: 1.5,
          fontSize: "1rem",
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Welcome;
