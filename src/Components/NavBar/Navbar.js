import { LaptopOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import React from 'react';
import './Navbar.css'
import "antd/dist/antd.min.css"
import { Link, NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;


const Navbar = () => {

  return(
  <div>
  <Layout>
    <Header className="header" >
      <div className="logo"  />
      <Menu theme="dark" mode="horizontal" />
      <NavLink    style={{
          padding: '0 24px 24px', float: 'Left'
        }} >Metro Help Desk</NavLink>
      <NavLink to="/app/DashBoard" style={{
          padding: '0 24px 24px',
        }}>Dashboard</NavLink>
      
      <NavLink to="/" style={{
          padding: '0 24px 24px', float: 'right'
        }}>Log Out</NavLink>
    </Header>
    <Layout >
      <Sider width={180}  className="site-layout-background">
        <Menu 
          mode="inline"
          //defaultSelectedKeys={['1']}
          //defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
        
          
        >
          
          <Menu style={{ marginTop: '20px'}}>Settings
         
          <Menu.Item> 
           <Link to="/app/Category"> Register Category </Link>
           </Menu.Item>
           <Menu.Item>
           <Link to="/app/Department"> Register Department</Link>
          </Menu.Item>
          </Menu>
          <Menu>Tickets
          <Menu.Item> 
           <Link to="/app/AddTicketForm"> Raise Ticket </Link>
           </Menu.Item>
           <Menu.Item> 
           <Link to="/app/TicketList">View Raised Tickets </Link>
           </Menu.Item>
          </Menu>
          <Menu>Reports
          <Menu.Item> 
          <Link to="/app/DepartmentList">Department list </Link>
           </Menu.Item>
           <Menu.Item> 
           <Link to="/app/CategoryList">Category List </Link>
           </Menu.Item>
           <Menu.Item> 
           <Link to="/app/TicketList">Resolved Tickets </Link>
           </Menu.Item>
            </Menu> 
          </Menu>
          

          
            
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
         
        }}
      >
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
           
          }}
        >
          
          <Outlet />

        </Content>
      </Layout>
    </Layout>
  </Layout>
  </div>
  )
};

export default Navbar;
