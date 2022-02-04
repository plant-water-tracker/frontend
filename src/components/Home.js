import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div id="wrapper">
            <section className="intro">
                <header>
                    <h1>Plant Water Tracker</h1>
                    <p>
                        Never forget when it's time to feed your foliage and quench your
                        plants' thirst.
                    </p>
                    <Link to='login'><button className="button primary">Sign In</button></Link>
                </header>
            </section>
            
            <div className="content">
                <header>
                    <h1>New User</h1>
                    <p>
                        Start creating your own plant watering schedules today.
                    </p>
                    <Link to='signup'><button className="button secondary">Sign Up</button></Link>
                </header>
            </div>
        </div>
    )
}

export default Home;