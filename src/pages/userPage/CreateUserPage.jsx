import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";


export default function CreateUserPage() {

   return (
      <div className="newUser createUserPage">
         <h1 className="newUserTitle">Nuevo Usuario</h1>
         <form className="newUserForm">
            <div className="newUserItem">
               <label>Nombre</label>
               <input type="text" placeholder="john" />
            </div>
            <div className="newUserItem">
               <label>Email</label>
               <input type="email" placeholder="john@gmail.com" />
            </div>
            <div className="newUserItem">
               <label>Contraseña</label>
               <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
               <label>Celular</label>
               <input type="text" placeholder="+1 123 456 78" />
            </div>
            <div className="newUserItem">
               <label>Fecha de registro</label>
               <input type="date" placeholder="New York | USA" />
            </div>
            <div className="newUserItem">
               <label>idcEstado</label>
               <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
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
