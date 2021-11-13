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
import { Button, Typography } from "@mui/material";
import Swal from "sweetalert2";

export default function BasicTable() {
  const [orderData, setOrderData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get("https://safe-depths-81486.herokuapp.com/orders")
      .then((res) => setOrderData(res.data));
  }, [load]);

  const handleApprove = (id) => {
    setLoad(true);
    axios
      .put(`https://safe-depths-81486.herokuapp.com/orders/manage/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data?.modifiedCount) {
          setLoad(false);
          Swal.fire({
            title: "Success!",
            text: `This Order Is Approved`,
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  const handleDelete = (id) => {
    setLoad(true);
    const proceed = window.confirm("Are you sure you want to delete the user?");
    if (proceed) {
      axios
        .delete(`https://safe-depths-81486.herokuapp.com/orders/manage/${id}`)
        .then((res) => {
          if (res?.data?.deletedCount) {
            setLoad(false);
            Swal.fire({
              title: "Success!",
              text: `This Order Is deleted`,
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        });
    }
  };

  return (
    <>
      <Typography variant="h4">Manage Orders</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Product&nbsp;</TableCell>
              <TableCell align="center">Carbs&nbsp;</TableCell>
              <TableCell align="center">Status Update&nbsp;</TableCell>
              <TableCell align="center">Delete&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" s component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row?.product?.name}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleApprove(row?._id)}
                  >
                    Approve
                  </Button>
                </TableCell>
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
}
