import React, {useState, useEffect} from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import Header from "./Header";

const Profile = (props) => {
    const {push} = useHistory();
    //const {id} = useParams();
    const userId = localStorage.getItem("user_id")

    const [user, setUser] = useState({
        username: '',
        phoneNumber: '',
        password: ''
    })

    const [disabled, setDisabled] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(()=>{
        console.log('ID for the user is:', userId);
        // axios.get(`https://plant-water-tracker.herokuapp.com/api/users/${id}`)
		// 	.then(resp=>{
		// 		console.log(resp);
		// 	})
		// 	.catch(err=>{
		// 		console.log(err.response.data);
		// 	})
    }, []);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id] : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://plant-water-tracker.herokuapp.com/api/users/${userId}`, user)
            .then(res=>{
                push(`/my-plants`);
			})
			.catch(err=>{
				console.log(err);
			})
	}

    const handleEditPhone = (e) => {
        setDisabled(!disabled);
    }
    const handleEditPass = (e) => {
        setIsDisabled(!isDisabled);
    }
    
    return (
        <div>
            <Header />
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <h1 className='title'>My Profile</h1>
                    </div>
                    <div>
                        <div>
                            <label className="label" >Phone Number</label>
                            <input value={user.phoneNumber} onChange={handleChange} name="phoneNumber" type="text" className="input" disabled={disabled}/>
                            <button name="phone" onClick={handleEditPhone}>Edit</button>
                        </div>
                        <div>
                            <label className="label" >Password</label>
                            <input value={user.password} onChange={handleChange} name="password" type="password" className="input" disabled={isDisabled}/>
                            <button name="pass" onClick={handleEditPass}>Edit</button>
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

export default Profile;