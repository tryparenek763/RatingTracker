import React from 'react';
import 'antd/dist/antd.css';
import {
  Person, ApplicationForm
} from './components'
import styles from "./app.module.css";
function App() {
  return (
    <div className={styles.root}>
      <Person></Person>
      <ApplicationForm></ApplicationForm>
    </div>
  );
}

export default App;
