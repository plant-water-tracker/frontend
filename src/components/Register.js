import React, {useState} from "react";
import axios from "axios";
import Header from "./Header";

const Register = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        phone: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id] : e.target.value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        //Axios call will go here
    }

    return (
        <div>
            <Header/>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='phone'>Phone Number</label>
                    <input
                        type='text'
                        id="phone"
                        value={credentials.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <button className='submit'>Sign Up</button>
                {/* {error && <p id='error'>{error}</p>} */}
            </form>
        </div>
    )
}

export default Register;