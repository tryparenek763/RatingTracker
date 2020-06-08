/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Form, Select, Button
} from 'antd';
import styles from './index.module.css';
import Group from '../group';

const { Option } = Select;
function ApplicationForm() {
  const [data, setData] = useState(
    {
      groups: [{
        title: 'Нет данных',
        subgroups: [{
          title: 'Нет данных',
          questions: [{
            title: 'Нет данных',
            description: 'Нет данных'
          }]
        }]
      }
      ]
    }
  );
  const [users, setUsers] = useState(
    []
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(setUsers);
    fetch('/api/template', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(setData);
  }, []);
  const handleSubmit = (data) => {
    const token = localStorage.getItem('token');

    fetch('/api/forms', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    });
  };

  return (
    <Form className={styles.root} onFinish={handleSubmit}>
      <Form.Item
        name="userId"
      >
        <Select
          showSearch
          placeholder="Выберите сотрудника"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {users.map(user => (<Option value={user.id}>{`${user.name} ${user.surname} (${user.position.name})`}</Option>))}
        </Select>
      </Form.Item>
      {
        data.groups.map(group => (
          <Group group={group} />
        ))
      }
      <Form.Item className={styles.input}>
        <Button htmlType="submit" type="primary">Отправить</Button>
      </Form.Item>

    </Form>
  );
}

export default ApplicationForm;
