import { AddCircle, DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataTypeClassifier } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "@mui/material";

const TypeClassifierPage = () => {
   const [data, setData] = useState(dataTypeClassifier);

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };

   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "description", headerName: "Descripción", width: 180 },
      { field: "state", headerName: "Estado", width: 150 },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={"/editTypeClassifier/" + params.row.id}>
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
            <h2>Tipo de Clasificador</h2>
            <Link to="/createTypeClassifier">
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

export default TypeClassifierPage;
