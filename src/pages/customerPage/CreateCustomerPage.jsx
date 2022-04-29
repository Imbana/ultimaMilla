import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";


export default function CreateCustomerPage() {

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
