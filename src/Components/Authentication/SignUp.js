import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input } from 'antd';
import {Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../NavBar/Navbar';
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
const SignUp = () => {
  const [form] = Form.useForm();
  const [formData,setFormData] = useState({});
  function handleChangeForm (e){
     setFormData({...formData, [e.target.name]:[e.target.value]})
    }
     function handleSubmitForm(e){
     console.log(e);
     fetch("http://localhost:3000/signup", {
       method: "POST",
       headers: {
          "Content-Type": "application/json"
          
        },
        body: JSON.stringify(e) 
     })
     .then(res => res.json())
     .then(data => {
       console.log("submitted")
       form.resetFields();
     })

     .catch(err => console.log(err.message))
     }

  return (
    <Form
    //name="normal_login"
    //className="login-form"
    //initialValues={{
     // remember: true,
   // }}
    form={form}
    onFinish={handleSubmitForm}
    onSubmit={handleSubmitForm}
  >
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    
    <Form.Item
      name="password_confirmation"
      rules={[
        {
          required: true,
          message: 'Please Confirm Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Confirm Password"
      />
    </Form.Item>
    <Form.Item>
      <Link to="/Navbar">
      <Button type="primary" htmlType="submit" className="login-form-button"  >
        Sign in
      </Button>
      </Link>
     
    </Form.Item>
  </Form>
  )
}

export default SignUp