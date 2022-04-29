import React, { useState } from "react";
import { dataImport } from "../../data/dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

import { Delete, Save, FileUpload } from "@mui/icons-material";
const DataImportPage = () => {
   const [data] = useState(dataImport);

   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "document", headerName: "Documento", width: 180 },
      { field: "lat", headerName: "Latitud", width: 150 },
      { field: "log", headerName: "Longitud", width: 200 },
      { field: "address", headerName: "Dirección", width: 120 },
      { field: "nameItem", headerName: "Nombre Item", width: 120 },
      { field: "quantity", headerName: "Cantidad", width: 120 },
      { field: "code", headerName: "Codigo", width: 120 },
      { field: "deliverDateMin", headerName: "Fecha entrega Min", width: 120 },
      { field: "deliverDateMin", headerName: "Fecha entrega Max", width: 120 }, //Revisar
      { field: "saleHourMin", headerName: "Venta hora Min", width: 120 },
      { field: "saleHourMax", headerName: "Venta hora Max", width: 120 },
      { field: "costItem", headerName: "Costo item", width: 120 },
      { field: "capacity", headerName: "Capacidad", width: 120 },
      { field: "capacity2", headerName: "Capacidad 2", width: 120 },
      { field: "serviceTime", headerName: "Service Time", width: 120 },
      { field: "importance", headerName: "Importancia", width: 120 },
      { field: "docClient", headerName: "Doc Cliente", width: 120 },
      { field: "nameClient", headerName: "Nombre Cliente", width: 120 },
      { field: "emailContact", headerName: "Email Contacto", width: 120 },
      { field: "ctoOrigen", headerName: "CTO Origen", width: 120 },
      { field: "domiciliaryRef", headerName: "Domiciliaria Ref", width: 120 },
      { field: "nameRef", headerName: "Nombre Ref", width: 120 },
      { field: "phoneRef", headerName: "Telefono Ref", width: 120 },
      { field: "sumInvoice", headerName: "Total Factura", width: 120 },
      { field: "numInvoice", headerName: "Num Factura", width: 120 },
      { field: "numOrder", headerName: "Num Pedido", width: 120 },
      { field: "state", headerName: "Activo", width: 120 },
      { field: "date", headerName: "Fecha", width: 120 },
      { field: "idUsuario", headerName: "Id Usuario", width: 120 },

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
            <h2>Importar Datos Agenda</h2>
            <Button
               sx={{ marginLeft: "20px" }}
               color="success"
               variant="contained"
               startIcon={<FileUpload />}
            >
               Importar
            </Button>
            <Button
               sx={{ marginLeft: "40px" }}
               variant="contained"
               startIcon={<Save />}
            >
               Guardar
            </Button>
            <Button
               sx={{ marginLeft: "40px" }}
               color="error"
               variant="contained"
               startIcon={<Delete />}
            >
               Borrar
            </Button>
         </div>
         <DataGrid
            sx={{ height: "80vh" }}
            rows={data}
            columns={columns}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            pageSize={10}
         />
      </div>
   );
};

export default DataImportPage;
