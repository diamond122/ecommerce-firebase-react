import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'

const PaintingsPage = () => (
  <div>
    <h1>Paintings Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/paintings' component={ PaintingsPage } />
      </Switch>
    </div>
  );
}

export default App;
