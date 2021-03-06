import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { name, img, price, _id, brand } = product;
  return (
    <Grid item xs={2} sm={3} md={3}>
      <Card>
        <CardMedia
          component="img"
          width="100%"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="h4"
            style={{ textTransform: "capitalize" }}
            component="div"
          >
            {brand}
          </Typography>
          <Typography
            variant="h5"
            style={{ textTransform: "capitalize" }}
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h5" component="div">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link style={{ textDecoration: "none" }} to={`/product/${_id}`}>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
