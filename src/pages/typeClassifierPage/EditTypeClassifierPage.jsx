import {
    Description,
    Fingerprint,
    ModeStandby,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const usuarioEdit = {
    id: 4,
    description: "Aceros ",
    state: "activo",
};

export default function EditTypeClassifierPage() {
   return (
      <div className="crudEdit editUserPage">
         <div className="crudEditTitleContainer">
            <h1 className="crudEditTitle">Editar tipo de clasificador</h1>
         </div>
         <div className="crudEditContainer">
            <div className="crudEditShow">

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles del clasificador</span>
                  <div className="crudEditShowInfo">
                     <Fingerprint className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.id}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Description className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.description}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <ModeStandby className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {usuarioEdit.state}
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
                        <label>Descripción</label>
                        <input
                           type="text"
                           placeholder={usuarioEdit.description}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Estado</label>
                        <input
                           type="text"
                           placeholder={usuarioEdit.state}
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
