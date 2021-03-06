import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "../../shared/SingleProduct/SingleProduct";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://safe-depths-81486.herokuapp.com/products")
      .then((res) => setProducts(res.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h3" sx={{ mb: 3 }} color="primary">
        Products
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {products.slice(0, 8).map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProducts;
