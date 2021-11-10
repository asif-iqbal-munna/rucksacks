import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Header from "../shared/Header/Header";

const inputBtn = {
  backgroundColor: "#961010",
  padding: "10px 18px",
  outline: "none",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  marginTop: "10px",
};

const OrderProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box>
              <img
                style={{ maxWidth: "300px" }}
                src={product.img}
                alt="bag"
              />
            </Box>
            <Box>
              <p>{product.extraInfo}</p>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography>Process Order</Typography>
              {/* {tour.place && user.displayName && ( */}
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
              {/* )} */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OrderProduct;
<h2>Order Product</h2>;
