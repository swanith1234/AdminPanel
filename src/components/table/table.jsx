import React from "react";
import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";
const rows = [
  {
    id: 1143151,
    product: "acer nitro 5",
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/41dN5mMR39L.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "cash on delivery",
    status: "approved",
  },
  {
    id: 1143152,
    product: "acer nitro 5",
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/41dN5mMR39L.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "cash on delivery",
    status: "approved",
  },
  {
    id: 1143153,
    product: "acer nitro 5",
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/41dN5mMR39L.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "cash on delivery",
    status: "approved",
  },
  {
    id: 1143154,
    product: "acer nitro 5",
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/41dN5mMR39L.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "cash on delivery",
    status: "pending",
  },
  {
    id: 1143155,
    product: "acer nitro 5",
    img: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/41dN5mMR39L.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "cash on delivery",
    status: "pending",
  },
];

export default function Table() {
  return (
    <div>
      <TableContainer component={Paper}>
        <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <TableCell align="right">Product</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Amount</TableCell>

              <TableCell align="right">Payment Method</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">
                  <img src={row.img} alt="" className="mx-2" />
                  {row.product}
                </TableCell>
                <TableCell align="right">{row.customer}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.method}</TableCell>
                <TableCell align="right">
                  <span className={row.status}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
    </div>
  );
}
