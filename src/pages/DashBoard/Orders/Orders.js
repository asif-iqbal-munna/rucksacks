import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SingleOrder from "./SingleOrder";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [fetch, setFetch] = useState(false);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/orders/${email}`)
      .then((res) => setOrders(res.data))
      .then((err) => console.log(err));
  }, [email, fetch]);

  return (
    <Container>
      <Grid container spacing={4}>
        {orders.map((order) => (
          <SingleOrder order={order} key={order._id} setFetch={setFetch} />
        ))}
      </Grid>
    </Container>
  );
};

export default Orders;
