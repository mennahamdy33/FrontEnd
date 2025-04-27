import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh" gap={3}>
      <Typography variant="h4" fontWeight="bold">
        Welcome
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/signup")}
        sx={{ width: "200px", textTransform: "none", fontWeight: "bold" }}
      >
        Sign Up
      </Button>

      <Button
        variant="outlined"
        size="large"
        onClick={() => navigate("/login")}
        sx={{ width: "200px", textTransform: "none", fontWeight: "bold" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Home;