import React, {useState} from "react";
import axios from "axios";
import Header from "./Header";

const Signup = (props) => {
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

    const handleSignup = (e) => {
        e.preventDefault();
        //Axios call will go here
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
                        <label className="label" htmlFor='phone'>Phone Number</label>
                        <input
                            className="input"
                            type='text'
                            id="phone"
                            value={credentials.phone}
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
                </form>
            </div>
        </div>
    )
}

export default Signup;