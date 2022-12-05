import React from 'react'
import { Form, Input, InputNumber } from 'antd';
import { useState } from 'react';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const AddTicketForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const [form] = Form.useForm();
  const [formData,setFormData] = useState({});
  const [ticket,setTicket] = useState({});
  function handleChange(e){
    setFormData({...FormData, [e.target.name]:[e.target.value]})
  }

  function handleSubmit(e){
    //e.preventDefault();
    console.log(e, " is the data")
    fetch("/tickets",
    {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "accept":"application/json"
      },
      body: JSON.stringify(e)

    })
    .then(res => res.json())
    .then (data => data
      )
      form.resetFields();
    

  }


  return (
    <div>
      <h3>Welcome to the IT Help Desk</h3>
      <h4>Submit your ticket to IT</h4>
    <Form  form={form} {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages} onSubmit={handleSubmit}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  onChange={handleChange} />
      </Form.Item>
      <Form.Item name="name" label="Name">
        <Input  onChange={handleChange}/>
      </Form.Item>
      <Form.Item name="department" label="Department">
        <Input  onChange={handleChange}/>
      </Form.Item>
      <Form.Item
        name="phone ext"
        label="Phone/Extension Number"
        rules={[
          {
            required: true,
          },
        ]}
      
      >
        <Input  onChange={handleChange}/>
      </Form.Item>
      
      <Form.Item
        name="summary"
        label="Summary"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  onChange={handleChange} />
      </Form.Item>
     
      <Form.Item name="description" label="Description">
        <Input  onChange={handleChange}/>
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input  onChange={handleChange}/>
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button type="primary" htmlType="submit" >
          Submit
        </button>
      </Form.Item>
    </Form>
    </div>
  );
}

export default AddTicketForm