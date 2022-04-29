import React from "react";
import Typography from "@mui/material/Typography";
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Avatar,
   Divider,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./rutasLog.css";
import ItemRuta from "./itemRuta/ItemRuta";

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
            <AccordionDetails>
               <List
                  sx={{
                     width: "100%",
                     maxWidth: 360,
                     bgcolor: "background.paper",
                  }}
               >
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 Ali Connors
                              </Typography>
                              {
                                 " — I'll be in your neighborhood doing errands this…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Travis Howard"
                           src="/static/images/avatar/2.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Summer BBQ"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 to Scott, Alex, Jennifer
                              </Typography>
                              {
                                 " — Wish I could come, but I'm out of town this…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Oui Oui"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 Sandra Adams
                              </Typography>
                              {
                                 " — Do you have Paris recommendations? Have you ever…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Oui Oui"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 Sandra Adams
                              </Typography>
                              {
                                 " — Do you have Paris recommendations? Have you ever…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Oui Oui"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 Sandra Adams
                              </Typography>
                              {
                                 " — Do you have Paris recommendations? Have you ever…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
               </List>
            </AccordionDetails>
         </Accordion>
         <Accordion
            sx={{ marginBottom: "20px" }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel2bh-content"
               id="panel2bh-header"
            >
               <ItemRuta />
            </AccordionSummary>
            <AccordionDetails>
               <List
                  sx={{
                     width: "100%",
                     maxWidth: 360,
                     bgcolor: "background.paper",
                  }}
               >
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 Ali Connors
                              </Typography>
                              {
                                 " — I'll be in your neighborhood doing errands this…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Travis Howard"
                           src="/static/images/avatar/2.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Summer BBQ"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 to Scott, Alex, Jennifer
                              </Typography>
                              {
                                 " — Wish I could come, but I'm out of town this…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Oui Oui"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 Sandra Adams
                              </Typography>
                              {
                                 " — Do you have Paris recommendations? Have you ever…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Oui Oui"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 Sandra Adams
                              </Typography>
                              {
                                 " — Do you have Paris recommendations? Have you ever…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary="Oui Oui"
                        secondary={
                           <React.Fragment>
                              <Typography
                                 sx={{ display: "inline" }}
                                 component="span"
                                 variant="body2"
                                 color="text.primary"
                              >
                                 Sandra Adams
                              </Typography>
                              {
                                 " — Do you have Paris recommendations? Have you ever…"
                              }
                           </React.Fragment>
                        }
                     />
                  </ListItem>
               </List>
            </AccordionDetails>
         </Accordion>
         <Accordion
            sx={{ marginBottom: "20px" }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel3bh-content"
               id="panel3bh-header"
            >
               <Typography sx={{ width: "13%", flexShrink: 0 }}>
                  Advanced settings
               </Typography>

               <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled for whole web server
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel4bh-content"
               id="panel4bh-header"
            >
               <Typography sx={{ width: "13%", flexShrink: 0 }}>
                  Personal data
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
};

export default RutasLog;
