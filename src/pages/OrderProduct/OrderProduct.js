import { Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Header from "../shared/Header/Header";

const OrderProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(product);

  const inputBtn = {
    backgroundColor: "#961010",
    padding: "10px 18px",
    outline: "none",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    marginTop: "10px",
  };

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
          <Grid item xs={12} md={8}>
            <Box className="mt-12">
              <img className="h-96 block mx-auto" src={product.img} alt="" />
            </Box>
            <Box>
              <p className="text-base">{product.extraInfo}</p>
              <p className="text-2xl font-bolder mt-4">${product.price}</p>
              <p className="text-lg mt-4 pr-20">{product.description}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="w-100 px-4 mx-auto bg-gray-100 py-12 mt-12 rounded-3xl ">
              <h2 className="text-3xl capitalize text-dark pb-6 font-bold">
                Book Tours
              </h2>
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
