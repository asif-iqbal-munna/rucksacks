import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://safe-depths-81486.herokuapp.com/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h3" sx={{ mb: 3 }} color="primary">
        See What Our Customers Says
      </Typography>
      <Grid container spacing={6}>
        {reviews.slice(0, 3).map((review) => (
          <SingleReview key={review._id} reviews={review} />
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
