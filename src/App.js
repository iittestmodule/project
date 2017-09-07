import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home';
import TestOptions from './components/TestOptions';
import JEEMain from './components/test/JEEMain';
import JEEAdvanced from './components/test/JEEAdvanced';
import NEET from './components/test/NEET';
import BITSAT from './components/test/BITSAT';
import VITEEE from './components/test/VITEEE';
import KVPY from './components/test/KVPY';

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } { ...props }/>
      <Route exact path="/home" component={ HomePage } { ...props }/>
      <Route exact path="/test" component={ TestOptions } { ...props }/>
      <Route exact path="/test/jee-main" component={ JEEMain } { ...props }/>
      <Route exact path="/test/jee-advanced" component={ JEEAdvanced } { ...props }/>
      <Route exact path="/test/neet" component={ NEET } { ...props }/>
      <Route exact path="/test/bitsat" component={ BITSAT } { ...props }/>
      <Route exact path="/test/viteee" component={ VITEEE } { ...props }/>
      <Route exact path="/test/kvpy" component={ KVPY } { ...props }/>
    </Switch>
  )
}


export default App;