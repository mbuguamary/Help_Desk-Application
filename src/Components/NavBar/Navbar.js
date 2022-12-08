import { LaptopOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import React from 'react';
import './Navbar.css'
import "antd/dist/antd.min.css"
import { Link, NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;


const Navbar = () => (
  <Layout>
    <Header className="header" >
      <div className="logo"  />
      <Menu theme="dark" mode="horizontal" />
      <NavLink    style={{
          padding: '0 24px 24px', float: 'Left'
        }} >Metro Help Desk</NavLink>
      <NavLink to="/AddTicketForm" style={{
          padding: '0 24px 24px',
        }}>Home</NavLink>
      
      
      <NavLink to="/Login" style={{
          padding: '0 24px 24px', float: 'right'
        }}>Login</NavLink>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu 
          mode="inline"
          //defaultSelectedKeys={['1']}
          //defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
        
          
        >
          
          <Menu style={{ padding: '0'}}>Settings
         
          <Menu.Item> 
           <Link to="/Category"> Register Category </Link>
           </Menu.Item>
           <Menu.Item>
           <Link to="/Department"> Register Department</Link>
          </Menu.Item>
          </Menu>
          <Menu>Tickets
          <Menu.Item> 
           <Link to="/AddTicketForm"> Raise Ticket </Link>
           </Menu.Item>
           <Menu.Item> 
           <Link to="/TicketList">View Raised Tickets </Link>
           </Menu.Item>
          </Menu>
          <Menu>Reports
          <Menu.Item> 
          <Link to="/DepartmentList">Department list </Link>
           </Menu.Item>
           <Menu.Item> 
           <Link to="/CategoryList">Category List </Link>
           </Menu.Item>
           <Menu.Item> 
           <Link to="/TicketList">Resolved Tickets </Link>
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
          
          <Outlet/>

        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Navbar;
