import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AddTicketForm from './Components/Helpdesk/AddTicketForm';
import Category from './Components/Category/Category';
import Department from './Components/Department/Department';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import TicketList from './Components/Helpdesk/TicketList';
import CategoryList from './Components/Category/CategoryList';
import DepartmentList from './Components/Department/DepartmentList';
import DashBoard from './Components/NavBar/DashBoard';
import LandingPage from './Components/NavBar/LandingPage';
import Navbar from './Components/NavBar/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<LandingPage />}/>
      <Route path = "/SignUp" element={<SignUp/>}/>
      <Route path = "/Login" element={<Login/>}/>
     
       <Route path="/app" element={<App/>}> 
      <Route path ="/app/AddTicketForm" element={<AddTicketForm/>}/>
      <Route path ="/app/TicketList" element={<TicketList/>}/>
      <Route path ="/app/Category" element={<Category/>}/>
      <Route path = "/app/Department" element={<Department/>}/>
      
      <Route path = "/app/CategoryList" element={<CategoryList/>}/>
      <Route path = "/app/DepartmentList" element={<DepartmentList/>}/>
      <Route path = "/app/DashBoard" element={<DashBoard/>}/>
       </Route> 
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
