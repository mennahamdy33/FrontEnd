import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      gap={2}
    >
      <Typography variant="h4" color="error.main">
        Something went wrong!
      </Typography>

      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        sx={{ textTransform: "none", fontWeight: "bold" }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;