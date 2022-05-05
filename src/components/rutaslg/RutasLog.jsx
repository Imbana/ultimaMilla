import React from "react";
import Typography from "@mui/material/Typography";
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Avatar,
   Divider,
   IconButton,
   List,
   ListItem,
   ListItemAvatar,
   ListItemButton,
   ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./rutasLog.css";
import ItemRuta from "./itemRuta/ItemRuta";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Key,
 } from "@mui/icons-material";
import MapSm from "../mapsm/MapSm";

const RutasLog = () => {
   const [expanded, setExpanded] = React.useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <div className="rutasLog">
         <Accordion
            sx={{ marginBottom: "20px" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1bh-content"
               id="panel1bh-header"
            >
            <ItemRuta />
            </AccordionSummary>

            <AccordionDetails sx={{display:"flex",justifyContent:"space-between"}}>
               <List
                  sx={{
                     width: "100%",
                     maxWidth: 360,
                     bgcolor: "background.paper",
                  }}
               >
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                 
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(255, 99, 132)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(255, 99, 132)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
               </List>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles del usuario</span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Raul Ochoa
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PhoneAndroid className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        1124855258
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Raul@gmail.com
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Key className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        314458224
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <CalendarToday className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Dir : Calle 8 # 8-8
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        2120-08-21
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                       1
                     </span>
                  </div>
               </div>



               <MapSm />


            </AccordionDetails>
         </Accordion>
         <Accordion
            sx={{ marginBottom: "20px" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1bh-content"
               id="panel1bh-header"
            >
            <ItemRuta />
            </AccordionSummary>

            <AccordionDetails sx={{display:"flex",justifyContent:"space-between"}}>
               <List
                  sx={{
                     width: "100%",
                     maxWidth: 360,
                     bgcolor: "background.paper",
                  }}
               >
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                 
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(255, 99, 132)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(255, 99, 132)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
               </List>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles del usuario</span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Raul Ochoa
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PhoneAndroid className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        1124855258
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Raul@gmail.com
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Key className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        314458224
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <CalendarToday className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Dir : Calle 8 # 8-8
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        2120-08-21
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                       1
                     </span>
                  </div>
               </div>



               <MapSm />


            </AccordionDetails>
         </Accordion>
         <Accordion
            sx={{ marginBottom: "20px" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1bh-content"
               id="panel1bh-header"
            >
            <ItemRuta />
            </AccordionSummary>

            <AccordionDetails sx={{display:"flex",justifyContent:"space-between"}}>
               <List
                  sx={{
                     width: "100%",
                     maxWidth: 360,
                     bgcolor: "background.paper",
                  }}
               >
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                 
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(255, 99, 132)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(255, 99, 132)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
               </List>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles del usuario</span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Raul Ochoa
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PhoneAndroid className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        1124855258
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Raul@gmail.com
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Key className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        314458224
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <CalendarToday className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Dir : Calle 8 # 8-8
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        2120-08-21
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                       1
                     </span>
                  </div>
               </div>



               <MapSm />


            </AccordionDetails>
         </Accordion>
         <Accordion
            sx={{ marginBottom: "20px" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1bh-content"
               id="panel1bh-header"
            >
            <ItemRuta />
            </AccordionSummary>

            <AccordionDetails sx={{display:"flex",justifyContent:"space-between"}}>
               <List
                  sx={{
                     width: "100%",
                     maxWidth: 360,
                     bgcolor: "background.paper",
                  }}
               >
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                 
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(255, 99, 132)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(53, 162, 235)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start"
                  secondaryAction={
                    <IconButton title="Ver detalles">
                      <VisibilityIcon sx={{color:"rgba(255, 99, 132)"}}/> 
                      
                    </IconButton>
                  }
                  >
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Raul Manuel Ochoa"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                2255544888
                              </Typography>
                        
                           </React.Fragment>
                        }
                     />
                     <ListItemButton 
                     />
                  </ListItem>
               </List>

               <div className="crudEditShowBottom">
                  <span className="crudEditShowTitle">Detalles del usuario</span>
                  <div className="crudEditShowInfo">
                     <PermIdentity className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Raul Ochoa
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <PhoneAndroid className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        1124855258
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <MailOutline className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Raul@gmail.com
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <Key className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        314458224
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <CalendarToday className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        Dir : Calle 8 # 8-8
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                        2120-08-21
                     </span>
                  </div>
                  <div className="crudEditShowInfo">
                     <LocationSearching className="crudEditShowIcon" />
                     <span className="crudEditShowInfoTitle">
                       1
                     </span>
                  </div>
               </div>



               <MapSm />


            </AccordionDetails>
         </Accordion>








      </div>
   );
};

export default RutasLog;
