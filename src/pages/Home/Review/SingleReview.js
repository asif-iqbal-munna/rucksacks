import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const SingleReview = ({ reviews }) => {
  const { name, review, rating } = reviews;

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {review}
          </Typography>
          <Typography variant="body2">{rating}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleReview;
