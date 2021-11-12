import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setProducts(res.data);
    });
  }, [load]);

  const handleDelete = (id) => {
    setLoad(true);
    axios.delete(`http://localhost:8000/products/${id}`).then((res) => {
      if (res?.data?.deletedCount) {
        alert("This product is Deleted");
        setLoad(false);
      }
    });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Manage products
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Brand&nbsp;</TableCell>
              <TableCell align="center">Price&nbsp;</TableCell>
              <TableCell align="center">Delete&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <img style={{ width: " 50px" }} src={row.img} alt="" />
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row?.name}
                </TableCell>
                <TableCell align="center">{row?.brand}</TableCell>
                <TableCell align="center">{row?.price}</TableCell>

                <TableCell align="center">
                  <DeleteIcon
                    style={{ cursor: " pointer" }}
                    color="primary"
                    onClick={() => handleDelete(row?._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageProducts;
