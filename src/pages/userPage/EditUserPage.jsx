import {
   CalendarToday,
   LocationSearching,
   MailOutline,
   PermIdentity,
   PhoneAndroid,
   Key,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const usuarioEdit = {
   id: 1,
   name: "Juan Pedro Velez",
   phone: 3185456852,
   email: "juan@gmail.com",
   password: "juan123456",
   idcType: "123456",
   idcEstado: "active",
   registerDate: "12-2-2020",
};

export default function EditUserPage() {
   return (
      <div className="crudEdit editUserPage">
         <div className="crudEditTitleContainer">
            <h1 className="crudEditTitle">Editar Usuario</h1>
         </div>
         <div className="crudEditContainer">
            <div className="crudEditShow">
               <div className="crudEditShowTopTitle">
                  <span className="crudEditShowUsername">{usuarioEdit.name}</span>
                  <span className="crudEditShowUserTitle">{usuarioEdit.name}</span>
               </div>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles del usuario</span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.name}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PhoneAndroid className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.phone}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.email}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Key className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.password}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <CalendarToday className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.registerDate}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.idcEstado}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.idcType}
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
                           placeholder={usuarioEdit.name}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Celular</label>
                        <input
                           type="text"
                           placeholder={usuarioEdit.phone}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Email</label>
                        <input
                           type="text"
                           placeholder={usuarioEdit.email}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Contraseña</label>
                        <input
                           type="text"
                           placeholder={usuarioEdit.password}
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
