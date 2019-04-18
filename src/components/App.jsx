import React from "react";
import Home from "./Home";
import { Switch, Route } from 'react-router-dom';
import styles from '../css/global.css';

function App() {
    return (
    <div>
    <style jsx global>{styles}</style>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
    </div>
    );
}

export default App;
