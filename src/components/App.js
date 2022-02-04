import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import axiosWithAuth from '../utils/axiosWithAuth';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import UserDashboard from './UserDashboard';
import Logout from './Logout';
import EditPlant from './EditPlant';
import AddPlant from './AddPlant';

function App(props) {

  const [plants, setPlants] = useState([]);

  useEffect(()=>{

    axios.get('https://plant-water-tracker.herokuapp.com/api/plants')
      .then(res => {
        setPlants(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    
    axiosWithAuth()
        .delete(`/plants/${id}`)
            .then(resp=>{
              setPlants(plants.filter(plant=>(plant.plant_id !== (id))));
            }) 
            .catch(err=>{
                console.log(err);
            })   
  }

  return (
    <div className="App">
      <Router>

        <Switch>
          
          <PrivateRoute path='/my-plants/edit/:id' component={EditPlant} setPlants={setPlants} plants={plants} />

          <PrivateRoute path='/my-plants/add' component={AddPlant} setPlants={setPlants} plants={plants} />
            
          <PrivateRoute path='/my-plants' component={UserDashboard} plants={plants} handleDelete={handleDelete} />
            
          <PrivateRoute path='/profile' component={Profile} />

          <PrivateRoute path='/logout' component={Logout} />

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/register'>
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
