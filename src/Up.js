import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function Up() {

    return (
        <Router>
            <div>
                <Route path='/update' component={() => {
                    window.location = "https://raw.githubusercontent.com/mariazevedo88/o3smeasures-plugin/master/site.xml";
                    return null;
                }} />
            </div>
        </Router>
    );
}

export default Up;