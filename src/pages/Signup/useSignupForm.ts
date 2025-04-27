/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { signupValidationSchema } from "../../validations/signupValidation";
import { useState } from "react";
import { signupRequest } from "../../api/auth.api";

export const useSignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        await signupRequest(values);

        setSnackbar({
          open: true,
          message: "Signed up successfully! Please check your email to verify your account.",
          severity: "success",
        });
        resetForm();
      } catch (error: any) {
        setSnackbar({
          open: true,
          message: error.response?.data?.message || "Sign up failed. Please try again.",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return {
    formik,
    loading,
    snackbar,
    setSnackbar,
  };
};