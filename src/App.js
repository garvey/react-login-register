import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/auth/Login';
import Forgot from './components/auth/Forgot';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
