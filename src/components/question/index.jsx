/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form, Input, Typography, Rate
} from 'antd';
import styles from './index.module.css';

const { Title, Text } = Typography;
const { TextArea } = Input;
const Question = ({ question }) => (
  <div className={styles.question}>
    <Title level={4}>{question.title}</Title>
    <Text type="secondary">{question.description}</Text>
    <Form.Item
      name={['questionsIds', question.id]}
    >
      <Rate className={styles.input} count={10} tooltips={Array.from(new Array(10)).map((i, index) => index + 1)} />
    </Form.Item>

    <Form.Item>
      <TextArea rows={4} placeholder="Комментарий" />
    </Form.Item>
  </div>
);

export default Question;
