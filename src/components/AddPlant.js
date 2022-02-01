import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from './Header';

import axios from 'axios';

const AddPlant = (props) => {
    const {push} = useHistory();
    const {id} = useParams();

    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2oFrequency: ''
    });

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //temp push
        push(`/user-dash`);

        // axios.post(`http://localhost:9000/api/plants`, plant)
        //     .then(res=>{
        //         props.setPlants(res.data);
        //         push(`/user-dash`);
		// 	})
		// 	.catch(err=>{
		// 		console.log(err);
		// 	})
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
                        <input value={plant.h2oFrequency} onChange={handleChange} name="h2oFrequency" type="text" className="form-control"/>
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