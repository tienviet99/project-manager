import React from 'react'

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
import Customers from '../pages/Categogy/Customers'
import ProjectType from '../pages/Categogy/ProjectType'
import ProjectState from '../pages/Categogy/ProjectState'
import TechStack from '../pages/Categogy/TechStack'
import Center from '../pages/Manager/Center'
import Personel from '../pages/Manager/Personel'
import Project from '../pages/Manager/Project'
import ReportProject from '../pages/Report/ReportProject'
import ReportPesonel from '../pages/Report/ReportPesonel'
import {MenuItem} from '../types/route/MenuItem'
import {RouteModel} from '../types/route/Route'

export const menuItemCategories: MenuItem[] = [
  {
    name: 'Loại dự án',
    to : PATH_PROJECTTYPE,
  },
  {
    name: 'Trạng thái dự án',
    to : PATH_PROJECTSTATE,
  },
  {
    name: 'Tech Stack',
    to : PATH_TECHSTACK,
  },
  {
    name: 'Nhóm khách hàng',
    to : PATH_CUSTOMERS,
  },
]
export const menuItemManager: MenuItem[] = [
  {
    name: 'Trung tâm, bộ phận, phòng ban',
    to : PATH_CENTER,
  },
  {
    name: 'Nhân sự',
    to : PATH_PERSONEL,
  },
  {
    name: 'Dự án',
    to : PATH_PROJECT,
  },
]
export const menuItemReport: MenuItem[] = [
  {
    name: 'Số lượng dự án',
    to : PATH_REPORTPROJECT,
  },
  {
    name: 'Số lượng nhân sự',
    to : PATH_REPORTPERSONEL,
  },
];

export const appRoutes: RouteModel[] = [
  {
    exact: true,
    path: PATH_PROJECTTYPE,
    component: ProjectType,
  },
  {
    exact: true,
    path: PATH_PROJECTSTATE,
    component: ProjectState,
  },
  {
    exact: true,
    path: PATH_TECHSTACK,
    component: TechStack,
  },
  {
    exact: true,
    path: PATH_CUSTOMERS,
    component: Customers,
  },
  {
    exact: true,
    path: PATH_CENTER,
    component: Center,
  },
  {
    exact: true,
    path: PATH_PERSONEL,
    component: Personel,
  },
  {
    exact: true,
    path: PATH_PROJECT,
    component: Project,
  },
  {
    exact: true,
    path: PATH_REPORTPROJECT,
    component: ReportProject,
  },
  {
    exact: true,
    path: PATH_REPORTPERSONEL,
    component: ReportPesonel,
  },
];