import React from 'react'
import { Button, Form,Input } from "antd";
import { useState } from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const Department = () => {
  const [form] = Form.useForm();
  const [formData,setFormData] = useState({});
  function handleChangeForm (e){
     setFormData({...formData, [e.target.name]:[e.target.value]})
    }
     function handleSubmitForm(e){
    //  e.preventDefault();
    
     console.log(e);
     fetch("http://localhost:3000/departments", {
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
   <div>    
   <Form form={form} {...layout} name="nest-messages" onFinish={handleSubmitForm} onSubmit={handleSubmitForm}> 
   <Form.Item name='department_name' label='department'>
      <input placeholder= "department"/>
   </Form.Item>
   <Form.Item>
      <Button type="primary" htmlType="submit">Submit</Button>
   </Form.Item>
</Form>
</div>
 )
  
}

export default Department