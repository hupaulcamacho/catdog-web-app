import React from "react";
import CatDog from "../assets/catdog.jpg"
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h2>CatDog WebApp</h2>
            <img src={CatDog} height="250" />
            <p>This is an app to fulfill all of your pet-image-searching desires for both cats and dogs.</p>
        </div>
    )
}

export default Home