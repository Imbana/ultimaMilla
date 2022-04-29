import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";


export default function CreateBusinessPage() {

   return (
      <div className="newUser createUserPage">
         <h1 className="newUserTitle">Nueva Empresa</h1>
         <form className="newUserForm">
            <div className="newUserItem">
               <label>Nombre</label>
               <input type="text" placeholder="john" />
            </div>
            <div className="newUserItem">
               <label>Dirección</label>
               <input type="text" placeholder="carrera 17 calle  4-33" />
            </div>
            <div className="newUserItem">
               <label>Nit</label>
               <input type="text" placeholder="8 - 9999999" />
            </div>
            <div className="newUserItem">
               <label>idc Estado</label>
               <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
            </div>
            <div className="newUserItem">
               <label>idc Tipo</label>
               <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
            </div>
            <div className="newUserItem">
               <label>idc Ciudad</label>
               <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
            </div>
            <div className="newUserItem">
               <label>id Usuario</label>
               <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
            </div>
            <div className="newUserItem">
               <label>Fecha de creación</label>
               <input type="date" placeholder="22-02-2020" />
            </div>
            <div className="newUserItem">
               <label>Fecha de modificación</label>
               <input type="date" placeholder="22-02-2020" />
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
