import React from 'react';
import { Link } from 'react-router-dom';

const PlantListItem = (props)=> {
  const { id, nickname, species, h2oFrequency } = props.plant;

  return(<tr key={id}>
      <td>{nickname}</td>
      <td>{species}</td>
      <td>{h2oFrequency}</td>
      <td>
        <Link to={`/user-dash/edit/${id}`} >
          <button>Edit</button>
        </Link>
      </td>
      <td>
        <Link to='/user-dash'>
            <button>Delete</button>
        </Link>
      </td>
  </tr>);
}

export default PlantListItem;