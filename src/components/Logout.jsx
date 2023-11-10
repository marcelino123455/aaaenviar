import React from 'react';
import { Button, Form, Input, Row,message  } from 'antd';
import axios from 'axios';
import Modal_signup from './Modal_signup';
import Footer from './footer';
function Logout() {
  const [form] = Form.useForm();

  const onFinish = async() => {
    // Accede al valor del campo 'username' usando getFieldsValue.
    localStorage.setItem('token', 'response.data.token');

  };

  return (
    <div>
      <Row justify="center">
      
      <Form
      
        form={form} // Pasa la instancia del formulario a tu Form
        name="wrap"
        onFinish={onFinish}
        labelCol={{
          flex: '110px',
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        

        style={{
          maxWidth: 600,
          border: '1px solid silver', // Agrega un borde de 1px sólido plateado
          marginTop: 140,
          marginBottom: 100,

          background: 'silver', // Agrega un fondo plateado
          padding: '20px', // Añade un relleno para mejorar el aspecto
        }}
      >
        <Row justify="center">
        <h1>Bienvenido</h1> 
        </Row>
        

        

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Log out
          </Button>
        </Form.Item>
        
        <Form.Item label=" ">
          <Modal_signup></Modal_signup>
        </Form.Item>

      </Form>
        
    </Row>
    <Footer></Footer>
    </div>
    
  );
}

export default Logout;
