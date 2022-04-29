import {
    Event,
   LocationOn,
   Article,
   LocationCity,
   Person,
   PersonOutline,
   PermIdentity,
} from "@mui/icons-material";
import { Button } from "@mui/material";


const empresaEdit = {
    id: 5,
    name: "Juan Pedro Velez",
    address: "Car 34 n 6-44",
    nit: "8 - 844555",
    idcState: "activo",
    idcCity: "545",
    idcType: "123456",
    idcUser: "85",
    createDate:"12-02-2022",
    registerDate: "12-2-2020",
};

export default function EditBusinessPage() {
   return (
      <div className="crudEdit editUserPage">
         <div className="crudEditTitleContainer">
            <h1 className="crudEditTitle">Editar Empresa</h1>
         </div>
         <div className="crudEditContainer">
            <div className="crudEditShow">
               <div className="crudEditShowTopTitle">
                  <span className="crudEditShowUsername">{empresaEdit.name}</span>
                  <span className="crudEditShowUserTitle">{empresaEdit.name}</span>
               </div>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles de la empresa</span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.name}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationOn className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.address}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Article className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.nit}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PersonOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.idcState}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PersonOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.idcType}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationCity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.idcCity}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Person className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.idcUser}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Event className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.createDate}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Event className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {empresaEdit.registerDate}
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
                        <label>Nombre</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.name}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Dirección</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.address}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>NIT</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.nit}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Idc Estado</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.idcState}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Idc Tipo</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.idcType}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Idc Ciudad</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.idcCity}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Id Usuario</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.idcUser}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Fecha de Creacion</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.createDate}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Fecha de Modificacion</label>
                        <input
                           type="text"
                           placeholder={empresaEdit.registerDate}
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
