import React, {useEffect} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Logout = () => {
    const {push} = useHistory();

    useEffect(()=>{

        //temperory push to homepage
        localStorage.removeItem('token');
        push('/');
        // const token = localStorage.getItem('token');

        // axios.post('https://plant-water-tracker.herokuapp.com/api/logout', {}, {
        //     headers: {
        //         authorization: token
        //     }
        // })
        // .then(resp=>{
        //     localStorage.removeItem('token');
        //     push('/');
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    }, [])


    return (<div></div>);
}

export default Logout;