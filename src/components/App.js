import React from 'react';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import UserDashboard from './UserDashboard';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Logout from './Logout';
import PlantDashboard from './PlantDashboard';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path='/user-dash/edit/:id'>
            <PlantDashboard/>
          </Route>
          <Route path='/user-dash'>
            <Header/>
            <UserDashboard/>
          </Route>
          <Route path='/logout'>
            <Logout/>
          </Route>
          <Route path='/login'>
            <Header/>
            <Login/>
          </Route>
          <Route path='/register'>
            <Header/>
            <Register/>
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          
        </Switch>

      </Router>
    </div>
  );
}

export default App;
