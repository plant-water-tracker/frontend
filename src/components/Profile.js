import React, {useState, useEffect} from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import Header from "./Header";

const Profile = (props) => {
    const {push} = useHistory();
    //const {id} = useParams();
    const userId = localStorage.getItem("user_id")

    const [user, setUser] = useState({
        user_id: userId,
        username: '',
        phoneNumber: '',
        password: '',
        oldPassword: ''
    })

    const [disabledUser, setDisabledUser] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [passChange, setPassChange] = useState(false);

    useEffect(()=>{
        
        axios.get(`https://plant-water-tracker.herokuapp.com/api/users/${userId}`)
			.then(resp=>{
                setUser({
                    ...user,
                    username: resp.data[0].username,
                    phoneNumber: resp.data[0].phoneNumber
                })
			})
			.catch(err=>{
				console.log(err.response.data);
			})
    }, []);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://plant-water-tracker.herokuapp.com/api/auth/update`, user)
            .then(res=>{
                push(`/my-plants`);
			})
			.catch(err=>{
				console.log(err.response.data);
			})
	}

    const handleEditUser = (e) => {
        e.preventDefault();
        setDisabledUser(!disabledUser);
    }
    const handleEditPhone = (e) => {
        e.preventDefault();
        setDisabled(!disabled);
    }
    const handleEditPass = (e) => {
        e.preventDefault();
        setPassChange(!passChange);
    }
    
    return (
        <div>
            <Header />
            <div className="container">
                <form className="form">
                    <div>
                        <h1 className='title'>My Profile</h1>
                    </div>
                    <div>
                        <div>
                            <label className="label" >Username</label>
                            <input value={user.username} onChange={handleChange} name="username" type="text" className="input" disabled={disabledUser}/>
                            <button name="username" onClick={handleEditUser}>Edit</button>
                        </div>
                        <div>
                            <label className="label" >Phone Number</label>
                            <input value={user.phoneNumber} onChange={handleChange} name="phoneNumber" type="text" className="input" disabled={disabled}/>
                            <button name="phone" onClick={handleEditPhone}>Edit</button>
                        </div>
                        <div>
                            <button onClick={handleEditPass} className='button center primary max'>Change Password?</button>
                        </div>
                        {passChange && <div>
                            <label className="label" >Enter Old Password</label>
                            <input value={user.oldPassword} onChange={handleChange} name="oldPassword" type="password" className="input"/>
                            <label className="label" >Enter New Password</label>
                            <input value={user.password} onChange={handleChange} name="password" type="password" className="input"/>
                        </div>}
                    </div>
                    <div>
                        <button onClick={handleSubmit} className='button center primary max'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile;