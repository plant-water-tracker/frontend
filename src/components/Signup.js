import React, {useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "./Header";

const Signup = (props) => {
    const {push} = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        phoneNumber: '',
        password: ''
    });

    const [success, setSuccess] = useState(false);

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id] : e.target.value
        });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        
        axios.post('https://plant-water-tracker.herokuapp.com/api/auth/register', credentials)
            .then(resp=>{
                    setSuccess(!success);
                    const timer = setTimeout(() => {
                        console.log('This will run after 3 second!')
                        setSuccess(!success)
                        push('/login');
                    }, 3000);
                // localStorage.setItem('token', resp.data.token);
                // localStorage.setItem('username', resp.data.username)
            })
            .catch(err=>{
                console.log(err.response.data);
                //setError(err.response.data.error)
            })
    }

    return (
        <div>
            <Header/>
            <div className="title">
                <h1>Sign Up</h1>
            </div>
            <div className="container">
                <form className="form" onSubmit={handleSignup}>
                    <div>
                        <label className="label" htmlFor='username'>Username</label>
                        <input
                            className="input"
                            type='text'
                            id="username"
                            value={credentials.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor='phoneNumber'>Phone Number</label>
                        <input
                            className="input"
                            type='text'
                            id="phoneNumber"
                            value={credentials.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor='password'>Password</label>
                        <input
                            className="input"
                            type='password'
                            id="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className='button center primary max'>Sign Up</button>
                    {/* {error && <p id='error'>{error}</p>} */}
                    {success && <p>You have successfully registered! Redirecting to Login...</p>}
                </form>
            </div>
        </div>
    )
}

export default Signup;