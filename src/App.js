import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home';
const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } {...props}/>
      <Route exact path="/home" component={ HomePage } {...props}/>
    </Switch>
  )
}


export default App;