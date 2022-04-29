import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";


export default function CreateVehiclePage() {
    // id: 1,
    // description: "sdgas sshdfjsdf",
    // patent: "2338",
    // numLicense: 12546,
    // insurancePolicy: "12556",
    // owner: "juan",
    // idUser: 134,
    // date: "25-02-2020",
   return (
      <div className="newUser createUserPage">
         <h1 className="newUserTitle">Nuevo Usuario</h1>
         <form className="newUserForm">
            <div className="newUserItem">
               <label>Id Type</label>
               <input type="text" placeholder="john" />
            </div>
            <div className="newUserItem">
               <label>Descripción</label>
               <input type="text" placeholder="..." />
            </div>
            <div className="newUserItem">
               <label>Patente</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Numero Licencia</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Poliza de seguro</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Propietario</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Id Usuario</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Fecha</label>
               <input type="text" placeholder="activo" />
            </div>
            <div className="newUserItem">
               <label>Estado</label>
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
