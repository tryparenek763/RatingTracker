/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form, Input, Typography, Rate
} from 'antd';
import styles from './index.module.css';

const { Title, Text } = Typography;
const { TextArea } = Input;
function Question({ question }) {
  return (
    <div className={styles.question}>
      <Title level={4}>{question.title}</Title>
      <Text type="secondary">{question.description}</Text>
      <Form.Item>
        <Rate className={styles.input} count={10} tooltips={Array.from(new Array(10)).map((i, index) => index + 1)} />
        <span className="ant-rate-text">10</span>
      </Form.Item>

      <Form.Item>
        <TextArea rows={4} placeholder="Комментарий" />
      </Form.Item>
    </div>
  );
}

export default Question;
