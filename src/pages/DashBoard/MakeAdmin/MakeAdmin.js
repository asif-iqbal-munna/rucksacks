import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

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

  const onSubmit = (data) => {
    const user = { email: data.email };
    axios.put(`http://localhost:8000/users/admin`, user).then((res) => {
      if (res.data.modifiedCount) {
        alert(`Role of ${data.email} has been upgraded to Admin`);
      } else {
        alert("Request Not Performed");
      }
    });
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
