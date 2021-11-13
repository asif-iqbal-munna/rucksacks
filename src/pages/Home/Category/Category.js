import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ py: 5 }}>
        <Grid style={{ cursor: "pointer" }} item xs={12} md={4}>
          <Link to="shop">
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/img-5_1920X.jpg?v=1533894692"
              alt=""
            />
          </Link>
        </Grid>
        <Grid style={{ cursor: "pointer" }} item xs={12} md={4}>
          <Link to="shop">
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/img-8_1920X.jpg?v=1533894710"
              alt=""
            />
          </Link>
        </Grid>
        <Grid style={{ cursor: "pointer" }} item xs={12} md={4}>
          <Link to="shop">
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/img-6_1920X.jpg?v=1533894701"
              alt=""
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Category;
