import React from "react";
import { Link } from 'react-router-dom';
import PlantListItem from "./PlantListItem";
import './MyPlants.css'
import Header from "./Header";

const MyPlants = (props) => {
    const {plants, handleDelete} = props;

    return (
        <div>
            <Header/>
            <div className="title">
                <h2 className="subtitle">My Plants</h2>
            </div>
            <Link to='/my-plants/add'><button className="button primary left-space">Add a New Plant</button></Link>
            
            <div className="flex">
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
        </div>
    )
}

export default MyPlants;