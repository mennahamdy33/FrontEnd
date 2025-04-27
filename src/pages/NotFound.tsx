import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh" gap={2}>
      <Typography variant="h2" color="error">
        404
      </Typography>
      <Typography variant="h5" textAlign="center">
        Page Not Found
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, textTransform: "none", fontWeight: "bold" }}
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;