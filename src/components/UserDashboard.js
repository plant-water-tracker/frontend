import React from "react";
import { Link } from 'react-router-dom';
import PlantListItem from "./PlantListItem";
import './UserDashboard.css'
import Header from "./Header";

const UserDashboard = (props) => {
    const {plants, handleDelete} = props;

    return (
        <div>
            <Header/>
            <Link to='/user-dash/add'><button className="button primary">Add a New Plant</button></Link>
            <h3>List of your plants</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Nickname</th>
                    <th>Species</th>
                    <th>Watering Frequency</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        //plants data passed in through props
                        plants.map(plant=><PlantListItem key={plant.plant_id} plant={plant} handleDelete={handleDelete}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserDashboard;