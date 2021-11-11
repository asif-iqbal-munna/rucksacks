import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
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

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "700px" }}
    >
      <TextField
        required
        label="Email"
        fullWidth
        type="email"
        variant="filled"
        margin="dense"
        {...register("email")}
      />
      <input
        style={inputBtn}
        type="submit"
        value="Make Admin"
        component="button"
      />
    </Box>
  );
};

export default MakeAdmin;
