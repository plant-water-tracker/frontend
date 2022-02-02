import React from 'react';
import { useHistory } from 'react-router-dom';

const PlantListItem = (props)=> {
  const {push} = useHistory();
  const { plant_id, nickname, species, h2oFrequency } = props.plant;
  const {handleDelete} = props;

  const handleClick = () => {
    push(`/user-dash/edit/${plant_id}`);
  }

  return(
  <tr key={plant_id}>
      <td>{nickname}</td>
      <td>{species}</td>
      <td>{h2oFrequency} Times a Week</td>
      <td>
        <button onClick={handleClick} className='button secondary'>
          Edit
        </button>
      </td>
      <td>
        {/* delete passed through App->UserDashboard */}
        <button onClick={handleDelete(plant_id)} className='button warning'>
          Delete
        </button>
      </td>
  </tr>);
}

export default PlantListItem;