import * as React from "react";
import './UserGrid.css';
import { DataGrid } from "@mui/x-data-grid";

const UsersGrid = (props) => {
  const columns = [
    { field: "id", headerName: "ID", width: 40},
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    {
      field: "body",
      headerName: "Body",
      width: 700,
    },
  ];

  const rows = props.usersData;

  return (
    <div className="grid-content">
      <DataGrid
        sx={{backgroundColor: "#EEEEEE",borderColor: "black"}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UsersGrid;
