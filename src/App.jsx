import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import {
  ApplicationForm, AuthForm, Person
} from './components';
import styles from './app.module.css';
import PersonList from './components/person-list';

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Switch>
          <Route path="/auth" component={AuthForm} />
          <Route path="/profile" component={Person} />
          <Route path="/profile-list" component={PersonList} />
          <Route path="/form" component={ApplicationForm} />
          <Redirect from="/" to="/auth" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
