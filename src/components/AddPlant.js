import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from './Header';

import axios from 'axios';

const AddPlant = (props) => {
    const {push} = useHistory();
    const userId = localStorage.getItem("user_id");

    const [plant, setPlant] = useState({
        plant_id: Math.floor(Date.now()/1000),
        nickname: "",
        species: "",
        h2oFrequency: 0,
        // this will change to userId
        user_id: userId
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
                console.log("my plant", plant)
                push(`/my-plants`);
			})
			.catch(err=>{
				console.log(err.response.data);
			})
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <h1 className='title'>Add a Plant</h1>
                    </div>
                    <div>
                        <div>
                            <label className="label">Nickname</label>
                            <input value={plant.nickname} onChange={handleChange} name="nickname" type="text" className="input"/>
                        </div>
                        <div>
                            <label className="label">Species</label>
                            <input value={plant.species} onChange={handleChange} name="species" type="text" className="input"/>
                        </div>
                        <div>
                            <label className="label">Watering Frequency <span id="smaller">(times per week)</span></label>
                            <input value={plant.h2oFrequency < 0 ? 0 : plant.h2oFrequency} onChange={handleChange} name="h2oFrequency" type="number" className="input"/>
                        </div>
                    </div>
                    <div>
                        <button className='button center primary max'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPlant;