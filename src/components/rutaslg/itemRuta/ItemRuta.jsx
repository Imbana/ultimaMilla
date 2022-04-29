import { Avatar, Chip, Grid, Slider, Stack } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

import ChartOnly from "../../chartOnly/ChartOnly";

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
                  <div>
                     {" "}
                     <span>Vehiculo: JKL - 888</span>
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
               <Slider disabled defaultValue={80} aria-label="Disabled slider" />
               <Slider disabled defaultValue={40} aria-label="Disabled slider" />
               <Slider disabled defaultValue={30} aria-label="Disabled slider" />
               <Slider disabled defaultValue={90} aria-label="Disabled slider" />
               <Slider disabled defaultValue={30} aria-label="Disabled slider" />
               </Grid>
               <Grid item xs={8} md={8}>
                  <ChartOnly />
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default ItemRuta;
