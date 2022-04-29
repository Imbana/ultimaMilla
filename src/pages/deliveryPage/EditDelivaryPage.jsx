import {
   MailOutline,
   PermIdentity,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const classifierEdit = {
    id: 6,
    idDevice: 2,
    idClient: 2,
    idUser: 3,
    lat: "12546",
    log: "12556",
    date: "25-02-2020",
    state:"activo",
};

export default function EditDeliveryPage() {
   return (
      <div className="crudEdit editUserPage">
         <div className="crudEditTitleContainer">
            <h1 className="crudEditTitle">Editar Entrega</h1>
         </div>
         <div className="crudEditContainer">
            <div className="crudEditShow">
               <div className="crudEditShowTopTitle">
                  <span className="crudEditShowUsername">{classifierEdit.id}</span>
               </div>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles de la entrega</span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.idDevice}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.idClient}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.idUser}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.lat}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.log}
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
                        <label>Id Dispositivo</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.idDevice}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Id Cliente</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.idClient}
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
                        <label>Latitud</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.lat}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Longitud</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.log}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Fecha</label>
                        <input
                           type="date"
                           placeholder={classifierEdit.date}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Activo</label>
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
