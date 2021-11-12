import { TextField } from "@mui/material";
import { Box } from "@mui/system";
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

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "700px" }}
    >
      <TextField
        required
        label="Product Name"
        fullWidth
        type="text"
        variant="filled"
        margin="dense"
        {...register("name")}
      />
      <TextField
        required
        label="Price"
        fullWidth
        type="number"
        variant="filled"
        margin="dense"
        {...register("price", { min: 1, max: 5 })}
      />
      <TextField
        required
        label="Image Url"
        fullWidth
        type="url"
        variant="filled"
        margin="dense"
        {...register("img")}
      />
      <TextField
        required
        label="Description"
        fullWidth
        type="url"
        variant="filled"
        margin="dense"
        multiline
        rows={4}
        {...register("description")}
      />
      <input style={inputBtn} type="submit" value="Add" component="button" />
    </Box>
  );
};

export default AddProduct;
