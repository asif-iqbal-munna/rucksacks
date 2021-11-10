import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "../../shared/SingleProduct/SingleProduct";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Container sx={{ mt: 5 }}>
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
