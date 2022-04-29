import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";
// id: 3,
// docClient: 1,
// nameClient: 1,
// neighborhood: 1,
// address: "12546",
// numHouse: "12556",
// emailClient: "25-02-2020",
// lat: "12546",
// log: "12556",
// date: "25-02-2020",
// state:"activo",

export default function CreateDeliveryPage() {

   return (
      <div className="newUser createUserPage">
         <h1 className="newUserTitle">Nuevo Usuario</h1>
         <form className="newUserForm">
            <div className="newUserItem">
               <label>Doc Cliente</label>
               <input type="text" placeholder="john" />
            </div>
            <div className="newUserItem">
               <label>Nombre del Ciente</label>
               <input type="text" placeholder="..." />
            </div>
            <div className="newUserItem">
               <label>Barrio</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Direccion</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Numero de casa</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Email del Cliente</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Latitud</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Longiud</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Fecha</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>estado</label>
               <input type="text" placeholder="activo" />
            </div>
           
            {/* <div className="newUserItem">
<label>Gender</label>
<div className="newUserGender">
  <input type="radio" name="gender" id="male" value="male" />
  <label for="male">Male</label>
  <input type="radio" name="gender" id="female" value="female" />
  <label for="female">Female</label>
  <input type="radio" name="gender" id="other" value="other" />
  <label for="other">Other</label>
</div>
</div>
<div className="newUserItem">
<label>Active</label>
<select className="newUserSelect" name="active" id="active">
  <option value="yes">Yes</option>
  <option value="no">No</option>
</select>
</div> */}
         </form>
         <Button
               sx={{ marginTop: "20px" }}
               variant="contained"
               startIcon={<Save />}
            >
               Guardar
            </Button>
      </div>
   );
}
