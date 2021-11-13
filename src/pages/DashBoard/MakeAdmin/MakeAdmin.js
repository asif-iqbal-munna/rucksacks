import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import axios from "axios";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
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

  const { token } = useAuth();

  const authAxios = axios.create({
    baseURL: "https://safe-depths-81486.herokuapp.com",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const onSubmit = (data) => {
    const user = { email: data.email };
    authAxios.put(`https://safe-depths-81486.herokuapp.com/users/admin`, user).then((res) => {
      if (res.data?.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: `Role of ${data.email} has been upgraded to Admin`,
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: `Request Failed`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
    reset();
  };
  return (
    <>
      <Typography variant="h4">Make Admin</Typography>
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
    </>
  );
};

export default MakeAdmin;
