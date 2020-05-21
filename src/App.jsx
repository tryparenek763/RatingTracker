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

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Switch>
          <Route path="/auth" component={AuthForm} />
          <Route path="/profile" component={Person} />
          <Route path="/form" component={ApplicationForm} />
          <Redirect from="/" to="/auth" />
          {/* <AuthForm></AuthForm>
        <ApplicationForm> </ApplicationForm>
        <Person></Person> */}
        </Switch>
      </Router>
    </div>

  );
}

export default App;
