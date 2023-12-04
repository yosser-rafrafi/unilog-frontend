import React from "react";

import './Home.scss'

import About from '../About/About'
import Advertissement from '../Advertissement/Advertissement';
import Destinations from '../Destinations/Destinations';

const Home = ({connectedUser}) => {
    return (
    <>
    <div id="Home">
        <div className="home-container">
            {/* Background image with text overlay */}
            <div className="background-image">
                <div className="text-overlay">
                    <h1>Vous êtes un étudiant?</h1>
                    <h2>Vous recherchez un appartement ?</h2>
                    <p>Discover Your Perfect Student Home </p>

                </div>
            </div>
        </div>
    </div>
        <Destinations />
        <Advertissement connectedUser={connectedUser}/>
        <About /></>

    )
}

export default Home