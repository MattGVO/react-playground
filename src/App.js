import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Parent from './Components/MobX/Parent';

function App() {
  return (
    <div className="App">
       <Switch>
         <Route exact path="/" component={Nav}/>
         <Route path="/mobx" component = {Parent}/>
       </Switch>
    </div>
  );
}

export default App;
