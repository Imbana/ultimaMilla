import { MailOutline, PermIdentity } from "@mui/icons-material";
import { Button } from "@mui/material";

const classifierEdit = {
   id: 3,
   docClient: 1,
   nameClient: 1,
   neighborhood: 1,
   address: "12546",
   numHouse: "12556",
   emailClient: "25-02-2020",
   lat: "12546",
   log: "12556",
   date: "25-02-2020",
   state: "activo",
};

export default function EditCustomerPage() {
   return (
      <div className="crudEdit editUserPage">
         <div className="crudEditTitleContainer">
            <h1 className="crudEditTitle">Editar Cliente</h1>
         </div>
         <div className="crudEditContainer">
            <div className="crudEditShow">
               <div className="crudEditShowTopTitle">
                  <span className="crudEditShowUsername">
                     {classifierEdit.nameClient}
                  </span>
               </div>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">
                     Detalles del Cliente
                  </span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.docClient}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.nameClient}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.neighborhood}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.address}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.numHouse}
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        {classifierEdit.emailClient}
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
                  <Button
                     sx={{ marginLeft: "40px" }}
                     size="medium"
                     variant="contained"
                  >
                     Actualizar
                  </Button>
               </div>
               <form className="crudEditUpdateForm">
                  <div className="crudEditUpdateLeft">
                     <div className="crudEditUpdateItem">
                        <label>Doc Cliente</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.docClient}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Nombre del Cliente</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.nameClient}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Barrio</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.neighborhood}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Direccion</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.address}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Numero de casa</label>
                        <input
                           type="text"
                           placeholder={classifierEdit.numHouse}
                           className="crudEditUpdateInput"
                        />
                     </div>
                     <div className="crudEditUpdateItem">
                        <label>Email </label>
                        <input
                           type="text"
                           placeholder={classifierEdit.emailClient}
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
