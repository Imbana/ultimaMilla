import { AddCircle, DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataUser } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "@mui/material";

const UserPage = () => {
   const [data, setData] = useState(dataUser);

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };

   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "name", headerName: "Nombre", width: 180 },
      { field: "phone", headerName: "Celular", width: 150 },
      { field: "email", headerName: "Email", width: 200 },
      { field: "password", headerName: "Contraseña", width: 120 },
      { field: "registerDate", headerName: "Fecha de Registro", width: 120 },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={"/editUser/" + params.row.id}>
                     <button className="crudListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                     className="crudListDelete"
                     onClick={() => handleDelete(params.row.id)}
                  />
               </>
            );
         },
      },
      //   {
      //     field: "user",
      //     headerName: "User",
      //     width: 400,
      //     renderCell: (params) => {
      //       return (
      //         <div className="crudListUser">
      //           <img className="crudListImg" src={params.row.avatar} alt="" />
      //           {params.row.crudname}
      //         </div>
      //       );
      //     },
      //   },
   ];

   return (
      <div className="crudPage containerPage">
         <div className="crudPageNav">
            <h2>Usuarios</h2>
            <Link to="/createUser">
            <Button
                  className="crudButtonCrear"
                  variant="contained"
                  startIcon={<AddCircle />}
               >
                  Crear
               </Button>
            </Link>
         </div>
         <DataGrid
            rows={data}
            columns={columns}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            pageSize={10}
            checkboxSelection
         />
      </div>
   );
};

export default UserPage;
