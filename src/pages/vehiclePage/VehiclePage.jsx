import {  AddCircle, DeleteOutline, Edit } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { datavehicle } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const VehiclePage = () => {
   const [data, setData] = useState(datavehicle);

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };

   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "description", headerName: "Id Tipo", width: 180 },
      { field: "patent", headerName: "Patente", width: 150 },
      { field: "numLicense", headerName: "Numero de licencia", width: 200 },
      { field: "state", headerName: "Poliza de seguro", width: 200 },
      { field: "owner", headerName: "Propietario", width: 200 },
      { field: "idUser", headerName: "Id Usuario", width: 200 },
      { field: "date", headerName: "Fecha", width: 200 },
      { field: "state", headerName: "Activo", width: 200 },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={"/editVehicle/" + params.row.id}>
                     {/* <button  Edit className="crudListEdit">Edit</button> */}
                        <Edit className="crudListEditIcon"/>
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
            <Link to="/createVehicle">
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

export default VehiclePage;
