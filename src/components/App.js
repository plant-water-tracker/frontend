import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';
import plantsData from '../mocks/data';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import UserDashboard from './UserDashboard';
import Logout from './Logout';
import EditPlant from './EditPlant';
import PlantDashboard from './PlantDashboard';
import AddPlant from './AddPlant';

function App(props) {

  const [plants, setPlants] = useState([]);

  useEffect(()=>{

    //temp set data
    setPlants(plantsData);

    // axios.get('http://localhost:9000/api/plants')
    //   .then(res => {
    //     setPlants(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="App">
      <Router>

        <Switch>
          
          <Route path='/user-dash/edit/:id'>
            <EditPlant setPlants={setPlants}/>
          </Route>

          <Route path='/user-dash/add'>
            <Header/>
            <AddPlant setPlants={setPlants}/>
          </Route>

          <Route path='/user-dash'>
            <Header/>
            <UserDashboard plants={plants}/>
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
