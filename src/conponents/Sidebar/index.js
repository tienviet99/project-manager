// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import {Link} from "react-router-dom"
// import './style.css'
// import {     
//     PATH_CENTER, 
//     PATH_CUSTOMERS, 
//     PATH_PERSONEL, 
//     PATH_PROJECT, 
//     PATH_PROJECTSTATE, 
//     PATH_PROJECTTYPE, 
//     PATH_REPORTPERSONEL, 
//     PATH_REPORTPROJECT, 
//     PATH_TECHSTACK  
// } from '../../routes/Path';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3),
//   },
// }));

// export default function Sidebar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <div className={classes.toolbar} />
//         <Divider />
//         <List>
//             <h2> Danh mục</h2>     
//             <ListItem button key='Project Type'>
//                 <Link className='category' to={PATH_PROJECTTYPE}>  
//                     <ListItemText primary='Loại dự án' /> 
//                 </Link>
//             </ListItem>
//             <ListItem button key='Project State'>
//                 <Link className='category' to={PATH_PROJECTSTATE}>  
//                     <ListItemText primary='Trạng thái dự án' /> 
//                 </Link>
//             </ListItem>
//             <ListItem button key='Tech Stack'>
//                 <Link className='category' to={PATH_TECHSTACK}>  
//                     <ListItemText primary='Tech Stack' /> 
//                 </Link>
//             </ListItem>
//             <ListItem button key='Customers'>
//                 <Link className='category' to={PATH_CUSTOMERS}>  
//                     <ListItemText primary='Nhóm khách hàng' /> 
//                 </Link>
//             </ListItem>
//         </List>
//         <Divider />
//         <List>
//             <h2> Quản lí </h2>     
//             <ListItem button key='Center'>
//                 <Link className='category' to={PATH_CENTER}>  
//                     <ListItemText primary='Trung tâm, bộ phận, phòng ban' /> 
//                 </Link>
//             </ListItem>
//             <ListItem button key='Personel'>
//                 <Link className='category' to={PATH_PERSONEL}>  
//                     <ListItemText primary='Nhân sự' /> 
//                 </Link>
//             </ListItem>
//             <ListItem button key='Project'>
//                 <Link className='category' to={PATH_PROJECT}>  
//                     <ListItemText primary='Dự án' /> 
//                 </Link>
//             </ListItem>
//         </List>
//         <Divider />
//         <List>
//             <h2> Báo cáo </h2>     
//             <ListItem button key='Report Project'>
//                 <Link className='category' to={PATH_REPORTPROJECT}>  
//                     <ListItemText primary='Số lượng dự án' /> 
//                 </Link>
//             </ListItem>
//             <ListItem button key='Report Personel'>
//                 <Link className='category' to={PATH_REPORTPERSONEL}>  
//                     <ListItemText primary='Số lượng nhân sự' /> 
//                 </Link>
//             </ListItem>
//       </List>
//       </Drawer>
//     </div>
//   );
// }
