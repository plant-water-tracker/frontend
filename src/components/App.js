import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import plantsData from '../mocks/data';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import UserDashboard from './UserDashboard';
import Logout from './Logout';
import EditPlant from './EditPlant';
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

  const handleDelete = (id) => {
    // axiosWithAuth()
    //     .delete(`/plants/${id}`)
    //         .then(resp=>{
    //             setPlants(resp.data);
    //         }) 
    //         .catch(err=>{
    //             console.log(err);
    //         })   
  }

  return (
    <div className="App">
      <Router>

        <Switch>
          
          <PrivateRoute path='/user-dash/edit/:id' component={EditPlant} setPlants={setPlants} />

          <PrivateRoute path='/user-dash/add' component={AddPlant} setPlants={setPlants} />
            
          <PrivateRoute path='/user-dash' component={UserDashboard} plants={plants} handleDelete={handleDelete} />
            
          <PrivateRoute path='/logout' component={Logout} />

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
