import React from 'react';
import { Link } from 'react-router-dom';

const PlantListItem = (props)=> {
  const { plant_id, nickname, species, h2oFrequency } = props.plant;

  return(<tr key={plant_id}>
      <td>{nickname}</td>
      <td>{species}</td>
      <td>{h2oFrequency}</td>
      <td>
        <Link to={`/user-dash/edit/${plant_id}`} className='button secondary'>
          Edit
        </Link>
      </td>
  </tr>);
}

export default PlantListItem;