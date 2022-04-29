import { AddCircle, DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { datadelivery } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "@mui/material";

const DeliveryPage = () => {
   const [data, setData] = useState(datadelivery);

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };


   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "idDevice", headerName: "Id Dispositivo", width: 180 },
      { field: "idClient", headerName: "Id Cliente", width: 180 },
      { field: "idUser", headerName: "Id Usuario", width: 180 },
      { field: "lat", headerName: "Latitud", width: 150 },
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
                  <Link to={"/editDelivery/" + params.row.id}>
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
            <h2>Entregas</h2>
            <Link to="/createDelivery">
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

export default DeliveryPage;
