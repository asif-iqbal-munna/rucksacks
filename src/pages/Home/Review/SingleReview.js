import { Card, CardContent, Grid, Typography } from "@mui/material";
import Rating from "react-rating";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const SingleReview = ({ reviews }) => {
  const { name, review, rating } = reviews;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <span style={{ fontSize: "36px", color: "#690B0B" }}>"</span>
            {review}
          </Typography>
          <Typography variant="body2">
            <Rating
              initialRating={rating}
              readonly
              style={{ color: "#ff8514" }}
              emptySymbol={<StarBorderIcon />}
              fullSymbol={<StarIcon />}
            />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleReview;
