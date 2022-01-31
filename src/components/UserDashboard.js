import React from "react";

const UserDashboard = (props) => {
    return (
        <div>
            <button>Add a New Plant</button>
            <table>
                <thead>
                <tr>
                    <th>Nickname</th>
                    <th>Species</th>
                    <th>Watering Frequency</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    <h3>List of plants will go here</h3>
                    {
                        //plants data passed in through props
                        // plantsData.map(plant=><PlantListItem key={plant.id} plant={plant}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserDashboard;