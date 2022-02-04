import React, {useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "./Header";
import './Login.css';

const Login = (props) => {
    const {push} = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id] : e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        //temp login
        const tempToken = '12345';
        localStorage.setItem('token', tempToken);
        push('/my-plants');

        // axios.post('https://plant-water-tracker.herokuapp.com/api/users', credentials)
        //     .then(resp=>{
        //         console.log(resp);
        //         // localStorage.setItem('token', resp.data.token);
        //         // localStorage.setItem('username', resp.data.username)
        //         // push('/my-plants');
        //     })
        //     .catch(err=>{
        //         console.log(err.response.data);
        //         //setError(err.response.data.error)
        //     })
    }

    return (
        <div>
            <Header/>
            <div className="title">
                <h1>Log in</h1>
            </div>
            <div className="container">
                
                <form className="form" onSubmit={handleLogin}>
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
                        <label className="label" htmlFor='password'>Password</label>
                        <input
                            className="input"
                            type='password'
                            id="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="button center primary max" id='submit'>Login</button>
                    {/* {error && <p id='error'>{error}</p>} */}
                </form>
            </div>
        </div>
    )
}

export default Login;