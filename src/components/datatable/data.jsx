import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "./datasource";
import "./data.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
// let columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First Name", width: 330 },
//   { field: "lastName", headerName: "Last Name", width: 230 },
//   { field: "age", headerName: "Age", width: 130 },
//   {
//     field: "fullName",
//     headerName: "Full Name",
//     width: 230,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""}${params.row.lastName || ""}`,
//   },
//   //we can also use renderCell method to do the same as dine by value getter
//   // renderCell: (params) =>{return (<>
//   //   <span>{params.row.firstName}</span><span>{params.row.lastName}</span>

//   //</>);} },
// ];


export default function Data({ marginTop }) {
  let [data, setData] = useState(userRows);

  const DeleteRow = (id) => {
    console.log(id);
    console.log(data);
    let new_data = data.filter((item) => item.id !== id);
    setData(new_data);
  };
  const actioncolumn = [
    {
      field: "action",
      headerName: "Action",
      width: "250",
      renderCell: (params) => {
        return (
          <>
            <Link
              to="/users/userid"
              state={{
                name: params.row.username,
                email: params.row.email,
              }}
            >
              <div className="view btn btn-outline-primary mx-3">
                <VisibilityTwoToneIcon />
                View
              </div>
            </Link>

            <div className="delete">
              <Button
                onClick={() => DeleteRow(params.row.id)}
                variant="outlined"
                startIcon={<DeleteIcon style={{ color: "red" }} />}
                style={{ color: "red" }}
              >
                Delete
              </Button>
            </div>
          </>
        );
      },
    },
  ];
  return (
    <div
      style={{
        height: 400,
        width: "65%",

        marginLeft: "30%",
        marginTop: "85px",
        border: "none",
      }}
    >
      <DataGrid
        rows={data}
        columns={userColumns.concat(actioncolumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        className="fs-4 "
      />
    </div>
  );
}
