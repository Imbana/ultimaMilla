import { AddCircle, DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataBusiness } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const BusinessPage = () => {
   const [data, setData] = useState(dataBusiness);

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };

   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "name", headerName: "Nombre", width: 180 },
      { field: "address", headerName: "Dirección", width: 150 },
      { field: "nit", headerName: "NIT", width: 200 },
      { field: "idcState", headerName: "IdcEstado", width: 120 },
      { field: "idcType", headerName: "IdcTipo", width: 120 },
      { field: "idcCity", headerName: "IdcCiudad", width: 120 },
      { field: "idcUser", headerName: "IdcUsuario", width: 120 },
      { field: "createDate", headerName: "Fecha Creación", width: 120 },
      { field: "registerDate", headerName: "Fecha Modificación", width: 120 },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={"/editBusiness/" + params.row.id}>
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
      //           {params.row.username}
      //         </div>
      //       );
      //     },
      //   },
   ];

   return (
      <div className="crudPage containerPage">
         <div className="crudPageNav">
            <h2>Empresas</h2>
            <Link to="/createBusiness">
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
            sx={{ height: "70vh",width:"95%" }}
            columns={columns}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            pageSize={10}
            checkboxSelection
         />
      </div>
   );
};

export default BusinessPage;
