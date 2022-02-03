import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from './Header';

import axios from 'axios';

const AddPlant = (props) => {
    const {push} = useHistory();
    const {id} = useParams();

    const [plant, setPlant] = useState({
        plant_id: Math.floor(Date.now()/1000),
        nickname: "",
        species: "",
        h2oFrequency: 0,
        user_id: 1
    });

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`https://plant-water-tracker.herokuapp.com/api/plants`, plant)
            .then(res=>{
                props.setPlants([...props.plants, res.data]);
                push(`/user-dash`);
			})
			.catch(err=>{
				console.log(err.response.data );
			})
    }

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Add a Plant</h3>
                </div>
                <div>
                    <div className="form-group">
                        <label>Nickname</label>
                        <input value={plant.nickname} onChange={handleChange} name="nickname" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Species</label>
                        <input value={plant.species} onChange={handleChange} name="species" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Watering Frequency</label>
                        <input value={plant.h2oFrequency} onChange={handleChange} name="h2oFrequency" type="number" className="form-control"/>
                    </div>
                </div>
                <div>
                    <button className='button primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlant;