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
  const { name, img, price, _id } = product;
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
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
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
