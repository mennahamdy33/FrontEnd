/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { signinRequest } from "../../api/auth.api";

export const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage(null);

      try {
        const response = await signinRequest(values);
        const token = response.data.token;

        localStorage.setItem("token", token);

        window.location.href = "/welcome";
      } catch (error: any) {
        if (error.response?.status === 401) {
          const message = error.response?.data?.message;

          if (message === "User email not verified") {
            setErrorMessage(
              "Your email is not verified. Please check your inbox."
            );
          } else {
            setErrorMessage("Wrong email or password.");
          }
        } else if (error.response?.status === 429) {
          setErrorMessage(
            "Too many login attempts. Please try again later."
          );
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return { formik, loading, errorMessage };
};