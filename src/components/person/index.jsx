import React, { useEffect, useState } from 'react';
import { Descriptions, Rate, Typography } from 'antd';
import styles from './index.module.css';


const { Text } = Typography;

function halfRound(num) {
  return Math.floor(num / 0.5) * 0.5;
}
function Person() {
  const [data, setData] = useState(
    {
      name: 'Нет данных',
      surname: 'Нет данных',
      position: {
        name: 'Нет данных'
      },
      rating: 0
    }
  );
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('/api/users/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <Descriptions title="Профиль" className={styles.person} layout="vertical">
        <Descriptions.Item label="Имя">
          <Text type="secondary">{data.name}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Фамилия">
          <Text type="secondary">{data.surname}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Позиция">
          <Text type="secondary">{data.position.name}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Tип">
          <Text type="secondary">{data.type}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Уровень">
          <Text type="secondary">{data.level}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Рейтинг">
          <Rate disabled allowHalf defaultValue={halfRound(data.rating)} count={10} className={styles.rating} key={data.rating} />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
export default Person;
