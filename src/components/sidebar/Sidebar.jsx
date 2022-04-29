import "./sidebar.css";
import {
   LineStyle,
   Timeline,
   TrendingUp,
   FilterNone,
   FilterAlt,
   Person,
   UploadFile,
   Business,
   Close,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
   const handleSidebarMenu = () => {
      const iconClose = document.getElementById("Sidebar");
      console.log(iconClose);
      iconClose.classList.remove("active");
   };
   return (
      <div className="sidebar" id="Sidebar">
         <div className="sidebarIconClose">
            <div onClick={() => handleSidebarMenu()}>
               <Close />
            </div>
         </div>
         <div className="sidebarWrapper">
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Dashboard</h3>
               <ul className="sidebarList">
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon" />
                        Home
                     </li>
                  </NavLink>
                  <NavLink
                     to="/analisis"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Análisis
                     </li>
                  </NavLink>
                  <li className="sidebarListItem">
                     <TrendingUp className="sidebarIcon" />
                     Otros
                  </li>
               </ul>
            </div>
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Menú BI</h3>
               <ul className="sidebarList">
                  <NavLink
                     to="/typeClassifiers"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <FilterNone className="sidebarIcon" />
                        Tipo
                     </li>
                  </NavLink>
                  <NavLink
                     to="/classifiers"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <FilterAlt className="sidebarIcon" />
                        Clasificador
                     </li>
                  </NavLink>
                  <NavLink
                     to="/users"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <Person className="sidebarIcon" />
                        Usuario
                     </li>
                  </NavLink>
                  <NavLink
                     to="business"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <Business className="sidebarIcon" />
                        Empresa
                     </li>
                  </NavLink>
                  <NavLink
                     to="vehicle"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <Business className="sidebarIcon" />
                        Vehiculo
                     </li>
                  </NavLink>
                  <NavLink
                     to="delivery"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <Business className="sidebarIcon" />
                        Entrega
                     </li>
                  </NavLink>
                  <NavLink
                     to="customer"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <Business className="sidebarIcon" />
                        Cliente
                     </li>
                  </NavLink>
                  <NavLink
                     to="device"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <Business className="sidebarIcon" />
                        Dispositivo
                     </li>
                  </NavLink>
                  <NavLink
                     to="/dataImport"
                     className={({ isActive }) =>
                        isActive ? "link active" : "link"
                     }
                  >
                     <li className="sidebarListItem">
                        <UploadFile className="sidebarIcon" />
                        Datos Importados
                     </li>
                  </NavLink>
               </ul>
            </div>
            {/* <div className="sidebarMenu">
               <h3 className="sidebarTitle">Notifications</h3>
               <ul className="sidebarList">
                  <li className="sidebarListItem">
                     <MailOutline className="sidebarIcon" />
                     Mail
                  </li>
                  <li className="sidebarListItem">
                     <DynamicFeed className="sidebarIcon" />
                     Feedback
                  </li>
                  <li className="sidebarListItem">
                     <ChatBubbleOutline className="sidebarIcon" />
                     Messages
                  </li>
               </ul>
            </div> */}
         </div>
      </div>
   );
}
