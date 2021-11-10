import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const bannerBg = {
  background: `url(https://cdn.shopify.com/s/files/1/0068/8481/9003/files/travel-bag-slider-1_2000x.jpg?v=1534582967)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "85vh",
};

const Banner = () => {
  return (
    <Box style={bannerBg}>
      <Box></Box>
    </Box>
  );
};

export default Banner;
