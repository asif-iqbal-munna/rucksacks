import { Button, Container, Typography } from "@mui/material";
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
      <Container>
        <Box
          style={{
            paddingTop: "20vh",
            maxWidth: "500px",
          }}
        >
          <Box
            style={{
              background: "rgba(128, 128, 128, 0.54)",
              padding: "20px",
            }}
          >
            <Typography variant="h2">Trendy Backpacks</Typography>
            <Typography variant="h4">Own Styles</Typography>
            <Typography variant="h1">50% OFF</Typography>
            <Button variant="contained">Shop Now</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
