import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import axios from "axios";

const SingleOrder = ({ order, setFetch }) => {
  const { img, name, price } = order.product;

  const handleDeleteOrder = (id) => {
    setFetch(true);
    const proceed = window.confirm("Are you sure you want to delete the user?");
    if (proceed) {
      axios
        .delete(`https://safe-depths-81486.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res?.data?.deletedCount) {
            alert("That Order Is Deleted");
            setFetch(false);
          }
        })
        .then((err) => console.log(err));
    }
  };

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 120 }}
          image={img}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ flex: "1 0" }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {price}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
            >
              <Button
                onClick={() => handleDeleteOrder(order._id)}
                variant="contained"
                size="small"
                color="primary"
              >
                Cancel
              </Button>
              <Box
                style={{
                  backgroundColor: "#a34c4c",
                  padding: "3px 8px",
                  borderRadius: "5px",
                  textTransform: "capitalize",
                }}
              >
                <Typography variant="subtitle1" color="#fff" component="div">
                  {order.status}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default SingleOrder;
