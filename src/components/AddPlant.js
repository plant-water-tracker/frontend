import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}

export default AddPlant;