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

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('/template', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(setData);
  }, []);
  const handleSubmit = (...args) => {
    console.log(...args);
  };
  return (
    <Form className={styles.root} onFinish={handleSubmit}>
      <Form.Item>
        <Select
          showSearch
          placeholder="Выберите сотрудника"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
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
