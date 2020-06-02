/* eslint-disable react/prop-types */
import React from 'react';
import {
  Divider, Form
} from 'antd';
import styles from './index.module.css';
import Question from '../question';


function Subgroup({ subgroup }) {
  return (
    <div className={styles.subgroups}>
      <Divider orientation="left">{subgroup.title}</Divider>
      {
        subgroup.questions.map(question => (
          <Question question={question} />
        ))
      }
    </div>
  );
}

export default Subgroup;
