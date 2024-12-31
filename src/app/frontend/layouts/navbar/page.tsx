// import React, { useState } from "react";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
// import PropTypes from "prop-types";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Typography,
//   Box,
//   Collapse,
//   IconButton
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useTheme, useMediaQuery } from "@mui/material";
// import { ExpandMore, ExpandLess, School, Menu as MenuIcon } from "@mui/icons-material";
// import data from "../components/MenuDatas/menuData";

// const Sidebar = ({ open, collapsed, onClose, onToggleCollapse }) => {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [openMenus, setOpenMenus] = useState([]);

//   const handleToggleMenu = (index) => {
//     setOpenMenus(
//       openMenus.includes(index)
//         ? openMenus.filter((i) => i !== index)
//         : [index] // Change here to only allow one menu to be open at a time
//     );
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     if (isMobile) onClose();
//   };

//   return (
//     <Drawer
//       variant={isMobile ? "temporary" : "permanent"}
//       open={open}
//       onClose={onClose}
//       sx={{
//         width: collapsed ? 80 : 250,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: {
//           width: collapsed ? 80 : 250,
//           backgroundColor: "#0B2F9F",
//           color: "white",
//           boxShadow: "0 0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
//           overflowY: "auto", // Allow vertical scrolling if content overflows
//           height: "100vh", // Ensure it occupies full height
//         },
//       }}
//     >
//       <Box sx={{ p: 2, textAlign: "center", backgroundColor: "#0B2F9F", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <School sx={{ fontSize: 24, color: "white" }} />
//         {!collapsed && (
//           <Typography variant="h4" component="div" sx={{ color: "white", mt: 1, fontSize: '0.8rem' }}>
//             Edu.Tally
//           </Typography>
//         )}
//         <IconButton edge="end" color="inherit" aria-label="menu" onClick={onToggleCollapse}>
//           <MenuIcon />
//         </IconButton>
//       </Box>
//       <Divider sx={{ backgroundColor: "orange" }} />
//       <List>
//         {data.map((item, index) => (
//           <React.Fragment key={index}>
//             <ListItem
//               button
//               onClick={() =>
//                 item.children
//                   ? handleToggleMenu(index)
//                   : handleNavigation(item.path)
//               }
//               sx={{
//                 pl: 1,
//                 py: 0.7,
//                 backgroundColor: openMenus.includes(index) ? "#000" : "transparent",
//                 borderRadius: "5px",
//                 marginBottom: "3px",
//                 width: "15rem",
//                 "&:hover": {
//                   backgroundColor: "#000",
//                   color: "#FF6500",
//                   "& .MuiListItemIcon-root": {
//                     color: "#FF6600",
//                   },
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   color: "white",
//                   minWidth: 35,
//                 }}
//               >
//                 {React.cloneElement(item.icon, { fontSize: "small" })}
//               </ListItemIcon>
//               {!collapsed && (
//                 <ListItemText
//                   primary={item.label}
//                   primaryTypographyProps={{ fontSize: "1rem" }}
//                 />
//               )}
//               {item.children && !collapsed && (
//                 openMenus.includes(index) ? (
//                   <ExpandLess fontSize="small" sx={{ marginRight: "15px" }} />
//                 ) : (
//                   <ExpandMore fontSize="small" sx={{ marginRight: "15px" }} />
//                 )
//               )}
//             </ListItem>
//             <Collapse in={openMenus.includes(index)} timeout="auto" unmountOnExit>
//               <Box sx={{ ml: 4, maxHeight: '300px', overflowY: 'auto' }}> {/* Limit height of collapsible content */}
//                 <List component="div" disablePadding>
//                   {item.children &&
//                     item.children.map((subItem, subIndex) => (
//                       <ListItem
//                         key={subIndex}
//                         button
//                         onClick={() => handleNavigation(subItem.path)}
//                         sx={{
//                           marginLeft: '-20px',
//                           py: 0.1,
//                           borderRadius: "5px",
//                           marginBottom: "0px",
//                           width: "13rem",
//                           "&:hover": {
//                             color: "#ffa500",
//                             "& .MuiListItemIcon-root": {
//                               color: "#ffa500",
//                             },
//                           },
//                         }}
//                       >
//                         <MdOutlineKeyboardDoubleArrowRight
//                           sx={{
//                             color: "white",
//                             minWidth: 35,
//                           }}
//                         />
//                         {!collapsed && (
//                           <ListItemText
//                             primary={subItem.label}
//                             primaryTypographyProps={{
//                               fontSize: "0.74rem",
//                               marginLeft: "3px",
//                               marginTop: "2px",
//                             }}
//                           />
//                         )}
//                       </ListItem>
//                     ))}
//                 </List>
//               </Box>
//             </Collapse>
//           </React.Fragment>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// Sidebar.propTypes = {
//   open: PropTypes.bool.isRequired,
//   collapsed: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   onToggleCollapse: PropTypes.func.isRequired,
// };

// export default Sidebar;
