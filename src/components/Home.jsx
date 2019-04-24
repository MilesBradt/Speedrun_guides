import React from "react";
import styles from '../css/global.css';
import { TodoApp } from './MarkdownEditor';

function Home() {

    return (
      <div id="home-div">
        <p><span id="home-text">Home Works</span></p>
      
        <TodoApp />  
      </div>
    );
}


export default Home;
