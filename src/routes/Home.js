import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom"
import './style.css'
import {     
    PATH_CENTER, 
    PATH_CUSTOMERS, 
    PATH_PERSONEL, 
    PATH_PROJECT, 
    PATH_PROJECTSTATE, 
    PATH_PROJECTTYPE, 
    PATH_REPORTPERSONEL, 
    PATH_REPORTPROJECT, 
    PATH_TECHSTACK  
} from './Path';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function ProjectType() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Project Manager Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <h2> Category</h2>     
            <ListItem button key='Project Type'>
                <Link className='category' to={PATH_PROJECTTYPE}>  
                    <ListItemText primary='Project Type' /> 
                </Link>
            </ListItem>
            <ListItem button key='Project State'>
                <Link className='category' to={PATH_PROJECTSTATE}>  
                    <ListItemText primary='Project State' /> 
                </Link>
            </ListItem>
            <ListItem button key='Tech Stack'>
                <Link className='category' to={PATH_TECHSTACK}>  
                    <ListItemText primary='Tech Stack' /> 
                </Link>
            </ListItem>
            <ListItem button key='Customers'>
                <Link className='category' to={PATH_CUSTOMERS}>  
                    <ListItemText primary='Customers' /> 
                </Link>
            </ListItem>
        </List>
        <Divider />
        <List>
            <h2> Manager </h2>     
            <ListItem button key='Center'>
                <Link className='category' to={PATH_CENTER}>  
                    <ListItemText primary='Center' /> 
                </Link>
            </ListItem>
            <ListItem button key='Personel'>
                <Link className='category' to={PATH_PERSONEL}>  
                    <ListItemText primary='Personel' /> 
                </Link>
            </ListItem>
            <ListItem button key='Project'>
                <Link className='category' to={PATH_PROJECT}>  
                    <ListItemText primary='Project' /> 
                </Link>
            </ListItem>
        </List>
        <Divider />
        <List>
            <h2> Report </h2>     
            <ListItem button key='Report Project'>
                <Link className='category' to={PATH_REPORTPROJECT}>  
                    <ListItemText primary='Report Project' /> 
                </Link>
            </ListItem>
            <ListItem button key='Report Personel'>
                <Link className='category' to={PATH_REPORTPERSONEL}>  
                    <ListItemText primary='Report Personel' /> 
                </Link>
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
