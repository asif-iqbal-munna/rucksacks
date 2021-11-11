import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import SingleProduct from "../shared/SingleProduct/SingleProduct";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://safe-depths-81486.herokuapp.com/products")
      .then((res) => setProducts(res.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 9, md: 12 }}
        >
          {products.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Shop;
