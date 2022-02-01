import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const PlantListItem = (props)=> {
  const {push} = useHistory();
  const { plant_id, nickname, species, h2oFrequency } = props.plant;

  const handleClick = () => {
    push(`/user-dash/edit/${plant_id}`);
  }

  return(<tr key={plant_id}>
      <td>{nickname}</td>
      <td>{species}</td>
      <td>{h2oFrequency}</td>
      <td>
        <button className='button secondary'>
          Edit
        </button>
      </td>
  </tr>);
}

export default PlantListItem;