import React from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import { bikewayGeoJSON } from "../../data/geoJSON";
import "./mapSm.css";

const center = { lat: -3.9945, lng: -79.2012 };

var myStyle = {
   color: "#ff7800",
   weight: 8,
};
const point2 = {
    lat: -3.9905,
    lng: -79.2001
  };
  const point3 = {
    lat: -4.0304,
    lng: -79.1987
  };
const MapSm = () => {
   const onEachFeature = (feature, layer) => {
      const whenClicked = (e) => {
         console.log(e);
      };
      layer.on({
         click: whenClicked,
      });
   };
   return (
      <div className="mapSm">
         <MapContainer
            style={{ height: "100%", width: "100%", zIndex: 10 }}
            center={center}
            zoom={13}
            scrollWheelZoom={true}
         >
            <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
               <Popup>
                  Paso del auto <br /> 10:10 am
               </Popup>
            </Marker>
            <Marker position={point2}>
               <Popup>
                  Paso del auto <br /> 10:10 am
               </Popup>
            </Marker>
            <Marker position={point3}>
               <Popup>
                  Paso del auto <br /> 10:10 am
               </Popup>
            </Marker>
        
            <GeoJSON
               style={myStyle}
               data={bikewayGeoJSON}
               onEachFeature={onEachFeature}
            />
         </MapContainer>
      </div>
   );
};

export default MapSm;
