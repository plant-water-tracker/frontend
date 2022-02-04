import React, {useState, useEffect} from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import Header from "./Header";

const Profile = (props) => {
    const {push} = useHistory();
    const {id} = useParams();

    const [user, setUser] = useState({
        phoneNumber: '',
        password: ''
    })

    useEffect(()=>{
        axios.get(`https://https://plant-water-tracker.herokuapp.com/api/users/${id}`)
			.then(resp=>{
				console.log(resp);
			})
			.catch(err=>{
				console.log(err);
			})
    }, []);

    
    return (
        <div>
            <Header />
            <h1>My Profile</h1>
        </div>
    )
}

export default Profile;