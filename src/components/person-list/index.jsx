import React, { useEffect, useState } from 'react';
import {
  Descriptions, Rate, Typography, Table
} from 'antd';
import styles from './index.module.css';


const { Text } = Typography;

function halfRound(num) {
  return Math.floor(num / 0.5) * 0.5;
}


const columns = [
  {
    title: 'Имя',
    dataIndex: 'name'
  },
  {
    title: 'Фамилия',
    dataIndex: 'surname'
  },
  {
    title: 'Позиция',
    dataIndex: 'position'
  },
  {
    title: 'Рейтинг',
    dataIndex: 'rating',
    sorter: {
      compare: (a, b) => a.rating - b.rating,
      multiple: 1
    },
    render: rating => <Text type="secondary">{halfRound(rating)}</Text>
  }
];

function PersonList() {
  const [users, setUsers] = useState(
    []
  );
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className={styles.personList}>
      <Table columns={columns} dataSource={users} pagination={false} />
    </div>
  );
}
export default PersonList;
