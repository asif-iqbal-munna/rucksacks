import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
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
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`http://safe-depths-81486.herokuapp.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    data.product = product;
    axios
      .post("https://safe-depths-81486.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `Your Order Is Placed Successfully. Please, Wait Check For The Approvement.`,
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .then((err) => console.log(err));

    reset();
  };

  return (
    <>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={7}>
            <Box>
              <img style={{ maxWidth: "300px" }} src={product?.img} alt="bag" />
            </Box>
            <Box>
              <Typography variant="h3" gutterBottom>
                ${product?.price}
              </Typography>
              <Typography variant="h4" gutterBottom>
                {product?.brand}
              </Typography>
              <Typography variant="h3" gutterBottom>
                {product?.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {product?.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h3">Process Order</Typography>
              {user.email && user.displayName && (
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    required
                    label="Name"
                    fullWidth
                    type="text"
                    autoComplete="current-password"
                    variant="filled"
                    defaultValue={user?.displayName}
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
                    defaultValue={user?.email}
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
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OrderProduct;
<h2>Order Product</h2>;
