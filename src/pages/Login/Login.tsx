import { Box, Button, TextField, Typography } from "@mui/material";
import { useLoginForm } from "./useLoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { formik, loading, errorMessage } = useLoginForm();
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
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Login
      </Typography>

      <form onSubmit={formik.handleSubmit} style={{ width: "300px" }}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        {errorMessage && (
          <Typography color="error" variant="body2" mt={1}>
            {errorMessage}
          </Typography>
        )}

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={loading}
          sx={{ mt: 2, textTransform: "none", fontWeight: "bold" }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => navigate("/")}
          sx={{
            mt: 2,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Go Back to Home
        </Button>
      </form>
    </Box>
  );
};

export default Login;
