import { Avatar, Chip, Grid, Slider, Stack } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import BubbleChart from "../../chart/BubbleChart";
import "./itemRuta.css"

const ItemRuta = () => {
   return (
      <div className="itemRuta">
         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
               <Grid item xs={4} md={4}>
                  <div
                     className="itemRutaCard"
                     style={{ display: "flex", gap: "15px" }}
                  >
                     <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                     <span>Juan Camilo</span>
                  </div>
                  <div className="itemRutaDesc">
                     <span>Vehiculo: 3610-HIE</span> <br/>
                     <span>Tienda: tienda amiga</span> <br/>
                     <span>78452224</span>
                  </div>
               </Grid>
               <Grid item xs={8} md={8}>
                  <Stack direction="row" spacing={1}>
                     <Chip label="Pendiente 5" color="primary" variant="outlined" />
                     <Chip label="Entregado 3" color="success" variant="outlined" />
                     <Chip label="No Entregado 8" color="error" variant="outlined" />
                  </Stack>
               </Grid>
               <Grid item xs={4} md={4} sx={{display:"flex",justifyContent:"center", flexDirection:"column"}}>
                <h3>Rutas finalizadas</h3>
                <span>15 Entregadas</span>
               <Slider  disabled defaultValue={80} aria-label="Disabled slider" />
               <span>3 Pendientes</span>
               <Slider disabled defaultValue={40} aria-label="Disabled slider" />
               <span>2 No Entregadas</span>
               <Slider disabled defaultValue={30} aria-label="Disabled slider" />
              </Grid>
               <Grid item xs={8} md={8}>
                  <BubbleChart />
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default ItemRuta;
