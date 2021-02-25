import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '@components/Nav';
import TaskOne from '@components/taskone/TaskOne';
import TaskTwo from '@components/tasktwo/TaskTwo';
import TaskTwoExample from '@components/tasktwo/TaskTwo.Example';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route
        exact
        path="/task-two"
        component={TaskTwo}
      />
      <Route
        path="/task-two-example"
        component={TaskTwoExample}
      />
      <Route
        path="/"
        component={TaskOne}
      />
    </Switch>
  </Router>
);

export default App;
