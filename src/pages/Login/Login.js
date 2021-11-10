import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          label="Name"
          fullWidth
          type="text"
          autoComplete="current-password"
          variant="filled"
          // defaultValue={user?.displayName}
          margin="dense"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && "First name is required"}
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
          label="Phone Number"
          fullWidth
          type="number"
          variant="filled"
          margin="dense"
          {...register("phone")}
        />
        <TextField
          required
          label="Address"
          fullWidth
          type="text"
          variant="filled"
          margin="dense"
          {...register("address", { required: true })}
        />
        <input
          style={inputBtn}
          type="submit"
          value="Place Order"
          component="button"
        />
      </Box>
    </Container>
  );
};

export default Login;
