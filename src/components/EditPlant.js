import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from './Header';

import axios from 'axios';

const EditPlant = (props) => {
    const {push} = useHistory();
    const {id} = useParams();

    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2oFrequency: ''
    });

    // useEffect(()=>{
    //     axios.get(`https://plant-water-tracker.herokuapp.com/api/plants/${id}`)
	// 		.then(resp=>{
	// 			setPlant(resp.data);
	// 		})
	// 		.catch(err=>{
	// 			console.log(err);
	// 		})
    // }, []);

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.put(`https://plant-water-tracker.herokuapp.com/api/plants/${id}`, plant)
        //     .then(res=>{
        //         props.setPlants(res.data);
        //         push(`/user-dash`);
		// 	})
		// 	.catch(err=>{
		// 		console.log(err);
		// 	})
	}

    return(
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Editing {plant.nickname}</h3>
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

export default EditPlant;