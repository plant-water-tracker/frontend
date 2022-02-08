import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import axiosWithAuth from '../utils/axiosWithAuth';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import MyPlants from './MyPlants';
import Logout from './Logout';
import EditPlant from './EditPlant';
import AddPlant from './AddPlant';

function App(props) {
  
  const [plants, setPlants] = useState([]);
  const userId = localStorage.getItem("user_id")

  useEffect(()=>{
    
    axios.get(`https://plant-water-tracker.herokuapp.com/api/users/${userId}/plants`)
      .then(res => {
        setPlants(res.data.userPlants);
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

  const handleEdit = (id, plant) => {
    axiosWithAuth()
      .put(`/plants/${id}`, plant)
        .then((res) => {
          setPlants(plants.map(plant=> {
            if(plant.plant_id === id){
                return res.data[0];
            }
            return plant;
          }))
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    <div className="App">
      <Router>

        <Switch>
          
          <PrivateRoute exact path='/my-plants/edit/:id' component={EditPlant} handleEdit={handleEdit} />

          <PrivateRoute exact path='/my-plants/add' component={AddPlant} setPlants={setPlants} plants={plants} />
            
          <PrivateRoute exact path='/my-plants' component={MyPlants} plants={plants} handleDelete={handleDelete} />
            
          <PrivateRoute exact path={`/profile`} component={Profile} />
          
          <PrivateRoute path='/logout' component={Logout} />

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/signup'>
            <Signup/>
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
