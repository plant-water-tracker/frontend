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

    useEffect(()=>{
        axios.get(`https://plant-water-tracker.herokuapp.com/api/plants/${id}`)
			.then(resp=>{
				setPlant(resp.data[0]);
			})
			.catch(err=>{
				console.log(err);
			})
    }, []);

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://plant-water-tracker.herokuapp.com/api/plants/${id}`, plant)
            .then(res=>{
                props.setPlants(props.plants.map(plant=> {
                    if(plant.plant_id === id){
                        return res.data[0];
                    }
                    return plant;
                }))
                push(`/my-plants`);
			})
			.catch(err=>{
				console.log(err);
			})
	}

    return(
        <div>
            <Header/>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <h1 className='title'>Editing {plant.nickname}</h1>
                    </div>
                    <div>
                        <div>
                            <label className="label" >Nickname</label>
                            <input value={plant.nickname} onChange={handleChange} name="nickname" type="text" className="input"/>
                        </div>
                        <div>
                            <label className="label" >Species</label>
                            <input value={plant.species} onChange={handleChange} name="species" type="text" className="input"/>
                        </div>
                        <div>
                            <label className="label" >Watering Frequency</label>
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

export default EditPlant;