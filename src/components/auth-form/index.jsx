/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './index.module.css';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 }
};
function AuthForm({ history }) {
  const handleRedirect = () => history.push('/profile');
  const handleSaveToken = (json) => {
    localStorage.setItem('token', json.access_token);
  };
  const handleSubmit = ({ username, password }) => {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(handleSaveToken)
      .then(handleRedirect);
  };
  return (
    <Form className={styles.auth} onFinish={handleSubmit} {...layout}>
      <Form.Item
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AuthForm;
