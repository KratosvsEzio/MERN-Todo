import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App min-h-screen">
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact={true} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
