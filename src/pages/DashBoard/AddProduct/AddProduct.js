import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

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
    axios
      .post("https://safe-depths-81486.herokuapp.com/products", data)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `Product Has Been Added`,
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    reset();
  };
  return (
    <>
      <Typography variant="h4">Add Product</Typography>
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
          label="Brand"
          fullWidth
          type="text"
          variant="filled"
          margin="dense"
          {...register("brand")}
        />
        <TextField
          required
          label="Price"
          fullWidth
          type="text"
          variant="filled"
          margin="dense"
          {...register("price")}
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
    </>
  );
};

export default AddProduct;
