import { AddCircle, DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataClassifier } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "@mui/material";

const ClassifierPage = () => {
   const [data, setData] = useState(dataClassifier);

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };

   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "idType", headerName: "Id Tipo", width: 180 },
      {
         field: "description",
         headerName: "Descripcion clasificador",
         width: 150,
      },
      { field: "state", headerName: "Estado", width: 200 },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={"/editClassifier/" + params.row.id}>
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
            <Link to="/createClassifier">
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

export default ClassifierPage;
