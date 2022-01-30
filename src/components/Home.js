import React from "react";
import "./Home.css";

const Home = (props) => {
    return (
        <div id="wrapper">
            <section class="intro">
                <header>
                    <h1>Plant Water Tracker</h1>
                    <p>
                        Never forget when it's time to feed your foliage and quench your
                        plants' thirst.
                    </p>
                    <button class="button primary">Sign In</button>
                </header>
            </section>
            
            <div class="content">
                <header>
                    <h1>New User</h1>
                    <p>
                        Start creating your own plant watering schedules today.
                    </p>
                    <button class="button secondary">Sign Up</button>
                </header>
            </div>
        </div>
    )
}

export default Home;