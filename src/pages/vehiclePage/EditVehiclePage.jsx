import {
   MailOutline,
   PermIdentity,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const classifierEdit = {
    id: 1,
    description: "sdgas sshdfjsdf",
    patent: "2338",
    numLicense: 12546,
    insurancePolicy: "12556",
    owner: "juan",
    idUser: 134,
    date: "25-02-2020",
};


export default function EditVehiclePage() {
   return (
      <div className="crudEdit editUserPage">
         <div className="crudEditTitleContainer">
            <h1 className="crudEditTitle">Editar Vehiculo</h1>
         </div>
         <div className="crudEditContainer">
            <div className="crudEditShow">
               <div className="crudEditShowTopTitle">
                  <span className="crudEditShowUsername">{classifierEdit.owner}</span>
               </div>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles del Clasificador</span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.idType}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.description}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.patent}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.numLicense}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.insurancePolicy}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.owner}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.date}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.state}
                     </span>
                  </div>
               </div>
            </div>
            <div className="crudEditUpdate">
               <div className="crudEditUpdateNav">
                  <span className="crudEditUpdateTitle">Editar</span>
                  <Button sx={{marginLeft:"40px"}}  size="medium" variant="contained">Actualizar</Button>
            
               </div>
               <form className="crudEditUpdateForm">
                  <div className="crudEditUpdateLeft">
                     <div className="crudEditUpdateItem">
                        <label>Id Tipo</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.idType}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Descripción</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.phone}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Patente</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.patent}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Numero de licencia</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.numLicense}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Poliza de seguro</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.insurancePolicy}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Propietario</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.owner}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Id Usuario</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.idUser}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Fecha</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.date}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Estado</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.state}
                           className="crudEditUpdateInput"
                        />
                     </div>
                  </div>
                  {/* <div className="crudEditUpdateRight">
                     <div className="crudEditUpdateUpload">
                        <img
                           className="crudEditUpdateImg"
                           src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                           alt=""
                        />
                        <label htmlFor="file">
                           <Publish className="crudEditUpdateIcon" />
                        </label>
                        <input
                           type="file"
                           id="file"
                           style={{ display: "none" }}
                        />
                     </div>
                    
                  </div> */}
               </form>
            </div>
         </div>
      </div>
   );
}
