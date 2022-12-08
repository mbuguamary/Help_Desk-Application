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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<App />}>
      <Route path ="/AddTicketForm" element={<AddTicketForm/>}/>
      <Route path ="/TicketList" element={<TicketList/>}/>
      <Route path ="/Category" element={<Category/>}/>
      <Route path = "/Department" element={<Department/>}/>
      <Route path = "/Login" element={<Login/>}/>
      <Route path = "/SignUp" element={<SignUp/>}/>
      <Route path = "/CategoryList" element={<CategoryList/>}/>
      <Route path = "/DepartmentList" element={<DepartmentList/>}/>
      </Route>
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
