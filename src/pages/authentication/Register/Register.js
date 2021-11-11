import {
  Alert,
  AlertTitle,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const inputBtn = {
  backgroundColor: "#961010",
  padding: "10px 18px",
  outline: "none",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  marginTop: "10px",
};

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user, createUser, error, loading } = useAuth();

  const onSubmit = (data) => {
    createUser(data.email, data.password);
    reset();
  };

  return (
    <>
      {loading ? (
        <Box
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <CircularProgress disableShrink />
          </Box>
        </Box>
      ) : (
        <Container style={{ height: "100vh" }} sx={{ mt: 5 }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                required
                label="Name"
                fullWidth
                type="text"
                variant="filled"
                margin="dense"
                // defaultValue={user?.email}
                {...register("name", { required: true })}
              />
              <TextField
                required
                label="Email"
                fullWidth
                type="email"
                variant="filled"
                margin="dense"
                // defaultValue={user?.email}
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && "email is required"}
              <TextField
                required
                label="Password"
                fullWidth
                type="password"
                autoComplete="current-password"
                variant="filled"
                // defaultValue={user?.displayName}
                margin="dense"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" &&
                "First password is required"}
              <input
                style={inputBtn}
                type="submit"
                value="Register"
                component="button"
              />
              <Typography variant="subtitle1">
                Already User?{" "}
                <Link style={{ textDecoration: "none" }} to="/login">
                  Please LogIn.
                </Link>
              </Typography>
              {user?.email && (
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Your Account Has Been Created Successfully
                </Alert>
              )}

              {error && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                </Alert>
              )}
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Register;
