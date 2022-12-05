import React from 'react'
import { LaptopOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import './Navbar.css'
import "antd/dist/antd.min.css"
import { Link, NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const Navbar = () => {
  <Layout>
  <Header className="header" >
    <div className="logo"  />
    <Menu theme="dark" mode="horizontal" />
    {/* <NavLink    style={{
        padding: '0 24px 24px', float: 'Left'
      }} >Sacco Web App</NavLink>
    <NavLink to="/AddLoanForm" style={{
        padding: '0 24px 24px',
      }}>Home</NavLink>
    <NavLink to="/Notes" style={{
        padding: '0 24px 24px',
      }}>Notes</NavLink>
    <NavLink to="/Questions" style={{
        padding: '0 24px 24px',
      }}>Questioners</NavLink>
    <NavLink to="/Login" style={{
        padding: '0 24px 24px', float: 'right'
      }}>Login</NavLink> */}
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

       
        <Menu.Item>
         <Link > Register Loan </Link>
         </Menu.Item>
         <Menu.Item>
         <Link > Applied Loan List</Link>
        </Menu.Item>
         

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
  
}

export default Navbar