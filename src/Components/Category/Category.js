import React from 'react'
import { Button, Form,Input } from "antd";

const Category = () => {

  return (
    <div>    
    <Form form={form} onFinish={handleSubmitForm} onSubmit={handleSubmitForm}> 
    <Form.Item name='category'>
       <input></input>
    </Form.Item>
    <Form.Item>
       <Button type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
 </Form>
 </div>
  )
}

export default Category