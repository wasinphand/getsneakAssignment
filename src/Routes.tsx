import React from 'react';
import { Switch, Route }  from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import Detail from './Components/detail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/"/>
      
      <Route exact component={Detail} path="/:id" />
    </Switch>
  );
}

export default Routes;
