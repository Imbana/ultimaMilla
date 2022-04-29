import { AddCircle, DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataDevice } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const DevicePage = () => {
   const [data, setData] = useState(dataDevice);
   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };

   //    id: 1,
   //    imei: 1,
   //    numero: 1,
   //    idUser: 1,
   //    fecha: "12546",
   //    activo: "12556",

   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "imei", headerName: "Id Tipo", width: 180 },
      { field: "numero", headerName: "Patente", width: 150 },
      { field: "idUser", headerName: "Numero de licencia", width: 200 },
      { field: "state", headerName: "Activo", width: 200 },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={"/editDevice/" + params.row.id}>
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
            <Link to="/createDevice">
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

export default DevicePage;
