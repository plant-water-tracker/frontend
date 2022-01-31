import React from "react";
import plants from "../mocks/data";
import PlantListItem from "./PlantListItem";
import './UserDashboard.css'

const UserDashboard = (props) => {
    return (
        <div>
            <button>Add a New Plant</button>
            <h3>List of your plants</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Nickname</th>
                    <th>Species</th>
                    <th>Watering Frequency</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        //plants data passed in through props
                        plants.map(plant=><PlantListItem key={plant.id} plant={plant}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserDashboard;