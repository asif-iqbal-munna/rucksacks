import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
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

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.name = user.displayName;
    axios
      .post("https://safe-depths-81486.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You Review Is Submitted",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    reset();
  };
  return (
    <>
      <Typography variant="h4">Your Feedback</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "700px" }}
      >
        <TextField
          required
          label="Rating 1 to 5"
          fullWidth
          type="number"
          variant="filled"
          margin="dense"
          {...register("rating", { min: 1, max: 5 })}
        />
        <TextField
          required
          label="Your review"
          fullWidth
          type="text"
          variant="filled"
          margin="dense"
          multiline
          rows={4}
          {...register("review", { required: true })}
        />
        <input
          style={inputBtn}
          type="submit"
          value="Submit"
          component="button"
        />
      </Box>
    </>
  );
};

export default Review;
