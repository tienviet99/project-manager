import React from 'react'
import Customers from '../pages/Categogy/Customers/Customers'
import ProjectType from '../pages/Categogy/ProjectType/ProjectType'
import ProjectState from '../pages/Categogy/ProjectState/ProjectState'
import TechStack from '../pages//Categogy/TechStack/TechStack'
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
  } from './Path'
import Center from '../pages/Manager/Center/Center'
import Personel from '../pages/Manager/Personel/Personel'
import Project from '../pages/Manager/Project/Project'
import ReportProject from '../pages/Report/ReportProject/ReportProject'
import ReportPesonel from '../pages/Report/ReportPesonel/ReportPersonel'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './Home'

export default function Routes() {
    return (
    <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path={PATH_PROJECTTYPE} exact component={ProjectType} />
          <Route path={PATH_PROJECTSTATE} exact component={ProjectState} />
          <Route path={PATH_TECHSTACK} exact component={TechStack} />
          <Route path={PATH_CUSTOMERS} exact component={Customers} />
          <Route path={PATH_CENTER} exact component={Center} />
          <Route path={PATH_PERSONEL} exact component={Personel} />
          <Route path={PATH_PROJECT} exact component={Project} />
          <Route path={PATH_REPORTPROJECT} exact component={ReportProject} />
          <Route path={PATH_REPORTPERSONEL} exact component={ReportPesonel} />
        </Switch>
    </Router>
    )
}
