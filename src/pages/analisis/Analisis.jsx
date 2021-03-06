import * as React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import RutasLog from "../../components/rutaslg/RutasLog";
import "./analisis.css"

const Analisis = () => {
   return (
      <div style={{ flex: "6", padding: "10px 20px" }}>
         <h1>Analisis de las rutas</h1>
         <FeaturedInfo />
         <div className="analisisWidgets" >
            <RutasLog />
         </div>
      </div>
   );
};

export default Analisis;
