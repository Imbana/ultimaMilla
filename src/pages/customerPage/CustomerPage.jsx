import { AddCircle, DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataClient } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "@mui/material";

const CustomerPage = () => {
   const [data, setData] = useState(dataClient);

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };



   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "docClient", headerName: "Documento Cliente", width: 180 },
      { field: "nameClient", headerName: "Nombre del cliente", width: 150 },
      { field: "neighborhood", headerName: "Barrio", width: 200 },
      { field: "address", headerName: "Direccion", width: 200 },
      { field: "numHouse", headerName: "Numero de casa", width: 200 },
      { field: "emailClient", headerName: "Email del cliente", width: 200 },
      { field: "lat", headerName: "Latitud", width: 200 },
      { field: "log", headerName: "Longitud", width: 200 },
      { field: "date", headerName: "Fecha", width: 200 },
      { field: "state", headerName: "Estado", width: 200 },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={"/editCustomer/" + params.row.id}>
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
            <h2>Clasificadores</h2>
            <Link to="/createCustomer">
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

export default CustomerPage;
