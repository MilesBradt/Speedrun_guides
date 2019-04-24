import React from "react";
import styles from '../css/global.css';
import { RouteLister } from './RouteList';

function Home() {

    return (
      <div id="home-div">
        <p><span id="home-text">Home Works</span></p>
        <RouteLister />  
      </div>
    );
}

export default Home;
