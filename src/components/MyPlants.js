import React from "react";
import { Link } from 'react-router-dom';
import PlantListItem from "./PlantListItem";
import '../styling/MyPlants.css'
import Header from "./Header";

const MyPlants = (props) => {
    const {plants, handleDelete} = props;
    //const userId = localStorage.getItem('user_id');
    //const plantList = plants.filter(plant=>plant.user_id===userId);

    return (
        <div>
            <Header/>
            <div className="title">
                <h1 className="title">My Plants</h1>
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
                    </tr>
                    </thead>

                    <tbody>
                        {
                            //Change to plantList.map
                            plants.map(plant=><PlantListItem key={plant.plant_id} plant={plant} handleDelete={handleDelete}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyPlants;