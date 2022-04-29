import React from "react";
import "./topbar.css";
import { Language, Menu, NotificationsNone } from "@mui/icons-material";

export default function Topbar() {
   const handleMenu = () => {
      const iconClose = document.getElementById("Sidebar");
      console.log(iconClose);
      iconClose.classList.add("active");
   };

   return (
      <div className="topbar">
         <div className="topbarWrapper">
            <div
               className="topLeft"
               style={{
                  flex: 1,
                  textAlign: "center",
                  background: "#202e44",
                  height: "100%",
                  minWidth:"200px"
               }}
            >
            
                  <span className="logo">Ultima Milla</span>
          
            </div>
            <div
               className="topRight"
               style={{
                  flex: 6,
                  justifyContent: "flex-end",
                  margin: "0px 20px",
               }}
            >
               <div className="topbarIconContainer">
                  <NotificationsNone />
                  <span className="topIconBadge">2</span>
               </div>
               <div className="topbarIconContainer">
                  <Language />
                  <span className="topIconBadge">2</span>
               </div>
               <div
                  className="topbarIconContainer topbarIconMenu"
                  onClick={() => handleMenu()}
               >
                  <Menu />
               </div>
               <div className="topbarIconContainer"></div>
               <img
                  src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="topAvatar"
               />
            </div>
         </div>
      </div>
   );
}
