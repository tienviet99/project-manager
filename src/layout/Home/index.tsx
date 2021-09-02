import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import { ListItemText } from '@material-ui/core';

import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Layout,
  Menu,
} from 'antd';
import { 
  menuItemCategories, 
  menuItemManager, 
  menuItemReport, 
  appRoutes,
} from '../../routes/Routes';
import './style.css'


const {
  Header,
  Content,
  Sider,
} = Layout;

const Home = () => {
  const renderMenuItems = (items: typeof menuItemCategories) => (
    items.map((item) => (
      <Menu.Item
        key={item.to}
        style={{listStyleType :'none'}}
      >

        <Link 
          to={item.to} 
          style={{
            textDecoration:'none',
            color:'White',
          }}
        >
          <ListItem  >
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>

      </Menu.Item>
    ))
  );

  const renderRoutes = (routes: typeof appRoutes) => (
    routes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))
  );

  return (
    <Layout style={{width:'100vw',height:'100vh'}}>
      <Header>
        <Toolbar style={{backgroundColor:'#3F51B5', borderBottom:'1px solid #ffffff'}}>
          <h2 style={{color:'white'}}>
            Phần mềm quản lý dự án
          </h2>
        </Toolbar>
      </Header>
      <Layout style={{display:'flex', height:'100%'}}>
        <Sider style={{color:'white', background:'#3F51B5'}} >    
          <Menu style={{backgroundColor:'#3F51B5'}}>
            <div className='catergories'>
              <h3>
                Danh mục                
              </h3>
              {renderMenuItems(menuItemCategories)}
            </div >
            <Divider style={{backgroundColor:'White'}}/>
            <div className='catergories'>
              <h3>
                Quản lí                
              </h3>
              {renderMenuItems(menuItemManager)}              
            </div>
            <Divider style={{backgroundColor:'White'}}/>
            <div className='catergories'>
              <h3>
                Báo cáo                
              </h3>
              {renderMenuItems(menuItemReport)}                 
            </div>
          </Menu>         
        </Sider>
        <Content>
          <div>
            <Switch>
              {renderRoutes(appRoutes)}
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
